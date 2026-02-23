<template>
  <div
    class="fixed inset-0 z-50 overflow-y-auto bg-black bg-opacity-50"
    :id="modalId"
    tabindex="-1"
    aria-modal="true"
    role="dialog"
    aria-labelledby="`${modalId}Label`"
    aria-hidden="true"
  >
    <div class="flex items-center justify-center min-h-screen">
      <div class="bg-blue-100 rounded-lg shadow-xl  z-10">
        <div class="flex justify-between items-center p-5 border-b border-gray-200 rounded-t-lg">
          <h5 class="text-xl font-medium leading-normal" :id="`${modalId}Label`">
            <slot name="title"></slot>
          </h5>
          <button
            type="button"
            class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
            data-bs-dismiss="modal"
            aria-label="Close"
          >
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
          </button>
        </div>
        <div class="p-6">
          <slot name="body"></slot>
        </div>
        <div class="flex items-center justify-end p-6 border-t border-gray-200 rounded-b-lg">
          <slot name="footer"></slot>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    modalId: {
      type: String,
      required: true
    }
  }
}
</script>
