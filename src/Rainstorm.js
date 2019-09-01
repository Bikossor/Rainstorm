var Rainstorm = (function () {
    raindrops = 0;

    function getRandomArbitrary(min, max) {
        return Math.random() * (max - min) + min;
    };

    function Rainstorm(options) {
        this.ctx = options.target.getContext("2d");
        this.maxRaindrops = options.maxRaindrops ? 100 : options.maxRaindrops;
        this.interval = options.interval;
    };

    Rainstorm.prototype.start = function () {
        this.clock = setInterval(() => {
            var randomR = getRandomArbitrary(4, 16);
            var randomX = getRandomArbitrary(randomR, this.ctx.canvas.width - randomR);
            var randomY = getRandomArbitrary(randomR, this.ctx.canvas.height - randomR);

            this.ctx.beginPath();
            this.ctx.arc(randomX, randomY, randomR, 0, 2 * Math.PI);
            this.ctx.fillStyle = `hsla(270, 50%, 50%, 0.5)`;
            this.ctx.fill();

            if (raindrops >= this.maxRaindrops) {
                clearInterval(this.clock);
                console.debug("Rainstorm stopped!");
            }

            raindrops++;
        }, this.interval);
    };

    return Rainstorm;
})();