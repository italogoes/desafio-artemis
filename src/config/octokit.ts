import { Octokit } from "octokit";

export const octokit = new Octokit({
  auth: import.meta.env.VITE_GITHUB_API_KEY
});
