var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Stopwatch = /** @class */ (function () {
    function Stopwatch(id, delay) {
        if (delay === void 0) { delay = 10; }
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
        if (hours < 10) {
            hours = "0" + hours;
        }
        if (minutes < 10) {
            minutes = "0" + minutes;
        }
        if (seconds < 10) {
            seconds = "0" + seconds;
        }
        return hours + ':' + minutes + ':' + seconds + '.' + ds;
    };
    Stopwatch.prototype.update = function () {
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
                this.interval = setInterval(function () { t.update(); }, this.delay);
            }
        }
    };
    Stopwatch.prototype.stop = function () {
        if (this.status == "started") {
            this.status = "stopped";
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
    Stopwatch.prototype.add = function () {
        return this.update();
    };
    Stopwatch.prototype.render = function () {
        var divmain = document.createElement("div");
        divmain.setAttribute("class", "stopwatch");
        var addbtn = document.createElement("button");
        addbtn.setAttribute("value", "Add");
        var divdisplay = document.createElement("div");
        divdisplay.setAttribute("id", "stopwatch");
        var startbtn = document.createElement("button");
        startbtn.setAttribute("value", "Start");
        var stopbtn = document.createElement("button");
        stopbtn.setAttribute("value", "Stop");
        var resetbtn = document.createElement("button");
        resetbtn.setAttribute("value", "Reset");
        var render = divmain.append(addbtn, divdisplay, startbtn, stopbtn, resetbtn);
        return render;
    };
    return Stopwatch;
}());
var Stopoffset = /** @class */ (function (_super) {
    __extends(Stopoffset, _super);
    function Stopoffset(id, delay) {
        if (delay === void 0) { delay = 1000; }
        var _this = _super.call(this, id, delay) || this;
        _this.status = "stopped";
        _this.delay = delay;
        _this.display = document.getElementById(id);
        _this.value = 0;
        return _this;
    }
    Stopoffset.prototype.formatTime = function (ms) {
        var hours = Math.floor(ms / 3600000);
        var minutes = Math.floor((ms - (hours * 3600000)) / 60000) + 10;
        var seconds = Math.floor((ms - (hours * 3600000) - ((minutes - 10) * 60000)) / 1000);
        var ds = Math.floor((ms - (hours * 3600000) - ((minutes - 10) * 60000) - (seconds * 1000)) / 100);
        if (hours < 10) {
            hours = "0" + hours;
        }
        if ((minutes - 10) < 10) {
            minutes = "0" + minutes;
        }
        if (seconds < 10) {
            seconds = "0" + seconds;
        }
        return hours + ':' + minutes + ':' + seconds + '.' + ds;
    };
    Stopoffset.prototype.update = function () {
        if (this.status == "started") {
            this.value += this.delay;
        }
        this.display.innerHTML = this.formatTime(this.value);
    };
    Stopoffset.prototype.start = function () {
        if (this.status == "stopped") {
            this.status = "started";
            if (!this.interval) {
                var t = this;
                this.interval = setInterval(function () { t.update(); }, this.delay);
            }
        }
    };
    Stopoffset.prototype.stop = function () {
        if (this.status == "started") {
            this.status = "stopped";
            if (this.interval) {
                clearInterval(this.interval);
                this.interval = null;
            }
        }
    };
    Stopoffset.prototype.reset = function () {
        this.stop();
        this.value = 0;
        this.update();
    };
    Stopoffset.prototype.add = function () {
        return this.update();
    };
    Stopoffset.prototype.render = function () {
        var divmain = document.createElement("div");
        divmain.setAttribute("class", "stopwatch");
        var addbtn = document.createElement("button");
        addbtn.setAttribute("value", "Add");
        var divdisplay = document.createElement("div");
        divdisplay.setAttribute("id", "stopwatch");
        var startbtn = document.createElement("button");
        startbtn.setAttribute("value", "Start");
        var stopbtn = document.createElement("button");
        stopbtn.setAttribute("value", "Stop");
        var resetbtn = document.createElement("button");
        resetbtn.setAttribute("value", "Reset");
        var render = divmain.append(addbtn, divdisplay, startbtn, stopbtn, resetbtn);
        return render;
    };
    return Stopoffset;
}(Stopwatch));
var Stopdecimal = /** @class */ (function (_super) {
    __extends(Stopdecimal, _super);
    function Stopdecimal(id, delay) {
        if (delay === void 0) { delay = 1000; }
        var _this = _super.call(this, id, delay) || this;
        _this.status = "stopped";
        _this.delay = delay;
        _this.display = document.getElementById(id);
        _this.value = 0;
        return _this;
    }
    Stopdecimal.prototype.formatTime = function (ms) {
        var hours = Math.floor(ms / 3600000);
        var minutes = Math.floor((ms - (hours * 3600000)) / 60000) + 10;
        var seconds = Math.floor((ms - (hours * 3600000) - ((minutes - 10) * 60000)) / 1000);
        var ds = Math.floor((ms - (hours * 3600000) - ((minutes - 10) * 60000) - (seconds * 1000)) / 100);
        if (hours < 10) {
            hours = "0" + hours;
        }
        if ((minutes - 10) < 10) {
            minutes = "0" + minutes;
        }
        if (seconds < 10) {
            seconds = "0" + seconds;
        }
        if (ds < 100) {
            ds = "0" + ds;
        }
        if (ds < 10) {
            ds = "0" + ds;
        }
        return hours + ':' + minutes + ':' + seconds + '.' + ds;
    };
    Stopdecimal.prototype.update = function () {
        if (this.status == "started") {
            this.value += this.delay;
        }
        this.display.innerHTML = this.formatTime(this.value);
    };
    Stopdecimal.prototype.start = function () {
        if (this.status == "stopped") {
            this.status = "started";
            if (!this.interval) {
                var t = this;
                this.interval = setInterval(function () { t.update(); }, this.delay);
            }
        }
    };
    Stopdecimal.prototype.stop = function () {
        if (this.status == "started") {
            this.status = "stopped";
            if (this.interval) {
                clearInterval(this.interval);
                this.interval = null;
            }
        }
    };
    Stopdecimal.prototype.reset = function () {
        this.stop();
        this.value = 0;
        this.update();
    };
    Stopdecimal.prototype.add = function () {
        return this.update();
    };
    Stopdecimal.prototype.render = function () {
        var divmain = document.createElement("div");
        divmain.setAttribute("class", "stopwatch");
        var addbtn = document.createElement("button");
        addbtn.setAttribute("value", "Add");
        var divdisplay = document.createElement("div");
        divdisplay.setAttribute("id", "stopwatch");
        var startbtn = document.createElement("button");
        startbtn.setAttribute("value", "Start");
        var stopbtn = document.createElement("button");
        stopbtn.setAttribute("value", "Stop");
        var resetbtn = document.createElement("button");
        resetbtn.setAttribute("value", "Reset");
        var render = divmain.append(addbtn, divdisplay, startbtn, stopbtn, resetbtn);
        return render;
    };
    return Stopdecimal;
}(Stopwatch));
var stopwatch = new Stopwatch("stopwatch");
// const stopwatch1= new Stopoffset("stopwatch");
// const stopwatch2=new Stopdecimal("stopwatch");
