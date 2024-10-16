'use client';

import { useState, useEffect } from 'react';
import { Octokit } from '@octokit/rest';
import RepoList from './RepoList';
import TagList from './TagList';

const octokit = new Octokit({ auth: process.env.NEXT_PUBLIC_GITHUB_TOKEN });

interface RepoWithTopics {
  id: number;
  name: string;
  description: string | null;
  stargazers_count: number;
  forks_count: number;
  updated_at: string;
  topics: string[];
}

async function getReposWithTopics(owner: string): Promise<RepoWithTopics[]> {
  const { data: repos } = await octokit.repos.listForUser({ username: owner, sort: 'updated', per_page: 100 });
  
  const reposWithTopics = await Promise.all(repos.map(async (repo) => {
    const { data: topicsData } = await octokit.repos.getAllTopics({
      owner,
      repo: repo.name,
    });
    
    return {
      id: repo.id,
      name: repo.name,
      description: repo.description,
      stargazers_count: repo.stargazers_count ?? 0,
      forks_count: repo.forks_count ?? 0,
      updated_at: repo.updated_at ?? new Date().toISOString(),
      topics: topicsData.names,
    };
  }));

  return reposWithTopics;
}

export default function OwnerReposPage({ params }: { params: { owner: string } }) {
  const [repos, setRepos] = useState<RepoWithTopics[]>([]);
  const [filteredRepos, setFilteredRepos] = useState<RepoWithTopics[]>([]);
  const [tags, setTags] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      try {
        const fetchedRepos = await getReposWithTopics(params.owner);
        setRepos(fetchedRepos);
        setFilteredRepos(fetchedRepos);

        const allTags = new Set<string>();
        fetchedRepos.forEach(repo => repo.topics.forEach(topic => allTags.add(topic)));
        setTags(Array.from(allTags).sort((a, b) => a.localeCompare(b)));
      } catch (error) {
        console.error('Error fetching repos:', error);
      } finally {
        setIsLoading(false);
      }
    }
    fetchData();
  }, [params.owner]);

  const handleTagsChange = (selectedTags: string[]) => {
    if (selectedTags.length === 0) {
      setFilteredRepos(repos);
    } else {
      const filtered = repos.filter(repo =>
        selectedTags.some(tag => repo.topics.includes(tag))
      );
      setFilteredRepos(filtered);
    }
  };

  if (isLoading) {
    return <div className="text-center mt-8">Loading...</div>;
  }

  return (
    <div className="flex flex-col min-h-screen max-w-full overflow-x-hidden">
      <h1 className="text-4xl font-bold mb-8 text-center text-gray-800 p-4">Repositories for {params.owner}</h1>
      <div className="flex-1 flex flex-col lg:flex-row">
        <div className="lg:w-64 lg:mr-4 mb-4 lg:mb-0">
          <TagList tags={tags} onTagsChange={handleTagsChange} />
        </div>
        <div className="flex-grow overflow-x-auto">
          <RepoList repos={filteredRepos} owner={params.owner} />
        </div>
      </div>
    </div>
  );
}
