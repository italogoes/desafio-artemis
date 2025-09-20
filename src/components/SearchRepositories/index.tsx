import { useEffect, useState } from "react";
import { octokit } from "../../config/octokit";


const SearchRepositories = () => {
    const [ repoSearch, setRepoSearch ] = useState<string>("")
    const [ repos, setRepos ] = useState<unknown[]>([])
  
    useEffect(() => {
      if (!repoSearch) return;
  
      const timeOut = setTimeout(async () => {
        try {
          const response = await octokit.request("GET /search/repositories", {
            q: `${repoSearch} in:name`,
            per_page: 10,
          });
  
          setRepos(response.data.items)
        } catch (error) {
          console.log(error)
        }
      }, 2000);
  
      return () => clearTimeout(timeOut)
    }, [repoSearch])
  
    return (
      <>
        <h1>ola</h1> 
        <input type="text" onChange={(e) => setRepoSearch(e.target.value)}/>
        {repos.map((repo: any) => (
          <div>{repo.name}</div>
        ))}
      </>
    )
}

export default SearchRepositories