/* global axios */
/* global Chart */
// var response = axios.get("https://api.github.com/repos/vuejs/vue")
//   .then(function (response) {
//     // handle success
//     console.log(response["data"]);
//   });

// var response = axios.get("https://api.github.com/repos/vuejs/vue").then(function (response) {
//   // handle success
//   console.log(response["data"]);
// });
// function getData() {
//   function getVueData() {
//     return axios.get("https://api.github.com/repos/vuejs/vue");
//   }
//   function getAngularData() {
//     return axios.get("https://api.github.com/repos/angular/angular.js");
//   }
//   function getEmberData() {
//     return axios.get("https://api.github.com/repos/emberjs/ember.js");
//   }
//   function getSvelteData() {
//     return axios.get("https://api.github.com/repos/sveltejs/svelte");
//   }
//   function getReactData() {
//     return axios.get("https://api.github.com/repos/facebook/react");
//   }
//   Promise.all([getVueData(), getAngularData(), getEmberData(), getSvelteData(), getReactData()]).then(function (
//     results
//   ) {
//     let vueData = results[0];
//     let angularData = results[1];
//     let emberData = results[2];
//     let svelteData = results[3];
//     let reactData = results[4];
//     console.log(results);
//   });
// }


// function createChart() {
//   var ctx = document.getElementById("myChart").getContext("2d");
//   var myChart = new Chart(ctx, {
//     type: "bar",
//     data: {
//       labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
//       datasets: [{
//         label: "# of Votes",
//         data: [12, 19, 3, 5, 2, 3],
//         backgroundColor: [
//           "rgba(255, 99, 132, 0.2)",
//           "rgba(54, 162, 235, 0.2)",
//           "rgba(255, 206, 86, 0.2)",
//           "rgba(75, 192, 192, 0.2)",
//           "rgba(153, 102, 255, 0.2)",
//           "rgba(255, 159, 64, 0.2)"
//         ],
//         borderColor: [
//           "rgba(255, 99, 132, 1)",
//           "rgba(54, 162, 235, 1)",
//           "rgba(255, 206, 86, 1)",
//           "rgba(75, 192, 192, 1)",
//           "rgba(153, 102, 255, 1)",
//           "rgba(255, 159, 64, 1)"
//         ],
//         borderWidth: 1
//       }]
//     },
//     options: {
//       scales: {
//         y: {
//           beginAtZero: true
//         }
//       }
//     }
//   });
// }
// getData();
// createChart();