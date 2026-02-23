<template>
  <div class="min-h-screen bg-[#f2f4f7] p-8">
    <div class="grid grid-cols-1 md:grid-cols-6 gap-8">
      <div class="md:col-span-2">
        <CustomerList />
      </div>
      <div class="md:col-span-4 grid grid-cols-1 md:grid-cols-2 gap-1">
        <div class="md:col-span-1">
          <OwnedPowerPlants />
        </div>
        <div class="md:col-span-1">
          <PlantAllocation />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CustomerList from '@/components/CustomerList.vue'
import OwnedPowerPlants from '@/components/OwnedPowerPlants.vue'
import PlantAllocation from '@/components/PlantAllocation.vue'

export default {
  components: {
    CustomerList,
    OwnedPowerPlants,
    PlantAllocation
  }
}
</script>

<style scoped>
/* 필요한 스타일 추가 */
</style>
