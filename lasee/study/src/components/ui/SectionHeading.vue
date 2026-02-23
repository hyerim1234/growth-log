<template>
    <div class="border-b-2">
      <nav class="flex space-x-4">
        <a v-for="tab in tabs" :key="tab" 
           :class="['py-2 px-4 text-sm font-medium text-center rounded-t-lg border-b-2', 
                   currentTab === tab ? 'text-blue-600 border-blue-600' : 'text-gray-600 border-transparent']"
           @click="currentTab = tab">
          {{ tab }}
        </a>
      </nav>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        currentTab: 'Applied',
        tabs: ['Applied', 'Phone Screening', 'Interview', 'Offer', 'Hired']
      };
    }
  }
  </script>
  
  <style scoped>
  /* Tailwind CSS is utility-first, so most styling is done in the template via class bindings */
  </style>
  