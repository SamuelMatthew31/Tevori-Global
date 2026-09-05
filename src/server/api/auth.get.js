export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig()
  const clientId = process.env.GITHUB_CLIENT_ID || config.githubClientId

  if (!clientId) {
    throw createError({
      statusCode: 500,
      statusMessage: 'GITHUB_CLIENT_ID environment variable is missing on Vercel.',
    })
  }

  const githubAuthUrl = new URL('https://github.com/login/oauth/authorize')
  githubAuthUrl.searchParams.set('client_id', clientId)
  githubAuthUrl.searchParams.set('scope', 'repo,user')

  // Redirect to GitHub OAuth login
  return sendRedirect(event, githubAuthUrl.toString(), 302)
})
