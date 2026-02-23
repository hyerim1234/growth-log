<template>
    <div class="flex justify-center items-center mt-4">
      <button @click="prevPage" :disabled="currentPage === 1">이전</button>
      <span v-for="page in totalPages" :key="page" @click="setPage(page)" :class="['px-3', { 'font-bold': currentPage === page }]">
        {{ page }}
      </span>
      <button @click="nextPage" :disabled="currentPage === totalPages">다음</button>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      totalPages: {
        type: Number,
        required: true
      },
      currentPage: {
        type: Number,
        required: true
      }
    },
    methods: {
      prevPage() {
        if (this.currentPage > 1) {
          this.$emit('page-changed', this.currentPage - 1);
        }
      },
      nextPage() {
        if (this.currentPage < this.totalPages) {
          this.$emit('page-changed', this.currentPage + 1);
        }
      },
      setPage(page) {
        this.$emit('page-changed', page);
      }
    }
  };
  </script>
  
  <style scoped>
  button {
    margin: 0 5px;
    padding: 5px 10px;
    border: 1px solid #ccc;
    background-color: #fff;
  }
  button:disabled {
    opacity: 0.5;
  }
  button:hover:not(:disabled) {
    background-color: #f0f0f0;
  }
  span.px-3 {
    cursor: pointer;
  }
  span.px-3.font-bold {
    font-weight: bold;
  }
  </style>
  