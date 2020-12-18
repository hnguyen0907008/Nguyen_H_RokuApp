export default {
    name: "UserComponent",
    props: ["user"],

    //data needs to be a function inside a component

    data: function(){
        return{
            fname: this.user.fname,
            name: this.user.name,
            pass: this.user.pass,
            email: this.user.email,
            date: this.user.date,
            avatar: this.user.avatar
        }
    },

    template: 
        ` <div class="users-list">
            <div class="user">
                <img src="images/boy.png" alt="">
                <p>John</p>
            </div>
            <div class="user">
                <img src="images/boy.png" alt="">
                <p>John</p>
            </div>
          </div>`,
    created: function(){
        console.log('show users');
    },

    methods: {
        logClicked(){
            debugger;
        }
    }
}