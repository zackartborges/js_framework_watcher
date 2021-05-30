/* global axios */
const sendGetRequest = async (url) => {
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
    console.log(repoData);
  } catch (err) {
      // Handle Error Here
      console.error(err);
  }
};
// async function sendGetRequest(url) { 
//   axios.get(url)
//     .then(function (response) {
//     // handle success
//       // console.log(response);
//       const repoData = {
//         name: response.data.full_name,
//         watchers: response.data.watchers_count,
//         forks: response.data.forks,
//         stars: response.data.stargazers_count
//       };
//       console.log(repoData);
//     })
//     .catch(function (error) {
//     // handle error
//       console.log(error);
//     })
//     .then(function () {
//     // always executed
//     });
// }
// const vueData = sendGetRequest("https://api.github.com/repos/vuejs/vue");
// console.log(vueData);

async function vueData() {
  try{
  await sendGetRequest("https://api.github.com/repos/vuejs/vue")
  const getVueData = repoData;
  console.log(getVueData);
  } catch (err){
    console.log(err);
  }
}
vueData();


// const vueData = sendGetRequest("https://api.github.com/repos/vuejs/vue");
// console.log(vueData);
// const AngularData = sendGetRequest("https://api.github.com/repos/angular/angular.js");
// const emberData = sendGetRequest("https://api.github.com/repos/emberjs/ember.js");
// const svelteData = sendGetRequest("https://api.github.com/repos/sveltejs/svelte");
// const reactData = sendGetRequest("https://api.github.com/repos/facebook/react");
