import { watch } from 'vue'
import { useRoute } from 'vue-router'
import { useLessonsStore } from '@/stores/lessons'

export function useRouteWatcher() {
  const route = useRoute()
  const lessonsStore = useLessonsStore()

  watch(route, ({ name, params }) => {
    if (name === 'lessonContent' && params.id) {
      lessonsStore.getLessonContent({ id: params.id })
    }
  })
}
