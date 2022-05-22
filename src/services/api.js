import { get } from 'axios'
import { TOKEN } from '../constants'

export const getBranch = () =>
  get('https://api.github.com/repos/argoproj/argo-site/branches/master', {
    headers: {
      Authorization: `token ${TOKEN}`,
    },
  })

export const getTrees = sha =>
  get(`https://api.github.com/repos/argoproj/argo-site/git/trees/${sha}`, {
    headers: {
      Authorization: `token ${TOKEN}`,
    },
  })
