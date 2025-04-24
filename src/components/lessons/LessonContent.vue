<script setup>
import { ref, computed, watchEffect } from 'vue'
import { useLessonsStore } from '@/stores/lessons'
import { storeToRefs } from 'pinia'

const lessonStore = useLessonsStore()

const { lessonContents } = storeToRefs(lessonStore)

const localContent = ref(null)

watchEffect(() => {
  localContent.value = lessonContents.value.length ? [...lessonContents.value] : []
})

const draggedItemIndex = ref(null)

function startDrag($event, index) {
  draggedItemIndex.value = index
  $event.dataTransfer.effectAllowed = 'move'
}

function onDragEnter(targetIndex) {
  if (draggedItemIndex.value === targetIndex) return
  const draggedItem = localContent.value.splice(draggedItemIndex.value, 1)[0]
  localContent.value.splice(targetIndex, 0, draggedItem)
  draggedItemIndex.value = targetIndex
}

function onDrop() {
  draggedItemIndex.value = null
}
</script>

<template>
  <div>Lesson Content</div>
  <TransitionGroup>
    <section
      class="draggable-item"
      v-for="(contentItem, index) in localContent"
      :key="contentItem.id"
      :draggable="true"
      @dragstart="startDrag($event, contentItem)"
      @dragenter="onDragEnter(index)"
      @dragleave="onDragLeave"
      @drop="onDrop($event, index)"
      @dragover.prevent
    >
      {{ contentItem.value }}
    </section>
  </TransitionGroup>
</template>

<style scoped>
.v-enter-from,
.v-leave-to {
  opacity: 0;
}
.draggable-item {
  box-sizing: border-box;
  border: 1px solid black;
  transition: transform 0.5s ease;
}
</style>
