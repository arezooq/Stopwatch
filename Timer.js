var Stopwatch = /** @class */ (function () {
    function Stopwatch(id, delay) {
        if (delay === void 0) { delay = 100; }
        this.status = "stopped";
        this.delay = delay;
        this.display = document.getElementById(id);
        this.value = 0;
    }
    Stopwatch.prototype.formatTime = function (ms) {
        var hours = Math.floor(ms / 3600000);
        var minutes = Math.floor((ms - (hours * 3600000)) / 60000);
        var seconds = Math.floor((ms - (hours * 3600000) - (minutes * 60000)) / 1000);
        var ds = Math.floor((ms - (hours * 3600000) - (minutes * 60000) - (seconds * 1000)) / 100);
        // if (hours   < 10) {hours   = "0"+hours;}
        // if (minutes < 10) {minutes = "0"+minutes;}
        // if (seconds < 10) {seconds = "0"+seconds;}
        return hours + ':' + minutes + ':' + seconds + '.' + ds;
    };
    Stopwatch.prototype.render = function () {
        if (this.status == "started") {
            this.value += this.delay;
        }
        this.display.innerHTML = this.formatTime(this.value);
    };
    Stopwatch.prototype.start = function () {
        if (this.status == "stopped") {
            this.status = "started";
            if (!this.interval) {
                var t = this;
                this.interval = setInterval(function () { t.render(); }, this.delay);
            }
        }
    };
    Stopwatch.prototype.stop = function () {
        if (this.status == "stopped") {
            this.status = "started";
            if (this.interval) {
                clearInterval(this.interval);
                this.interval = null;
            }
        }
    };
    Stopwatch.prototype.reset = function () {
        this.stop();
        this.value = 0;
        this.render();
    };
    Stopwatch.prototype.Add = function () {
        this.render();
    };
    return Stopwatch;
}());
var stopwatch = new Stopwatch("stopwatch");
