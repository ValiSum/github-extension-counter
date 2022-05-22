import { get } from 'axios'
import { TOKEN } from '../constants'

export const getBranch = (owner, repository) =>
  get(
    `https://api.github.com/repos/${owner}/${repository}/branches/master`,
    TOKEN && {
      headers: {
        Authorization: `token ${TOKEN}`,
      },
    }
  )

export const getTrees = (owner, repository, sha) =>
  get(
    `https://api.github.com/repos/${owner}/${repository}/git/trees/${sha}`,
    TOKEN && {
      headers: {
        Authorization: `token ${TOKEN}`,
      },
    }
  )
