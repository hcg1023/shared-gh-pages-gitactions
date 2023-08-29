import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

const isGithubActions = process.env.GITHUB_ACTIONS || false


let basePath = '/'

if (isGithubActions) {
  // 去掉 `<owner>/`
  const repo = process.env.GITHUB_REPOSITORY.replace(/.*?\//, '')

  basePath = `/${repo}`
}

// https://vitejs.dev/config/
export default defineConfig({
  base: basePath,
  plugins: [vue()],
})
