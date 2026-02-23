<template>
  <div class="bg-[#ffffff] p-6 rounded-lg h-[770px] mt-4">
    <h1 class="font-bold text-lg mb-6">내정보 수정</h1>
    <form @submit.prevent="updateProfile" class="max-w-lg space-y-[26px]">
      <div class="mb-5 flex items-center">
        <label for="id" class="w-20 block text-sm font-medium text-gray-900">아이디</label>
        <input v-model="userId" type="text" id="id" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Your ID" required />
      </div>
      <div class="mb-5 flex items-center">
        <label for="password" class="w-20 block text-sm font-medium text-gray-900">비밀번호</label>
        <button type="button" @click="openPasswordModal" class="font-medium text-white-100 text-sm text-center px-5 py-2.5 rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300">변경하기</button>
      </div>
      <div class="mb-5 flex items-center">
        <label for="username" class="w-20 block text-sm font-medium text-gray-900">사용자명</label>
        <input v-model="username" type="text" id="username" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Username" required />
      </div>
      <div class="mb-5 flex items-center">
        <label for="contact" class="w-20 block text-sm font-medium text-gray-900">연락처</label>
        <input v-model="contact" type="text" id="contact" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Contact" required />
      </div>
      <div class="mb-5 flex items-center">
        <label for="email" class="w-20 block text-sm font-medium text-gray-900">이메일</label>
        <input v-model="email" type="email" id="email" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="name@flowbite.com" required />
      </div>
      <div class="flex justify-end">
        <button type="button" @click="cancel" class=" border border-gray-400 text-gray-900 bg-[#ffffff] border-black hover:bg-blue-800 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">취소</button>
        <button type="submit" class="ml-2.5 text-white-100 bg-blue-400 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">저장</button>
      </div>
    </form>
    <PasswordResetModal :show="showPasswordModal" @close="closePasswordModal" />
  </div>
</template>

<script>
import PasswordResetModal from '../ui/modal/PwModal.vue'

export default {
  components: {
    PasswordResetModal
  },
  data () {
    return {
      userId: '',
      password: '',
      username: '',
      contact: '',
      email: '',
      showPasswordModal: false
    }
  },
  methods: {
    updateProfile () {
      console.log('Profile updated:', {
        userId: this.userId,
        password: this.password,
        username: this.username,
        contact: this.contact,
        email: this.email
      })
    },
    openPasswordModal () {
      this.showPasswordModal = true
    },
    closePasswordModal () {
      this.showPasswordModal = false
    },
    cancel () {
      console.log('Profile update cancelled')
    }
  }
}
</script>

<style scoped>
/* 필요한 스타일 추가 */
</style>
