import { watch } from 'vue'
import { useRoute } from 'vue-router'
import { useLessonsStore } from '@/stores/lessons'

export function useRouteWatcher() {
  const route = useRoute()
  const lessonsStore = useLessonsStore()

  watch(
    () => route.fullPath,
    (newValue, oldValue) => {
      if (route.name === 'lessonContent' && route.params.id) {
        return lessonsStore.getLessonContent({ id: route.params.id })
      }
      // if (oldValue.name === 'lessonContent') {
      //   lessonsStore.clearLessonContent()
      // }
    },
  )
}
