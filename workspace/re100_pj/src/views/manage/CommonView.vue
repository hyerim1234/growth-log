<template>
  <div class="bg-[#ffff] min-h-[800px] rounded-2xl">
    <div  class="flex justify-between align-content-center bg-[#ffff] p-20 rounded-2xl">
      <h1 class="text-lg font-bold">{{ title }} </h1>

      <div class="flex space-x-4 justify-end">
        <!-- First form for country selection -->
        <form class="max-w-sm">
          <select id="countries" class="border border-gray-300 text-grey-100 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
            <option selected>조건</option>
            <option value="US">United States</option>
            <option value="CA">Canada</option>
            <option value="FR">France</option>
            <option value="DE">Germany</option>
          </select>
        </form>

        <!-- Second form for country selection -->
        <form class="max-w-sm">
          <select id="countries" class="border border-gray-300 text-grey-100 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
            <option selected>조건</option>
            <option value="US">United States</option>
            <option value="CA">Canada</option>
            <option value="FR">France</option>
            <option value="DE">Germany</option>
          </select>
        </form>

        <!-- Dropdown menu and search form -->
        <form>
          <div class="flex">
            <label for="search-dropdown" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Your Email</label>

            <div id="dropdown" class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
              <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdown-button">
                <li>
                  <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Shopping</a>
                </li>
                <li>
                  <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Images</a>
                </li>
                <li>
                  <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">News</a>
                </li>
                <li>
                  <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Finance</a>
                </li>
              </ul>
            </div>

            <div class="relative w-full">
              <input type="search" id="search-dropdown" class="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-r-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500" placeholder="내용" required />
              <button type="submit" class="absolute top-0 right-0 p-2.5  text-sm font-medium text-white bg-blue-700 rounded-r-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 text-white-100">
                검색
                <!-- <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                </svg> -->
              </button>
            </div>
            <div class="w-full mx-2">
              <button @click="showModal = true" class="bg-blue-700 text-white-100 rounded-md p-2.5">
                + 고객사 추가
              </button>

            </div>
            <ModalInput v-if="showModal" @close="showModal = false" />
          </div>
        </form>
      </div>
    </div>

    <div class="absolute top-[60%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-center">
      데이터가 존재하지 않습니다.
      <img :src="imagePath" alt="No data available">
    </div>
  </div>

</template>

<script>
import ModalInput from '@/components/ui/ModalInput.vue'

export default {
  components: {
    ModalInput
  },

  data () {
    return {
      // 이미지 경로를 데이터 속성으로 설정
      imagePath: require('@/assets/data_none.svg'),
      showModal: false, // 모달 창 표시 상태를 관리하는 데이터
      tabs: ['고객사 관리', '발전소 관리', '발전소 할당']
    }
  },

  closeModal () {
    this.$emit('close')
  }
}
</script>
