var app = new Vue({
    el: "#app",
    data: {
        message: "Hello vue!",
        say: "My text!",
        seen: true,
    },
});

var app2 = new Vue({
    el: "#tonggle-button",
    data: {
        tongle: function () {
            if(app.seen) {
                app.seen = 0;
            } else {
                app.seen = 1;
            }
        }
    }
})
