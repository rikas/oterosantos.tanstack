import { createServerFn } from '@tanstack/react-start'
import { Octokit } from 'octokit'

const GITHUB_USERNAME = 'rikas'
const DEFAULT_REPOS_PER_PAGE = 100

export interface GithubRepo {
  id: number
  name: string
  html_url: string
  stargazers_count: number
  watchers_count: number
  forks_count: number
  private: boolean
  description: string
  language: string
  visibility: 'public' | 'private'
}

export interface GithubUser {
  id: number
  login: string
  name: string
  bio: string
  avatar_url: string
  html_url: string
  company: string
  public_repos: number
  public_gists: number
  followers: number
  following: number
}

export const getGithubRepos = createServerFn().handler(
  async (): Promise<GithubRepo[]> => {
    const octokit = new Octokit({ auth: process.env.GITHUB_TOKEN })
    const { data } = await octokit.rest.repos.listForUser({
      username: GITHUB_USERNAME,
      per_page: DEFAULT_REPOS_PER_PAGE,
    })

    Octokit.plugins

    return data as GithubRepo[]
  },
)

export const getGithubUser = createServerFn().handler(
  async (): Promise<GithubUser> => {
    const octokit = new Octokit({ auth: process.env.GITHUB_TOKEN })
    const { data } = await octokit.rest.users.getAuthenticated()

    return data as GithubUser
  },
)
