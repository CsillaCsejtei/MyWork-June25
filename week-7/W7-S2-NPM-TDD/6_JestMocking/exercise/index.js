const { getUserRepos } = require("./github");

// TODO: Enter your GitHub username
const gitHubUser = "csillacsejtei";

getUserRepos(gitHubUser).then((repos) => {
  console.log(repos);
});
