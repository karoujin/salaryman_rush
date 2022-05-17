var load_obj = function(){
    var vue_instance = new Vue({
        el: "#saves_id",
        data: {
            saves: []
        },
        created: function(){
            let scores = [];
            if (localStorage.scores){
                scores = JSON.parse(localStorage.scores);
                if (!Array.isArray(scores)) scores = [];
            }
            this.saves  = scores;
        },
        methods: {
            load: function(i){
                sessionStorage.score = this.saves [i];
                loadpage("./game.html");
            }
        }

    });
    return {};
}();