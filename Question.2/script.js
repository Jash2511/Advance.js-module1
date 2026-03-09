const timer = {
    name: "Timer",
    start: function () {
        function innertimer() {
            console.log(this.name);
        }
        setTimeout(innertimer.bind(this), 100);
    }
};

timer.start();