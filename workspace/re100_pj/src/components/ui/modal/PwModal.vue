<template>
  <div v-if="show" class="fixed inset-0 z-50 flex items-center justify-center bg-gray-500 bg-opacity-50">
    <div class="bg-white p-6 rounded-lg shadow-lg max-w-xl w-full bg-white-100">
      <h2 class="text-lg font-bold mb-4">비밀번호 재설정</h2>
      <div class="mb-4">
        <label for="new-password" class="block mb-2 text-sm font-medium text-gray-900">현재 비밀번호</label>
        <input v-model="newPassword" type="password" id="new-password" class="bg-red-50 border border-red-500 text-red-900 placeholder-red-700 shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Current Password" required />
        <p class="mt-2 text-sm text-red-600 dark:text-red-500"><span class="font-medium">비밀번호를</span> 다시 확인해주세요</p>
      </div>
      <div class="mb-4">
        <label for="new-password" class="block mb-2 text-sm font-medium text-gray-900">새 비밀번호</label>
        <input v-model="newPassword" type="password" id="new-password" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="New Password" required />
      </div>
      <div class="mb-4">
        <label for="new-password" class="block mb-2 text-sm font-medium text-gray-900">새 비밀번호 확인</label>
        <input v-model="newPassword" type="password" id="new-password" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="New Password" required />
      </div>
      <div class="flex justify-end">
        <button @click="closeModal" class="border-solid border-2 border-gray-400 bg-white text-gray-800 bg-white hover:bg-blue-800 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2">취소</button>
        <button @click="resetPassword" class="text-white bg-blue-400 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center text-white-100">저장</button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    show: {
      type: Boolean,
      required: true
    }
  },
  data () {
    return {
      newPassword: ''
    }
  },
  methods: {
    closeModal () {
      this.$emit('close')
    },
    resetPassword () {
      console.log('Password reset to:', this.newPassword)
      this.closeModal()
    }
  }
}
</script>
