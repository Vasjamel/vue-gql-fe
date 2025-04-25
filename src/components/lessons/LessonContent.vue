<script setup>
import { ref, computed, watchEffect } from 'vue'
import { useLessonsStore } from '@/stores/lessons'
import { useRoute } from 'vue-router'
import { storeToRefs } from 'pinia'
import { Button, Textarea } from 'primevue'
const lessonStore = useLessonsStore()

const { lessonContents } = storeToRefs(lessonStore)

const localContent = ref(null)
const addingText = ref(false)
const pes = ref('')
const route = useRoute()

watchEffect(() => {
  localContent.value = lessonContents.value.length ? [...lessonContents.value] : []
})

const draggedItemIndex = ref(null)

function startAddingText() {
  addingText.value = true
}

function saveText() {
  const lessonId = route.params.id
  const order =
    !localContent.value || !localContent.value.length ? 1 : localContent.value.length + 1
  const id = `${Math.random()}`
  const textContentItem = {
    type: 'TEXT',
    id,
    lessonId,
    value: pes.value,
    order,
  }
  console.log({ textContentItem })
  localContent.value.push(textContentItem)
  addingText.value = false
  pes.value = ''
}

function saveLessonContent() {
  console.log(localContent.value)
  lessonStore.createLessonContent({ id: route.params.id, lessonContents: localContent.value })
}

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
      @dragstart="startDrag($event, index)"
      @dragenter="onDragEnter(index)"
      @dragleave="onDragLeave"
      @drop="onDrop($event, index)"
      @dragover.prevent
    >
      {{ contentItem.value }}
    </section>
  </TransitionGroup>
  <div>
    <Button label="Add text" @click="startAddingText" />
  </div>
  <section v-if="addingText">
    <Textarea v-model="pes" rows="5" cols="30" style="resize: none" />
    <div>
      <Button label="Save text" size="small" @click="saveText" />
    </div>
  </section>
  <section>
    <Button label="Save Lesson Content" @click="saveLessonContent" />
  </section>
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
