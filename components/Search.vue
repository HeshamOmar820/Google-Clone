<template>
    <div>
      <input type="text" v-model="query" placeholder="Search...">
      <button @click="search">Search</button>
      <ul>
        <li v-for="result in results" :key="result.link">
          <a :href="result.link">{{ result.title }}</a>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  import { google } from 'googleapis';
  
  const customsearch = google.customsearch('v1');
  
  export default {
    data() {
      return {
        query: '',
        results: [],
      };
    },
    methods: {
      async search() {
        const result = await customsearch.cse.list({
          cx: 'f6d16b545e75a4198',
          q: this.query,
          auth: 'AIzaSyAXgm7aW2thkA1lZaYiPmYH3Ve2Diay8pM',
        });
  
        this.results = result.data.items;
        
      },
    },
  };
  </script>
  