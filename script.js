document.addEventListener('DOMContentLoaded', function () {
    const username = 'Reeth18';
  
    const reposContainer = document.getElementById('repos-container');
  
    // Fetch repositories from GitHub API
    fetch(`https://api.github.com/users/${username}/repos`)
      .then(response => response.json())
      .then(repos => {
        reposContainer.innerHTML = ''; // Clear the container
  
        const repoList = document.createElement('ul');
        repoList.classList.add('repo-list');
  
        repos.forEach(repo => {
          const listItem = document.createElement('li');
          listItem.classList.add('repo');
  
          listItem.innerHTML = `
            <h2>${repo.name}</h2>
            <a href="${repo.html_url}" target="_blank">View on GitHub</a>
          `;
  
          repoList.appendChild(listItem);
        });
  
        reposContainer.appendChild(repoList);
      })
      .catch(error => console.error('Error fetching repositories:', error));
  });
  