<script setup>
import { computed, ref } from 'vue'
import { InputText, FloatLabel, Select, SpeedDial, Button } from 'primevue'
import { useLessonsStore } from '@/stores/lessons'
import { useRouter } from 'vue-router'
import RouteNames from '@/router/RouteNames.enum'

const router = useRouter()

const subject = ref('')
const category = ref('')
const objective = ref('')
const title = ref('')
const selectedTeacher = ref('')
const lessonsStore = useLessonsStore()
const teachers = [
  {
    id: 'cm939czab000fgpt33bqeaxw7',
    name: 'pestram16',
    lessons: [],
    user: {
      name: 'pestram16',
    },
  },
  {
    id: 'cm939cum1000egpt3khu122na',
    name: 'pestram15',
    lessons: [],
    user: {
      name: 'pestram15',
    },
  },
]

const isInvalid = computed(() => !subject.value.trim() || !title.value.trim())

function createLesson() {
  const lessonData = {
    subject: subject.value,
    category: category.value,
    objective: objective.value,
    title: title.value,
    ...(selectedTeacher.value && { teacher: { connect: { id: selectedTeacher.value } } }),
  }
  const id = lessonsStore.createLesson(lessonData)

  if (id) {
    router.push({ name: RouteNames.LESSON_CONTENT, params: { id } })
  }
}
</script>

<template>
  <div>
    CREATE LESSON
    <form class="form">
      <section class="form-item">
        <FloatLabel variant="on">
          <InputText :invalid="!subject" id="subject" v-model="subject" />
          <label for="subject">Subject</label>
        </FloatLabel>
      </section>
      <section class="form-item">
        <FloatLabel variant="on">
          <InputText :invalid="!title" id="title" v-model="title" />
          <label for="title">Title</label>
        </FloatLabel>
      </section>
      <section class="form-item">
        <FloatLabel variant="on">
          <InputText id="category" v-model="category" />
          <label for="category">Category</label>
        </FloatLabel>
      </section>
      <section class="form-item">
        <FloatLabel variant="on">
          <InputText id="objective" v-model="objective" />
          <label for="objective">Objective</label>
        </FloatLabel>
      </section>
      <section>
        <Select
          v-model="selectedTeacher"
          :options="teachers"
          optionLabel="name"
          optionValue="id"
          placeholder="Select a Teacher"
        />
      </section>

      <section>
        <Button label="Setup lesson content" @click="createLesson" :disabled="isInvalid" />
      </section>
    </form>
  </div>
</template>

<style lang="css" scoped>
/* .form {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
} */

.form-item {
  grid-column: span 1;
}
</style>
