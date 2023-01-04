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
var Status;
(function (Status) {
    Status[Status["Started"] = 0] = "Started";
    Status[Status["Stopped"] = 1] = "Stopped";
})(Status || (Status = {}));
var Stopwatch = /** @class */ (function () {
    function Stopwatch(id) {
        this.render();
        this.status = Status.Stopped;
        this.delay = 100;
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
        if (this.status == Status.Started) {
            this.value += this.delay;
        }
        var d = document.getElementById('stopwatch');
        d.innerHTML = this.formatTime(this.value);
    };
    Stopwatch.prototype.start = function () {
        if (this.status == Status.Stopped) {
            this.status = Status.Started;
            if (!this.interval) {
                var t = this;
                this.interval = setInterval(function () { t.update(); }, this.delay);
            }
        }
    };
    Stopwatch.prototype.stop = function () {
        if (this.status == Status.Started) {
            this.status = Status.Stopped;
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
    Stopwatch.prototype.render = function () {
        // if (this.status == "started") {
        //     this.value += this.delay;
        // }
        // if (this.display){
        var _this = this;
        this.display.append(creatediv('stopwatch'), createbtn('Start', function () { return _this.start(); }), createbtn('Stop', function () { return _this.stop(); }), createbtn('Reset', function () { return _this.reset(); }));
        // }
    };
    return Stopwatch;
}());
var Stopoffset = /** @class */ (function (_super) {
    __extends(Stopoffset, _super);
    function Stopoffset() {
        return _super !== null && _super.apply(this, arguments) || this;
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
    return Stopoffset;
}(Stopwatch));
var Stopdecimal = /** @class */ (function (_super) {
    __extends(Stopdecimal, _super);
    function Stopdecimal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Stopdecimal.prototype.formatTime = function (ms) {
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
        if (ds < 100) {
            ds = "0" + ds;
        }
        return hours + ':' + minutes + ':' + seconds + '.' + ds;
    };
    return Stopdecimal;
}(Stopwatch));
function createbtn(name, listener) {
    var btn = document.createElement('button');
    btn.innerText = name;
    btn.addEventListener('click', listener);
    return btn;
}
function creatediv(id) {
    var dv = document.createElement('div');
    dv.setAttribute('id', id);
    return dv;
}
(function () {
    var btn = document.getElementsByClassName('add-btn');
    btn[0].addEventListener('click', function () {
        new Stopwatch(btn[0].getAttribute('data-idw'));
    });
})();
// const stopwatch1= new Stopoffset("stopwatch");
// const stopwatch2=new Stopdecimal("stopwatch");
