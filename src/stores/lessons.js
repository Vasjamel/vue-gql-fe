import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import triggerAPI from '@/api/GetData'

const query = `query Lessons {
	lessons {
		subject
		id
		category
		title
		teacher {
			name
		}
		pupils {
			name
		}
	}
}
`

const getLessonContentQuery = `query lessonContents($find: LessonContentFind) {
	lessonContents(find: $find) {
		id
		order
		value
		type
	}
}`

const deleteLessonQuery = `mutation DeleteLesson($find: LessonFind!) {
    deleteLesson(find:$find) {
        id
    }
}`

const createLessonQuery = `mutation CreateLesson($data: LessonInput!) {
	createLesson(data: $data) {
		subject
		id
	}
}`

const createLessonContentQuery = `mutation CreateLessonContent($data: LessonContentInput!) {
	createLessonContent(data: $data) {
		id
		order
		value
		type
	}
}`

const updateLessonQuery = `mutation UpdateLesson($find: LessonFind!, $data: LessonInput!) {
	updateLesson(find: $find, data: $data) {
		subject
	}
}`

export const useLessonsStore = defineStore('lessons', () => {
  const lessons = ref([])
  const lessonContents = ref([])

  async function getLessons() {
    const res = await triggerAPI({ query })
    lessons.value = res.lessons
  }

  async function createLesson(lesson) {
    const query = createLessonQuery
    const variables = { data: lesson }
    const res = await triggerAPI({ query, variables })
    console.log('res', res)
    if (res.createLesson.id) {
      return res.createLesson.id
    }
  }

  async function deleteLesson(lesson) {
    const variables = { find: { id: lesson.id } }
    const query = deleteLessonQuery
    const res = await triggerAPI({ query, variables })
    lessons.value = lessons.value.filter(({ id }) => id !== lesson.id)
  }

  async function getLessonContent(lesson) {
    const query = getLessonContentQuery
    const variables = { find: { lessonId: lesson.id } }
    const res = await triggerAPI({ query, variables })
    lessonContents.value = res.lessonContents
  }

  async function createLessonContent({ id, lessonContents }) {
    const query = updateLessonQuery
    const find = { id }
    const data = { content: lessonContents.map(({ id, lessonId, ...rest }) => rest) }

    const variables = { find, data }
    console.log({ variables })
    const res = await triggerAPI({ query, variables })
    console.log({ res })
  }

  function clearLessonContent() {
    lessonContents.value = null
  }

  return {
    getLessons,
    deleteLesson,
    getLessonContent,
    clearLessonContent,
    createLesson,
    createLessonContent,
    lessonContents,
    lessons,
  }
})
