/* global Chart, axios */


let forks = {};
let watchers = {};
let stars = {};
// let popularity = {};

let repos = [
  "https://api.github.com/repos/vuejs/vue",
  "https://api.github.com/repos/angular/angular.js",
  "https://api.github.com/repos/emberjs/ember.js",
  "https://api.github.com/repos/sveltejs/svelte",
  "https://api.github.com/repos/facebook/react",
];
function getData() {

  document.addEventListener("DOMContentLoaded", function (event) {
    repos.forEach((repo) => {
      axios
        .get(repo)
        .then((response) => {
          let forkCount = response.data.forks;
          let watchersCount = response.data.watchers_count;
          let starCount = response.data.stargazers_count;

          forks[response.data.name] = forkCount;
          watchers[response.data.name] = watchersCount;
          stars[response.data.name] = starCount;
          console.log("stars", stars)
        })
        .catch(function (error) {
          console.log(error);
        })
        .then(function () {});
    });
  });


  var hey = document.getElementById("forksChart").getContext("2d");
  var forksChart = new Chart(hey, {
    type: "doughnut",
    data: {
    // labels: ["Vue", "Angular", "Ember.js", "Svelte.js", "React"],
      datasets: [
        {
          label: "# Forks on Github",
          data: forks,
          backgroundColor: [
            "rgba(255, 99, 132, 0.2)",
            "rgba(54, 162, 235, 0.2)",
            "rgba(255, 206, 86, 0.2)",
            "rgba(75, 192, 192, 0.2)",
            "rgba(153, 102, 255, 0.2)",
          // "rgba(255, 159, 64, 0.2)",
          ],
          borderColor: [
            "rgba(255, 99, 132, 1)",
            "rgba(54, 162, 235, 1)",
            "rgba(255, 206, 86, 1)",
            "rgba(75, 192, 192, 1)",
            "rgba(153, 102, 255, 1)",
          // "rgba(255, 159, 64, 1)",
          ],
          borderWidth: 1,
        },
      ],
    },
    options: {
      plugins: {
        title: {
          display: true,
          text: "Total Repo Forks",
        },
      },
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  });
  var ctx = document.getElementById("starsChart").getContext("2d");
  var starsChart = new Chart(ctx, {
    type: "pie",
    data: {
      labels: ["Vue", "Angular", "Ember.js", "Svelte.js", "React"],
      datasets: [
        {
        // label: "# Stars on Github",
          data: stars,
          backgroundColor: [
            "rgba(255, 99, 132, 0.2)",
            "rgba(54, 162, 235, 0.2)",
            "rgba(255, 206, 86, 0.2)",
            "rgba(75, 192, 192, 0.2)",
            "rgba(153, 102, 255, 0.2)",
          // "rgba(255, 159, 64, 0.2)",
          ],
          borderColor: [
            "rgba(255, 99, 132, 1)",
            "rgba(54, 162, 235, 1)",
            "rgba(255, 206, 86, 1)",
            "rgba(75, 192, 192, 1)",
            "rgba(153, 102, 255, 1)",
          // "rgba(255, 159, 64, 1)",
          ],
          borderWidth: 1,
        },
      ],
    },
    options: {
      plugins: {
        title: {
          display: true,
          text: "Total Repo Stars",
        },
      },
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  });

  var abc = document.getElementById("watchersChart").getContext("2d");
  var watchersChart = new Chart(abc, {
    type: "pie",
    data: {
      labels: ["Vue", "Angular", "Ember.js", "Svelte.js", "React"],
      datasets: [
        {
          label: "# Watchers on Github",
          data: watchers,
          backgroundColor: [
            "rgba(255, 99, 132, 0.2)",
            "rgba(54, 162, 235, 0.2)",
            "rgba(255, 206, 86, 0.2)",
            "rgba(75, 192, 192, 0.2)",
            "rgba(153, 102, 255, 0.2)",
          // "rgba(255, 159, 64, 0.2)",
          ],
          borderColor: [
            "rgba(255, 99, 132, 1)",
            "rgba(54, 162, 235, 1)",
            "rgba(255, 206, 86, 1)",
            "rgba(75, 192, 192, 1)",
            "rgba(153, 102, 255, 1)",
          // "rgba(255, 159, 64, 1)",
          ],
          borderWidth: 1,
        },
      ],
    },
    options: {
      plugins: {
        title: {
          display: true,
          text: "Repo Watchers",
        },
      },
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  });
}
getData();