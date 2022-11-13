import axios from 'axios'
const GITHUB_URL = process.env.REACT_APP_GITHUB_URL
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN

const github = axios.create({
  baseURL: GITHUB_URL,
  headers: {
    'Authorization': `token ${GITHUB_TOKEN}`
  }
})

// Get search results
export const searchUsers = async(searchTerm) => {
  const params = new URLSearchParams({
    q: searchTerm
  })

  const response = await github.get(`/search/users?${params}`)
  return response.data.items
}

// Get user and user repos
export const getUserAndUserRepos = async(login) => {
  const [user, repos] = await Promise.all([
    github.get(`/users/${login}`),
    github.get(`/users/${login}/repos`)
  ])

  return {
    user: user.data, 
    repos: repos.data
  }
}
