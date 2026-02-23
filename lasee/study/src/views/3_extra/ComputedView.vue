<template>
  <div class="container mx-auto px-4 py-8">
    <div class="flex items-center mb-4">
      <label for="firstName" class="mr-4 text-sm font-medium w-full">이름:</label>
      <input type="text" name="" id="firstName" v-model="firstName" class="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500" />
      <input type="text" name="" id="lastName" v-model="lastName" class="w-full px-3 py-2 rounded-md border border-gray-300 ml-4 focus:outline-none focus:ring-1 focus:ring-blue-500" />
    </div>

    <h1 class="text-2xl font-bold mb-4">{{ fullName }}</h1>
    <p class="text-gray-700 mb-2">{{ title }} {{ firstName }}, {{ lastName }}</p>
    <p class="text-gray-700 mb-2">{{ title }} {{ firstName }}, {{ lastName }}</p>
    <p class="text-gray-700 mb-2">{{ title }} {{ firstName }}, {{ lastName }}</p>
    <p class="text-gray-700 mb-2">{{ fullName }}</p>

    <div class="flex items-center mb-4 w-full">
      <label for="age" class="mr-4 text-sm font-medium w-full">나이:</label>
      <input type="number" name="" id="age" v-model="age" class="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500" />
    </div>

    <p class="text-gray-700">{{ age >= 20 ? '성인' : '미성년자' }}</p>
    <p class="text-gray-700">{{ isAdult }}</p>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      firstName: 'John',
      lastName: 'Doe',
      title: 'Mr.',
      age: 0
    }
  },
  computed: {
    fullName() {
      return this.title + ' ' + this.firstName + ', ' + this.lastName
    },
    isAdult() {
      return this.age >= 20 ? '성인' : '미성년자'
    }
  }
}
</script>
