<template>
  <nav aria-label="Page navigation">
    <ul class="inline-flex items-center justify-center -space-x-px">
      <li>
        <a href="#" class="block py-2 px-3 ml-0 leading-tight text-gray-500 bg-white rounded-l-lg  hover:text-gray-700">
          <span class="sr-only">Previous</span>
          <!-- <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" d="M10 18a.75.75 0 01-.53-.22l-6.75-6.75a.75.75 0 010-1.06l6.75-6.75a.75.75 0 111.06 1.06L5.56 10l5.97 5.97a.75.75 0 01-.53 1.28z" clip-rule="evenodd">
            </path>
          </svg> -->
          <i class="fa-solid fa-chevron-left"></i>
        </a>
      </li>
      <li>
        <a href="#" class="block py-2 px-3 leading-tight text-gray-500 bg-white  hover:text-gray-700">1</a>
      </li>
      <li>
        <a href="#" class="block w-8 h-8  py-1.5 px-3 leading-tight text-blue-600 bg-blue-50 rounded-2xl  hover:bg-blue-100 hover:rounded-lg   hover:text-blue-700">2</a>
      </li>
      <li>
        <a href="#" class="block py-2 px-3 leading-tight text-gray-500 bg-white  hover:text-gray-700">3</a>
      </li>
      <li>
        <a href="#" class="block py-2 px-3 leading-tight text-gray-500 bg-white  hover:text-gray-700">4</a>
      </li>
      <li>
        <a href="#" class="block py-2 px-3 leading-tight text-gray-500 bg-white  hover:text-gray-700">5</a>
      </li>
      <li>
        <a href="#" class="block py-2 px-3 leading-tight text-gray-500 bg-white  hover:text-gray-700">6</a>
      </li>
      <li>
        <a href="#" class="block py-2 px-3 leading-tight text-gray-500 bg-white rounded-r-lg  hover:text-gray-700">
          <span class="sr-only">Next</span>
          <!-- <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 2a.75.75 0 01.53.22l6.75 6.75a.75.75 0 010 1.06l-6.75 6.75a.75.75 0 11-1.06-1.06L14.44 10l-5.97-5.97A.75.75 0 0110 2z" clip-rule="evenodd"></path></svg> -->
          <i class="fa-solid fa-chevron-right"></i>
        </a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'Pagination'
}
</script>

<style scoped>
/* 추가 스타일링을 여기에 추가할 수 있습니다. */
</style>
