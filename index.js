/* global axios */
const sendGetRequest = async (url) => {
  let repoData;
  try {
      const resp = await axios.get(url);
      const repoData = {
        name: resp.data.full_name,
        watchers: resp.data.watchers_count,
        forks: resp.data.forks,
        stars: resp.data.stargazers_count
      }
      // return repoData;
      // console.log(resp.data);
    // console.log(repoData);
    return repoData
  } catch (err) {
      // Handle Error Here
      console.error(err);
  }
};

// const vueData =  await sendGetRequest("https://api.github.com/repos/vuejs/vue");
// console.log(vueData);
const vueData = (async () => {
  const getVueData = await sendGetRequest("https://api.github.com/repos/vuejs/vue")
  console.log(getVueData)
})()
console.log(vueData)
// const vueData = sendGetRequest("https://api.github.com/repos/vuejs/vue");
// console.log(vueData);
// const AngularData = sendGetRequest("https://api.github.com/repos/angular/angular.js");
// const emberData = sendGetRequest("https://api.github.com/repos/emberjs/ember.js");
// const svelteData = sendGetRequest("https://api.github.com/repos/sveltejs/svelte");
// const reactData = sendGetRequest("https://api.github.com/repos/facebook/react");
