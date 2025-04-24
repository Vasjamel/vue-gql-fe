import { createRouter, createWebHistory } from 'vue-router'
import TeacherLessons from '@/components/lessons/TeacherLessons.vue'
import LessonContent from '@/components/lessons/LessonContent.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: TeacherLessons,
    },
    {
      path: '/lesson/:id',
      name: 'lessonContent',
      component: LessonContent,
    },
  ],
})

export default router
