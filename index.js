/* global axios */
// var response = axios.get("https://api.github.com/repos/vuejs/vue")
//   .then(function (response) {
//     // handle success
//     console.log(response["data"]);
//   });

// var response = axios.get("https://api.github.com/repos/vuejs/vue").then(function (response) {
//   // handle success
//   console.log(response["data"]);
// });
function getData() {
  function getVueData() {
    return axios.get("https://api.github.com/repos/vuejs/vue");
  }
  function getAngularData() {
    return axios.get("https://api.github.com/repos/angular/angular.js");
  }
  function getEmberData() {
    return axios.get("https://api.github.com/repos/emberjs/ember.js");
  }
  function getSvelteData() {
    return axios.get("https://api.github.com/repos/sveltejs/svelte");
  }
  function getReactData() {
    return axios.get("https://api.github.com/repos/facebook/react");
  }
  Promise.all([getVueData(), getAngularData(), getEmberData(), getSvelteData(), getReactData()]).then(function (
    results
  ) {
    let vueData = results[0];
    let angularData = results[1];
    let emberData = results[2];
    let svelteData = results[3];
    let reactData = results[4];
    console.log(results);
  });
}

getData();