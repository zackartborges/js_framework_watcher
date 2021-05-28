/* global axios */
const sendGetRequest = async (url) => {
  try {
      const resp = await axios.get(url);
      const repoData = {
        name: resp["data"]["full_name"],
        watchers: resp["data"]["watchers_count"],
        forks: resp["data"]["forks"],
        stars: resp["data"]["stargazers_count"]
      }
      // console.log(resp.data);
    console.log(repoData);
  } catch (err) {
      // Handle Error Here
      console.error(err);
  }
  // console.log(repoData);
};
sendGetRequest("https://api.github.com/repos/vuejs/vue");
sendGetRequest("https://api.github.com/repos/angular/angular.js");
sendGetRequest("https://api.github.com/repos/emberjs/ember.js");
sendGetRequest("https://api.github.com/repos/sveltejs/svelte");
sendGetRequest("https://api.github.com/repos/facebook/react");
