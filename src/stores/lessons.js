import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import triggerAPI from '@/api/GetData'

const query = `query Lessons {
	lessons {
		subject
		id
		category
		title
		content {
			type
			value
			order
		}
		teacher {
			name
		}
		pupils {
			name
		}
	}
}
`

const deleteLessonQuery = `mutation DeleteLesson($find: LessonFind!) {
    deleteLesson(find:$find) {
        id
    }
}`

export const useLessonsStore = defineStore('lessons', () => {
  const lessons = ref([])

  const content = ref([])

  async function getLessons() {
    const res = await triggerAPI({ query })
    lessons.value = res.lessons
  }

  async function deleteLesson(lesson) {
    const variables = { find: { id: lesson.id } }
    const query = deleteLessonQuery
    const res = await triggerAPI({ query, variables })
    console.log('res', res)
    lessons.value = lessons.value.filter(({ id }) => id !== lesson.id)
  }

  async function getLessonContent(lesson) {}

  return { getLessons, deleteLesson, lessons }
})
