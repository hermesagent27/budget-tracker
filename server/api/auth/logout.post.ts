import { deleteCookie } from 'h3'

export default defineEventHandler((event) => {
  deleteCookie(event, 'app-auth', {
    path: '/',
    domain: process.env.COOKIE_DOMAIN || undefined
  })
  deleteCookie(event, 'budget-tracker-auth')
  return { success: true }
})
