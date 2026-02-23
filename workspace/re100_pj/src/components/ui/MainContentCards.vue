<!-- <template>
  <div class="flex justify-between items-center">
    <div v-for="card in cards" :key="card.title" class="relative z-20 rounded-lg  w-1/4 mx-2 h-[280px] text-gray-500 pt-6 pl-6 bg-white">
      <h3 class="text-lg font-semibold mt-2">{{ card.title }}</h3>
      <ProgressCircle :percentage="card.percentage" class="mt-4"/>
    </div>
  </div>
</template>

<script>
import ProgressCircle from '@/components/chart/ProgressCircle.vue'

export default {
  components: {
    ProgressCircle
  },
  props: {
    cards: {
      type: Array,
      required: true
    }
  }
}
</script> -->
<template>
  <div class="flex justify-between items-center">
    <div v-for="card in cards" :key="card.title" class="relative z-20 rounded-lg shadow-lg w-1/4 mx-2 h-[280px] text-gray-500 pt-6 pl-6 bg-white">
      <h3 class="text-lg font-semibold mt-2">{{ card.title }}</h3>
      <ProgressCircle :percentage="card.percentage" class="mt-4"/>
      <button v-if="showMoreButton && card.title === '이행현황'" @click="openModal" class="absolute bottom-4 right-4 text-blue-500">+ 더보기</button>
    </div>
    <Modal v-if="showModal" @close="showModal = false"/>
  </div>
</template>

<script>
import ProgressCircle from '@/components/chart/ProgressCircle.vue'
//import ProgressStatusModal from '@/components/ui/modal/ProgressStatusModal.vue'

export default {
  components: {
    ProgressCircle
    // ProgressStatusModal
  },
  props: {
    cards: {
      type: Array,
      required: true
    },
    showMoreButton: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      showModal: false
    }
  },
  methods: {
    showMore () {
      this.$emit('show-more')
    }
  }
}
</script>
