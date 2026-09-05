export default defineEventHandler(async (event) => {
  const query = getQuery(event)
  const code = query.code

  if (!code) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Missing authorization code from GitHub.',
    })
  }

  const clientId = process.env.GITHUB_CLIENT_ID
  const clientSecret = process.env.GITHUB_CLIENT_SECRET

  if (!clientId || !clientSecret) {
    throw createError({
      statusCode: 500,
      statusMessage: 'GITHUB_CLIENT_ID or GITHUB_CLIENT_SECRET environment variable is missing on Vercel.',
    })
  }

  try {
    // Exchange code for token with GitHub
    const tokenResponse = await $fetch('https://github.com/login/oauth/access_token', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
      },
      body: {
        client_id: clientId,
        client_secret: clientSecret,
        code,
      },
    })

    const token = tokenResponse.access_token

    if (!token) {
      throw new Error(tokenResponse.error_description || 'Failed to obtain access token from GitHub.')
    }

    // Return handshake script for Decap CMS popup window
    setHeader(event, 'Content-Type', 'text/html; charset=utf-8')
    return `<!DOCTYPE html>
<html>
<head>
  <title>Authorizing Decap CMS...</title>
</head>
<body>
  <p>Authentication successful! Returning to Decap CMS...</p>
  <script>
    (function() {
      const data = JSON.stringify({
        token: ${JSON.stringify(token)},
        provider: 'github'
      });

      function sendAuth() {
        if (window.opener) {
          window.opener.postMessage('authorization:github:success:' + data, '*');
        }
      }

      window.addEventListener('message', sendAuth, false);
      sendAuth();
    })();
  </script>
</body>
</html>`
  } catch (error) {
    setHeader(event, 'Content-Type', 'text/html; charset=utf-8')
    return `<!DOCTYPE html>
<html>
<head><title>Authentication Error</title></head>
<body>
  <h2>Authentication Error</h2>
  <p>${error.message || error}</p>
  <script>
    if (window.opener) {
      window.opener.postMessage('authorization:github:error:${JSON.stringify(error.message)}', '*');
    }
  </script>
</body>
</html>`
  }
})
