import {fetchData} from "./components/TheDataMiner.js";
import MovieBrowse from "./components/MovieBrowse.js"; 
//mport UserComponent from "./components/UserComponent.js"; 

(() => {

    let vue_vm = new Vue({
        // link Vue to an element in our HTML
        //el: "#app",

        data: {
            message: "Hello from Vue!",
            anotherMessage: "more text, so simple! much winning",
            moviesChoices: [],
            currentProfData: {}
        },

        mounted: function() {
            console.log("Vue is mounted!");

            fetchData("./includes/index.php")
                .then(data => {
                    data.forEach(mov => this.moviesChoices.push(mov));
                })
                .catch(err => console.error(err));
        },

        updated: function() {
            console.log('Vue just updated the DOM');
        },

        //methods here

        components: {
            "moviebrowse-card": MovieBrowse
        }
    }).$mount("#app"); // also connects Vue to your wrapper in HTML
})();