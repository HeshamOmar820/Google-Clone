<template>
    <div class="mx-auto w-full px-4 sm:pl-20 md:pl-[15%] lg:pl-40 flex-1">
      <template v-if="isLoading">
        <div v-for="i in 6" :key="i" class="rounded-md max-w-xl w-full mt-5 mb-2">
          <div class="animate-pulse flex space-x-4">
            <div class="flex-1 space-y-2 py-1">
              <div class="h-4 bg-slate-500 rounded-full"></div>
              <div class="space-y-2 pr-10">
                <div class="grid grid-cols-3 gap-2">
                  <div class="h-2 bg-slate-500 rounded col-span-3"></div>
                  <div class="h-2 bg-slate-500 rounded col-span-2"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </template>
      <template v-else>
        <p class="text-gray-600 text-md mb-5 mt-3">about {{ Results.searchInformation?.formattedTotalResults }} results ({{Results.searchInformation?.formattedSearchTime}} seconds)</p>
        <div  class="max-w-xl mb-8" v-for="result in Results.items" :key="result.id">
          <div class="group">
            <a :href="result.link" target="_blank" class="text-sm">{{ result.formattedUrl}}</a>
            <a :href="result.link" target="_blank">
              <h2 class="truncate text-xl text-blue-800 font-medium group-hover:underline">{{ result.title }}</h2>
            </a>
          </div>
          <p class="line-clamp-2">{{ result.snippet }}</p>
        </div>
        <div class="flex justify-between max-w-lg text-blue-700 mb-10">
          <div @click="getPreviousResults" class="flex flex-grow flex-col items-center cursor-pointer hover:underline">
            <Icon name="material-symbols:arrow-back-sharp" size="16px"/>
            <button>previous</button>
          </div>
          <div @click="getNextResults" class="flex flex-grow flex-col items-center cursor-pointer hover:underline">
            <Icon name="material-symbols:arrow-forward-sharp" size="16px"/>
            <button>next</button>
          </div>
        </div>
      </template>
    </div>
      
</template>

<script>
import axios from 'axios';
import { API_KEY, CONTEXT_KEY } from '../keys';
export default {
  data() {
    return {
        Results: [],
        nextResults: null,
        previousResults: null,
        query: null,
        isLoading: false,
    }
  },
  created() {
    this.query = this.$route.query.q;
    this.getSearchResults();
  },
  methods: {
    getSearchResults(start=1){
      this.isLoading=true
      axios.get(`https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${this.query}&start=${start}`)
      .then(response => {
        this.Results = response.data;
        this.isLoading=false;
        if (this.Results.queries.nextPage) {
          this.nextResults=this.Results.queries.nextPage[0].startIndex;
        }
        if (this.Results.queries.previousPage){
          this.previousResults=this.Results.queries.previousPage[0].startIndex;
        }
      })
      .catch(error => {
        console.error(error);
        this.isLoading=false;
      });
    },
    getNextResults(){
      this.getSearchResults(this.nextResults);
    },
    getPreviousResults(){
      this.getSearchResults(this.previousResults);
    }
  },
  mounted() {
    this.searchQuery = this.$route.query.q;
  }
}
</script>