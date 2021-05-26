/* global axios */
// Vue Stats
var response = axios.get("https://api.github.com/repos/vuejs/vue")
  .then(function (response) {
    // handle success
    console.log(response["data"]);
    // let vueWatchers = (response["data"]["watchers_count"]);
    // let vueForks = (response["data"]["forks"]);
    // let vueStars = (response["data"]["stargazers_count"]);
    // console.log(vueWatchers);
    // console.log(vueForks);
    // console.log(vueStars)

  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed
  });
  // stars, watchers, forks