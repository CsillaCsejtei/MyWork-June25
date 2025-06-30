document.getElementById("fetchRepos").addEventListener("click", onfetchRepos);

function onfetchRepos() {
  const username = document.getElementById("username").value;

  if (username) {
    // GitHub API endpoint for fetching user repositories
    const url = `https://api.github.com/users/${username}/repos`;

    // Make a GET request to the GitHub API
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error("GitHub user not found");
        }
        return response.json();
      })
      .then((data) => {
        renderRepos(data);
        renderRepos2(data);
        renderRepos3(data);
      })
      .catch((error) => {
        console.error("Error:", error.message);
      });
  } else {
    console.log("Please enter a GitHub username.");
  }
}

const renderRepos = (repos) => {
  const reposListEl = document.getElementById("repos");
  let html = "";

  //TODO what does this line do?
  //This is a forEach loop iterating over each repository object in the repos array.
  //For each repository (repo), it gets the full_name
  //It appends a new <li> element containing that name to the html string
  //After the loop, the full html string is inserted into the DOM using innerHTML
  
  repos.forEach((repo) => {
    const repoFullName = repo.full_name;

    html += `<li>${repoFullName}</li>`;
  });

  reposListEl.innerHTML = html;
};

const renderRepos2 = (repos) => {
  const reposListEl = document.getElementById("repos2");

  //TODO what does this line do?
  //It uses a for loop to iterate over the repos array.
  //For each item, it creates a new <li> element with document.createElement.
  //It sets the text content of that <li> to the repository's full name.
  //Then it appends the <li> to the DOM using appendChild.

  for (let i = 0; i < repos.length; i++) {
    const repoFullName = repos[i].full_name;

    const repoEl = document.createElement("li");
    repoEl.textContent = repoFullName;
    reposListEl.appendChild(repoEl);
  }
};

const renderRepos3 = (repos) => {
  const reposListEl = document.getElementById("repos3");

  // TODO: what does this line do?
  // It uses .map() to iterate over each repository
  // For each repo, it adds an <li> with its full_name directly to the innerHTML of the list element.
  // This repeatedly modifies the DOM's innerHTML on each iteration.

  repos.map((repo) => (reposListEl.innerHTML += `<li>${repo.full_name}</li>`));
};

//1. one is best in performance, clear, easy to read, not secure 
//2. one is the most secure
//3. shortest code, not secure