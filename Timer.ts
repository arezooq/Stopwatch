
class Stopwatch {
    display : HTMLElement ;
    delay: number;
    status: string;
    value: number;
    interval: any;
    constructor(id: string, delay=100) {
      this.status = "stopped";
      this.delay = delay;
      this.display = document.body;
      this.value = 0;
    }
    
    formatTime(ms: number) {
      var hours   = Math.floor(ms / 3600000);
      var minutes = Math.floor((ms - (hours * 3600000)) / 60000);
      var seconds = Math.floor((ms - (hours * 3600000) - (minutes * 60000)) / 1000);
      var ds = Math.floor((ms - (hours * 3600000) - (minutes * 60000) - (seconds * 1000))/100);
  
    //   if (hours   < 10) {hours   = "0"+hours;}
    //   if (minutes < 10) {minutes = "0"+minutes;}
    //   if (seconds < 10) {seconds = "0"+seconds;}
      return `<div class="stopwatch">
      <div id="stopwatch">00:00:00.0</div>
      <button onclick="stopwatch.start()">Start</button> 
      <button onClick="stopwatch.stop()">Stop</button>
      <button onClick="stopwatch.reset()">Reset</button>
      </div> 
      ${hours}+':'+${minutes}+':'+${seconds}+'.'+${ds}`;
    }
    
      render() {
      if (this.status=="started") {
        this.value += this.delay;
      }
     this.display.innerHTML=this.formatTime(this.value);
    }
    
    start() {
      if (this.status=="stopped") {
        this.status="started";
        if (!this.interval) {
          var t=this;
          this.interval = setInterval(function(){t.render();}, this.delay);
        }
      }
    }
    
    stop() {
         if (this.status=="stopped") {
        this.status="started";
      if (this.interval) {
        clearInterval(this.interval);
        this.interval = null;
      }
         }
    }
    
    reset() {
      this.stop();
      this.value=0;
      this.render();
    }
  }
  

