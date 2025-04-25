import { createRouter, createWebHistory } from 'vue-router'
import RouteNames from './RouteNames.enum'
import TeacherLessons from '@/components/lessons/TeacherLessons.vue'
import LessonContent from '@/components/lessons/LessonContent.vue'
import CreateLesson from '@/components/lessons/CreateLesson.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: RouteNames.HOME,
      component: TeacherLessons,
    },
    {
      path: '/lesson/:id',
      name: RouteNames.LESSON_CONTENT,
      component: LessonContent,
    },
    {
      path: '/create-lesson',
      name: RouteNames.CREATE_LESSON,
      component: CreateLesson,
    },
  ],
})

export default router
