/* global axios */
// Url's
const vueUrl = "https://api.github.com/repos/vuejs/vue";
const angularUrl = "https://api.github.com/repos/angular/angular.js";
const emberUrl = "https://api.github.com/repos/emberjs/ember.js";
const svelteUrl = "https://api.github.com/repos/sveltejs/svelte";
const reactrUrl = "https://api.github.com/repos/facebook/react";

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
      return repoData;

  } catch (err) {
      // Handle Error Here
      console.error(err);
  }
};

// console.log(vueData);

let vueData = sendGetRequest(vueUrl)
console.log(vueData)
// console.log(vueData)
// console.log(vueData);

// attempt at creating an async function to get vueData

// async function vueRun() {
//   const vueData = await sendGetRequest("https://api.github.com/repos/vuejs/vue");
//   console.log(vueData);
// }
// vueRun();




// const vueData = sendGetRequest("https://api.github.com/repos/vuejs/vue");
// console.log(vueData);
// const AngularData = sendGetRequest("https://api.github.com/repos/angular/angular.js");
// const emberData = sendGetRequest("https://api.github.com/repos/emberjs/ember.js");
// const svelteData = sendGetRequest("https://api.github.com/repos/sveltejs/svelte");
// const reactData = sendGetRequest("https://api.github.com/repos/facebook/react");
