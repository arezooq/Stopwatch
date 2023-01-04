enum Status{
    Started,
    Stopped
}

interface IStopWatch{
    start:() =>void;
    stop:() =>void;
    reset:() =>void;

}
class Stopwatch implements IStopWatch{
    private display: HTMLElement | null;
    private delay: number;
    private status: Status;
    private value: number;
    private interval: any;
    constructor(id:string) {
        this.render();
        this.status = Status.Stopped;
        this.delay = 100;
        this.display = document.getElementById(id);
        this.value = 0;
    }

     formatTime(ms: number) {
        var hours: string | number= Math.floor(ms / 3600000);
        var minutes : string | number= Math.floor((ms - (hours * 3600000)) / 60000);
        var seconds : string | number= Math.floor((ms - (hours * 3600000) - (minutes * 60000)) / 1000);
        var ds : string | number= Math.floor((ms - (hours * 3600000) - (minutes * 60000) - (seconds * 1000))/100);

        if (hours < 10) {hours = "0" + hours;}
        if (minutes < 10) {minutes = "0" + minutes;}
        if (seconds < 10) {seconds = "0" + seconds;}
 

        return hours+':'+minutes+':'+seconds+'.'+ds;
      }

     update() {
        if (this.status == Status.Started) {
            this.value += this.delay;
        }
        const d=document.getElementById('stopwatch');
        d!.innerHTML=this.formatTime(this.value)
       
    }

     start() {
        if (this.status == Status.Stopped) {
            this.status = Status.Started;
            if (!this.interval) {
                var t = this;
                this.interval = setInterval(function () { t.update(); }, this.delay);
            }
        }
    }

     stop() {
        if (this.status == Status.Started) {
            this.status = Status.Stopped;
            if (this.interval) {
                clearInterval(this.interval);
                this.interval = null;
            }
        }
    }

     reset() {
        this.stop();
        this.value = 0;
        this.update();
    }

  private render(){
    // if (this.status == "started") {
    //     this.value += this.delay;
    // }
    // if (this.display){
       
    this.display!.append( 
        creatediv('stopwatch'),
        createbtn('Start',() => this.start()),
        createbtn('Stop',() => this.stop()),
        createbtn('Reset',() => this.reset())
    )
    // }
    }
}




class Stopoffset extends Stopwatch{

formatTime(ms: number): string {
    var hours: string | number= Math.floor(ms / 3600000);
    var minutes : string | number= Math.floor((ms - (hours * 3600000)) / 60000)+10;
    var seconds : string | number= Math.floor((ms - (hours * 3600000) - ((minutes-10) * 60000)) / 1000);
    var ds : string | number= Math.floor((ms - (hours * 3600000) - ((minutes-10) * 60000) - (seconds * 1000))/100);

    if (hours < 10) {hours = "0" + hours;}
    if ((minutes-10) < 10) {minutes = "0" + minutes;}
    if (seconds < 10) {seconds = "0" + seconds;}


    return hours+':'+minutes+':'+seconds+'.'+ds;
}

}


class Stopdecimal extends Stopwatch{
    formatTime(ms: number) {
        var hours: string | number= Math.floor(ms / 3600000);
        var minutes : string | number= Math.floor((ms - (hours * 3600000)) / 60000);
        var seconds : string | number= Math.floor((ms - (hours * 3600000) - (minutes * 60000)) / 1000);
        var ds : string | number= Math.floor((ms - (hours * 3600000) - (minutes * 60000) - (seconds * 1000))/100);

        if (hours < 10) {hours = "0" + hours;}
        if (minutes < 10) {minutes = "0" + minutes;}
        if (seconds < 10) {seconds = "0" + seconds;}
        if (ds <100) {ds= "0" + ds;}
 

        return hours+':'+minutes+':'+seconds+'.'+ds;
      }
   
}



function createbtn(name: string,listener: () => void){

    const btn= document.createElement('button')
    btn.innerText=name;
    btn.addEventListener('click',listener)

    return btn;

}

function creatediv(id:string){

    const dv= document.createElement('div')
    dv.setAttribute('id',id)
    return dv;

}

(function(){
    const btn=document.getElementsByClassName('add-btn');
    btn[0].addEventListener('click', () => {
        new Stopwatch(btn[0].getAttribute('data-idw') as string)
    })
})();


// const stopwatch1= new Stopoffset("stopwatch");
// const stopwatch2=new Stopdecimal("stopwatch");
