
class Stopwatch {
    private display: HTMLElement | null;
    private delay: number;
    private status: string;
    private value: number;
    private interval: any;
    constructor(id:string,delay = 100) {
        this.status = "stopped";
        this.delay = delay;
        this.display = document.getElementById(id);
        this.value = 0;
    }

    private formatTime(ms: number) {
        var hours   = Math.floor(ms / 3600000);
        var minutes = Math.floor((ms - (hours * 3600000)) / 60000);
        var seconds = Math.floor((ms - (hours * 3600000) - (minutes * 60000)) / 1000);
        var ds = Math.floor((ms - (hours * 3600000) - (minutes * 60000) - (seconds * 1000))/100);
  
        return hours+':'+minutes+':'+seconds+'.'+ds;
      }

    private render() {
        if (this.status == "started") {
            this.value += this.delay;
        }
       this.display!.innerHTML= this.formatTime(this.value)
    }

    private start() {
        if (this.status == "stopped") {
            this.status = "started";
            if (!this.interval) {
                var t = this;
                this.interval = setInterval(function () { t.render(); }, this.delay);
            }
        }
    }

    private stop() {
        if (this.status == "started") {
            this.status = "stopped";
            if (this.interval) {
                clearInterval(this.interval);
                this.interval = null;
            }
        }
    }

    private reset() {
        this.stop();
        this.value = 0;
        this.render();
    }
    private Add(){
        this.render();
    }
}

const stopwatch = new Stopwatch("stopwatch");

