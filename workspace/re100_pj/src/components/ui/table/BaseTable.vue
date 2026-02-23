<template>
  <div class="table-container">
    <table class="min-w-full bg-white">
      <thead>
        <tr>
          <th v-for="(column, index) in columns" :key="index" class="py-2 px-4 border-b">
            {{ column.label }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(row, rowIndex) in data" :key="rowIndex" class="hover:bg-gray-100">
          <td v-for="(column, colIndex) in columns" :key="colIndex" class="py-2 px-4 border-b">
            <slot :name="column.slot" :row="row" :column="column">
              {{ row[column.field] }}
            </slot>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'BaseTable',
  props: {
    data: {
      type: Array,
      required: true
    },
    columns: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped>
.table-container {
  width: 100%;
  overflow-x: auto;
}
</style>
