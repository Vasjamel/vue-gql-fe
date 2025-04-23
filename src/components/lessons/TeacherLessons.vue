<script setup>
import { computed, ref } from 'vue'
import { storeToRefs } from 'pinia'
import DataTable from 'primevue/datatable'
import Column from 'primevue/column'
import { Button, ButtonGroup } from 'primevue'

import { useLessonsStore } from '@/stores/lessons'
import LessonContent from './LessonContent.vue'
const lessonsStore = useLessonsStore()
lessonsStore.getLessons()

const { lessons } = storeToRefs(lessonsStore)

const selectedLessons = ref([])

function startEditing(item) {
  console.log('editing', { item })
}
function startDeleting(item) {
  const deleteConfirm = window.confirm('Are you sure?')
  console.log({ item, deleteConfirm })
  if (deleteConfirm) {
    lessonsStore.deleteLesson(item)
  }
}

function showContent(item) {
  console.log('show content', { item })
}
</script>

<template>
  <div>
    <header>Some good lessons</header>

    <Button type="button" label="Create lesson" />

    <DataTable v-model:selection="selectedLessons" :value="lessons" dataKey="id">
      <Column selectionMode="multiple" headerStyle="width: 3rem"></Column>
      <Column field="id" header="ID"></Column>
      <Column field="title" header="Title">
        <template #body="{ data }">
          <span @click="showContent(data)">{{ data.title }}</span>
        </template>
      </Column>
      <Column field="subject" header="Subject"></Column>
      <Column field="category" header="Category"></Column>
      <Column field="teacher.name" header="Teacher"></Column>
      <Column header="Actions">
        <template #body="{ data }">
          <ButtonGroup>
            <Button
              v-tooltip.top="`Edit`"
              type="button"
              icon="pi pi-pencil"
              text
              aria-label="Edit"
              size="small"
              @click="startEditing(data)"
            />
            <Button
              type="button"
              icon="pi pi-trash"
              text
              aria-label="Delete"
              size="small"
              v-tooltip.top="`Delete`"
              @click="startDeleting(data)"
            />
          </ButtonGroup>
        </template>
      </Column>
    </DataTable>

    <LessonContent />
  </div>
</template>

<style lang="scss" scoped></style>
