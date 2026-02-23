<template>
  <div>
    <button
      class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring"
      @click="openModal('userModal')"
    >
      Show Modal
    </button>
    <button
      class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring"
      @click="openModal('userModal2')"
    >
      Show Modal2
    </button>

    <slot-modal modalId="userModal" v-if="isActive('userModal')">
      <template v-slot:title>모달창 타이틀</template>
      <template v-slot:body>
        <div class="grid grid-cols-3 gap-4">
          <div>
            <label class="form-label">이메일주소</label>
          </div>
          <div class="col-span-2">
            <input type="email" class="form-control border-gray-300" />
          </div>
          <div>
            <label class="form-label">전화번호</label>
          </div>
          <div class="col-span-2">
            <input type="tel" class="form-control border-gray-300" />
          </div>
          <div>
            <label class="form-label">주소</label>
          </div>
          <div class="col-span-2">
            <input type="text" class="form-control border-gray-300" />
          </div>
        </div>
      </template>
      <template v-slot:footer>
        <button type="button" class="px-4 py-2 mr-2 bg-gray-500 text-white rounded hover:bg-gray-600" @click="closeModal('userModal')">
          닫기
        </button>
        <button type="button" class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
          저장
        </button>
      </template>
    </slot-modal>

    <slot-modal modalId="userModal2" v-if="isActive('userModal2')">
      <template v-slot:title>모달창 타이틀2</template>
      <template v-slot:body>
        <div class="space-y-2">
          <p>문장1</p>
          <p>문장2</p>
          <p>문장3</p>
        </div>
      </template>
      <template v-slot:footer>
        <button type="button" class="px-4 py-2 mr-2 bg-gray-500 text-white rounded hover:bg-gray-600" @click="closeModal('userModal2')">
          닫기
        </button>
        <button type="button" class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
          저장
        </button>
      </template>
    </slot-modal>
  </div>
</template>
<script>
import SlotModal from '@/components/fragments/slotModal.vue'

export default {
  components: { SlotModal },
  data() {
    return {
      activeModals: []
    }
  },
  methods: {
    openModal(modalId) {
      if (!this.activeModals.includes(modalId)) {
        this.activeModals.push(modalId);
      }
    },
    closeModal(modalId) {
      this.activeModals = this.activeModals.filter(id => id !== modalId);
    },
    isActive(modalId) {
      return this.activeModals.includes(modalId);
    }
  }
}
</script>
