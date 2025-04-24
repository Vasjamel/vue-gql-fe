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

export const useLessonsStore = defineStore('lessons', () => {
  const lessons = ref([])
  const lessonContents = ref([])

  async function getLessons() {
    const res = await triggerAPI({ query })
    lessons.value = res.lessons
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

  return { getLessons, deleteLesson, getLessonContent, lessonContents, lessons }
})
