'use client'

import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { AlertCircle, Github, Code2 } from 'lucide-react'

// Define types for GitHub and LeetCode stats
interface GitHubStats {
  username: string
  contributions: number
  followers: number
  publicRepos: number
}

interface LeetCodeStats {
  username: string
  rating: number
  rank: number
  totalSolved: number
  easySolved: number
  mediumSolved: number
  hardSolved: number
}

const CodingStats: React.FC = () => {
  const [githubStats, setGithubStats] = useState<GitHubStats | null>(null)
  const [leetcodeStats, setLeetcodeStats] = useState<LeetCodeStats | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchStats = async () => {
      try {
        // Fetch GitHub stats
        const githubResponse = await axios.get('https://api.github.com/users/shubhampawar4841')
        const githubData = githubResponse.data
        setGithubStats({
          username: githubData.login,
          contributions: githubData.public_gists, // Using public_gists as a proxy for contributions
          followers: githubData.followers,
          publicRepos: githubData.public_repos,
        })

        // Fetch LeetCode stats
        const leetcodeResponse = await axios.post('https://leetcode.com/graphql', {
          query: `{
            userProfile(username: "shubhampawar4036") {
              username
              submitStats {
                acSubmissionNum {
                  difficulty
                  count
                  submissions
                }
              }
              profile {
                ranking
                reputation
              }
            }
          }`,
        }, {
          headers: {
            'Content-Type': 'application/json',
          },
        })
        const leetcodeData = leetcodeResponse.data.data.userProfile
        setLeetcodeStats({
          username: leetcodeData.username,
          rating: leetcodeData.profile.reputation,
          rank: leetcodeData.profile.ranking,
          totalSolved: leetcodeData.submitStats.acSubmissionNum[0].count,
          easySolved: leetcodeData.submitStats.acSubmissionNum[1].count,
          mediumSolved: leetcodeData.submitStats.acSubmissionNum[2].count,
          hardSolved: leetcodeData.submitStats.acSubmissionNum[3].count,
        })
      } catch (err) {
        setError('Failed to fetch coding stats. Please try again later.')
        console.error('Error fetching coding stats:', err)
      } finally {
        setIsLoading(false)
      }
    }

    fetchStats()
  }, [])

  if (isLoading) {
    return (
      <div className="w-full max-w-4xl mx-auto space-y-6 p-4">
        <h2 className="text-3xl font-bold text-center mb-6 text-primary">Coding Stats</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Skeleton className="h-[200px] w-full" />
          <Skeleton className="h-[200px] w-full" />
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <Alert variant="destructive">
        <AlertCircle className="h-4 w-4" />
        <AlertTitle>Error</AlertTitle>
        <AlertDescription>{error}</AlertDescription>
      </Alert>
    )
  }

  return (
    <div className="w-full max-w-4xl mx-auto space-y-6 p-4">
      <h2 className="text-3xl font-bold text-center mb-6 text-primary">Coding Stats</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">GitHub Stats</CardTitle>
            <Github className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            {githubStats && (
              <div className="space-y-2">
                <p className="text-xl font-semibold">{githubStats.username}</p>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-muted-foreground">Contributions</p>
                    <p className="text-2xl font-bold">{githubStats.contributions}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Followers</p>
                    <p className="text-2xl font-bold">{githubStats.followers}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Public Repos</p>
                    <p className="text-2xl font-bold">{githubStats.publicRepos}</p>
                  </div>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">LeetCode Stats</CardTitle>
            <Code2 className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            {leetcodeStats && (
              <div className="space-y-2">
                <p className="text-xl font-semibold">{leetcodeStats.username}</p>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-muted-foreground">Rating</p>
                    <p className="text-2xl font-bold">{leetcodeStats.rating}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Rank</p>
                    <p className="text-2xl font-bold">{leetcodeStats.rank}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Total Solved</p>
                    <p className="text-2xl font-bold">{leetcodeStats.totalSolved}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Easy/Medium/Hard</p>
                    <p className="text-lg font-bold">
                      {leetcodeStats.easySolved}/{leetcodeStats.mediumSolved}/{leetcodeStats.hardSolved}
                    </p>
                  </div>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default CodingStats