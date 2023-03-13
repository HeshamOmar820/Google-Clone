<template>
    <div class="mx-auto w-full px-4 sm:pl-20 md:pl-[15%] lg:pl-40">
        <p class="text-gray-600 text-md mb-5 mt-3">about {{ Results.searchInformation?.formattedTotalResults }} results ({{Results.searchInformation?.formattedSearchTime}} seconds)</p>
        
        <div class="max-w-xl mb-8" v-for="result in Results.items" :key="result.id">
            <div class="group">

                <a :href="result.link" target="_blank" class="text-sm">{{ result.formattedUrl}}</a>
                <a :href="result.link" target="_blank">
                    <h2 class="truncate text-xl text-blue-800 font-medium group-hover:underline">{{ result.link }}</h2>
                </a>
            </div>
            <p class="line-clamp-2">{{ result.snippet }}</p>
        </div>
    </div>
        
</template>

<script setup>
    import  Results  from '../Results';
    console.log(Results.items)
    /*import { API_KEY, CONTEXT_KEY } from '~~/keys';
    const results = null;
    console.log(`https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=hesham`)
    console.log(data)
    async function getServerSideProps(context){
        const useDummyData = false;
        const data = await fetch(`https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=hesham`
        ).then(response => response.json());

    return{
        props:{
            results: data
        }
    }


    }
*/    
</script>