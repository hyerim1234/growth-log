<template>
  <div class="fixed inset-0 bg-[#ffffff] bg-opacity-95 flex justify-center items-center z-50">
    <h1>고객사 추가</h1>
    <div class="bg-gray-100 p-6 rounded-lg shadow-xl max-w-2xl w-full">
      <form @submit.prevent="save">
        <div class="space-y-4 pt-5">
          <div class="flex align-items-center justify-between ">
            <label for="name" class="block text-sm font-semibold text-gray-700 mt-2">고객사 명</label>
            <input type="text" id="name" v-model="formData.name" class="mt-1 block w-10/12 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" placeholder="고객사 이름 입력">
          </div>

          <div class="flex align-items-center justify-between ">
            <label for="address" class="block text-sm font-semibold text-gray-700 mt-2">주소</label>
            <input type="text" id="address" v-model="formData.address" class="mt-1 block w-10/12 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" placeholder="주소 입력">
          </div>

          <div class="flex align-items-center justify-between ">
            <label for="phone" class="block text-sm font-semibold text-gray-700 mt-2">전화번호</label>
            <input type="text" id="phone" v-model="formData.phone" class="mt-1 block w-10/12 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" placeholder="전화번호 입력">
          </div>

          <div class="flex align-items-center justify-between ">
            <label for="email" class="block text-sm font-semibold text-gray-700 mt-2">메일 주소</label>
            <input type="email" id="email" v-model="formData.email" class="mt-1 block w-10/12 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" placeholder="이메일 주소 입력">
          </div>
          <div class="flex align-items-center justify-between ">
            <label for="email" class="block text-sm font-semibold text-gray-700 mt-2">발전소 개수</label>
            <input type="email" id="email" v-model="formData.email" class="mt-1 block w-10/12 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" placeholder="이메일 주소 입력">
          </div>
          <div class="flex align-items-center justify-between ">
            <label for="email" class="block text-sm font-semibold text-gray-700 mt-2">총 용량</label>
            <input type="email" id="email" v-model="formData.email" class="mt-1 block w-10/12 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" placeholder="이메일 주소 입력">
          </div>
        </div>

        <div class="mt-6 flex justify-end space-x-3 text-white-100">
          <button type="submit" class="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">저장</button>
          <button type="button" @click="close" class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-medium py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2">취소</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      formData: {
        name: '',
        address: '',
        phone: '',
        email: ''
      }
    }
  },
  methods: {
    close () {
      this.$emit('close')
    },
    save () {
      // Save logic here
      console.log("Saved", this.formData)
      this.close()
    }
  }
}
</script>

<style scoped>
/* 필요에 따라 여기에 추가 CSS를 작성할 수 있습니다. */
</style>
