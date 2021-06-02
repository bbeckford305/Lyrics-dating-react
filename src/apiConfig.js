let apiUrl
const apiUrls = {
  production: 'https://bbeckford305.github.io/Lyrics-dating-react/',
  development: 'http://localhost:4741'
}

if (window.location.hostname === 'localhost') {
  apiUrl = apiUrls.development
} else {
  apiUrl = apiUrls.production
}

export default apiUrl
