<template>
  <div class="h-[800px] bg-[#ffffff] p-6 rounded-xl shadow-md mx-auto  mt-4">
    <h1 class="text-lg font-bold">고객목록</h1>
    <div class="overflow-hidden">
      <div class="mt-8 overflow-y-auto h-[600px]">
        <table class="text-gray-500 mx-auto min-w-[1712px]">
          <thead class="text-gray-700 uppercase bg-gray-100 text-left sticky top-0">
            <tr>
              <th scope="col" class="px-3 py-3">고객목록</th>
              <th scope="col" class="px-3 py-3">이메일주소</th>
              <th scope="col" class="px-3 py-3 text-center">연락처</th>
              <th scope="col" class="px-3 py-3 text-center">발전소 개수</th>
              <th scope="col" class="px-3 py-3 text-center">총용량</th>
              <th scope="col" class="px-3 py-3 text-center">생성일</th>
              <th scope="col" class="px-3 py-3 text-center">비밀번호</th>
            </tr>
          </thead>
          <tbody>
            <tr class="bg-white border-b hover:bg-gray-50 text-sm" v-for="(customer, index) in customers" :key="index">
              <td class="px-3 py-2.5 font-medium text-gray-900 whitespace-nowrap dark:text-white">{{ customer.name }}</td>
              <td class="px-3 py-2.5">{{ customer.email }}</td>
              <td class="px-3 py-2.5 text-center">{{ customer.phone }}</td>
              <td class="px-3 py-2.5 text-center">{{ customer.plants }}</td>
              <td class="px-3 py-2.5 text-center">{{ customer.capacity }}</td>
              <td class="px-3 py-2.5 text-center">{{ customer.created }}</td>
              <td class="px-3 py-2.5 text-center">
                <button @click="openPasswordModal" class="text-gray-800 font-bold text-lg-center hover:underline border border-2 border-blue-400 rounded-md p-2">
                  변경
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <!-- pagination -->

      <nav aria-label="Page navigation">
        <ul class="flex items-center justify-center  mt-10">
          <li>
            <a href="#" class="flex items-center justify-center px-4 h-10 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700">
              <span class="sr-only">Previous</span>
              <svg class="w-3 h-3 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4"/>
              </svg>
            </a>
          </li>
          <li>
            <a href="#" class="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700">1</a>
          </li>
          <li>
            <a href="#" class="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700">2</a>
          </li>
          <li>
            <a href="#" aria-current="page" class="z-10 flex items-center justify-center px-4 h-10 leading-tight text-blue-600 border border-blue-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700">3</a>
          </li>
          <li>
            <a href="#" class="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700">4</a>
          </li>
          <li>
            <a href="#" class="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700">5</a>
          </li>
          <li>
            <a href="#" class="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700">
              <span class="sr-only">Next</span>
              <svg class="w-3 h-3 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
              </svg>
            </a>
          </li>
        </ul>
      </nav>
    </div>
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
      customers: [
        { name: '사용자명1', email: 're101010@hallsk', phone: '010-1234-1234', plants: 1, capacity: '80MW', created: '2024-04-04' },
        { name: '사용자명2', email: 're101010@hallsk', phone: '010-1234-1234', plants: 1, capacity: '80MW', created: '2024-04-04' },
        { name: '사용자명3', email: 're101010@hallsk', phone: '010-1234-1234', plants: 1, capacity: '80MW', created: '2024-04-04' },
        { name: '사용자명4', email: 're101010@hallsk', phone: '010-1234-1234', plants: 1, capacity: '80MW', created: '2024-04-04' },
        { name: '사용자명5', email: 're101010@hallsk', phone: '010-1234-1234', plants: 1, capacity: '80MW', created: '2024-04-04' },
        { name: '사용자명6', email: 're101010@hallsk', phone: '010-1234-1234', plants: 1, capacity: '80MW', created: '2024-04-04' },
        { name: '사용자명7', email: 're101010@hallsk', phone: '010-1234-1234', plants: 1, capacity: '80MW', created: '2024-04-04' },
        { name: '사용자명8', email: 're101010@hallsk', phone: '010-1234-1234', plants: 1, capacity: '80MW', created: '2024-04-04' },
        { name: '사용자명9', email: 're101010@hallsk', phone: '010-1234-1234', plants: 1, capacity: '80MW', created: '2024-04-04' },
        { name: '사용자명10', email: 're101010@hallsk', phone: '010-1234-1234', plants: 1, capacity: '80MW', created: '2024-04-04' },
        { name: '사용자명11', email: 're101010@hallsk', phone: '010-1234-1234', plants: 1, capacity: '80MW', created: '2024-04-04' },
        { name: '사용자명12', email: 're101010@hallsk', phone: '010-1234-1234', plants: 1, capacity: '80MW', created: '2024-04-04' }
      ],
      showPasswordModal: false
    }
  },
  methods: {
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
