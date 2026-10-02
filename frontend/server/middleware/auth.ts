import { getCookie, createError } from 'h3'

export default defineEventHandler((event) => {
  const path = event.path || event.node.req.url || ''

  // Skip auth endpoints and login page
  if (path.startsWith('/api/auth/') || path === '/login') return

  const config = useRuntimeConfig()

  // Check shared marketplace cookie first, then app-specific cookie
  const sharedAuth = getCookie(event, 'app-auth')
  const appAuth = getCookie(event, 'budget-tracker-auth')

  const validShared = sharedAuth && sharedAuth === config.authPassword
  const validApp = appAuth && appAuth === config.authPassword

  if (!validShared && !validApp) {
    throw createError({ statusCode: 401, statusMessage: 'Unauthorized' })
  }
})
