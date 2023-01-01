var Stopwatch = /** @class */ (function () {
    function Stopwatch(id, delay) {
        if (delay === void 0) { delay = 100; }
        this.state = "paused";
        this.delay = delay;
        this.display = document.body;
        this.value = 0;
    }
    Stopwatch.prototype.formatTime = function (ms) {
        var hours = Math.floor(ms / 3600000);
        var minutes = Math.floor((ms - (hours * 3600000)) / 60000);
        var seconds = Math.floor((ms - (hours * 3600000) - (minutes * 60000)) / 1000);
        var ds = Math.floor((ms - (hours * 3600000) - (minutes * 60000) - (seconds * 1000)) / 100);
        //   if (hours   < 10) {hours   = "0"+hours;}
        //   if (minutes < 10) {minutes = "0"+minutes;}
        //   if (seconds < 10) {seconds = "0"+seconds;}
        return "<div class=\"stopwatch\">\n      <div id=\"stopwatch\">00:00:00.0</div>\n      <button onclick=\"stopwatch.start()\">Start</button> \n      <button onClick=\"stopwatch.stop()\">Stop</button>\n      <button onClick=\"stopwatch.reset()\">Reset</button>\n      </div> \n      ".concat(hours, "+':'+").concat(minutes, "+':'+").concat(seconds, "+'.'+").concat(ds);
    };
    Stopwatch.prototype.update = function () {
        if (this.state == "running") {
            this.value += this.delay;
        }
        this.display.innerHTML = this.formatTime(this.value);
    };
    Stopwatch.prototype.start = function () {
        if (this.state == "paused") {
            this.state = "running";
            if (!this.interval) {
                var t = this;
                this.interval = setInterval(function () { t.update(); }, this.delay);
            }
        }
    };
    Stopwatch.prototype.stop = function () {
        if (this.state == "running") {
            this.state = "paused";
            if (this.interval) {
                clearInterval(this.interval);
                this.interval = null;
            }
        }
    };
    Stopwatch.prototype.reset = function () {
        this.stop();
        this.value = 0;
        this.update();
    };
    return Stopwatch;
}());
var stopwatch = new Stopwatch("stopwatch");
