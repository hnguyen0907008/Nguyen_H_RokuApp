export default {
    name: "MovieBrowse",
    props: ["mov"],

    //data needs to be a function inside a component

    data: function(){
        return{
            name: this.mov.name,
            rating: this.mov.rating,
            genre: this.mov.genre,
            year: this.mov.year,
            stars: this.mov.stars,
            poster: this.mov.poster
        }
    },

    template: 
        ` <div class="movieSummary" @click="lockClicked()">
                <div id="movieImg">
                    <a href="#"><img :src="'images/' + mov.poster" :alt='mov.name + "poster"'></a>
                </div>
                <div id="movieInfo">
                    <h3>{{ mov.name }}</h3>
                    <p>Rating: {{ mov.rating }}</p>
                    <p>Genre: {{ mov.genre }}</p>
                    <p>Released: {{ mov.year }}</p>
                    <p>Stars: {{ mov.stars }}</p>
                    <p>Story: <a href="#">Read More</a></p>
                </div>
           </div>`,
    created: function(){
        console.log('created movies');
    },

    methods: {
        logClicked(){
            debugger;
        }
    }
}