<template>
  <div>
    <energy-table></energy-table>
  </div>
</template>

<script>
import EnergyTable from '@/components/ui/table/EnergyTable.vue'
export default {
  components: { EnergyTable },
  data () {
    return {
      message: 'Hello, Vue!'
    }
  },
  computed: {
    reversedMessage () {
      return this.message.split('').reverse().join('')
    }
  },
  methods: {
    greet () {
      alert(this.message)
    }
  }
}
</script>

<style scoped>
div {
  color: blue;
}
button {
  background-color: lightgray;
  border: none;
  padding: 10px;
  cursor: pointer;
}
</style>
