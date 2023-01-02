
class Stopwatch{
    protected display: HTMLElement | null;
    protected delay: number;
    protected status: string;
    protected value: number;
    protected interval: any;
    constructor(id:string,delay = 10) {
        this.status = "stopped";
        this.delay = delay;
        this.display = document.getElementById(id);
        this.value = 0;
    }

    protected formatTime(ms: number) {
        var hours: string | number= Math.floor(ms / 3600000);
        var minutes : string | number= Math.floor((ms - (hours * 3600000)) / 60000);
        var seconds : string | number= Math.floor((ms - (hours * 3600000) - (minutes * 60000)) / 1000);
        var ds : string | number= Math.floor((ms - (hours * 3600000) - (minutes * 60000) - (seconds * 1000))/100);

        if (hours < 10) {hours = "0" + hours;}
        if (minutes < 10) {minutes = "0" + minutes;}
        if (seconds < 10) {seconds = "0" + seconds;}
 

        return hours+':'+minutes+':'+seconds+'.'+ds;
      }

    protected update() {
        if (this.status == "started") {
            this.value += this.delay;
        }
       this.display!.innerHTML= this.formatTime(this.value)
    }

    protected start() {
        if (this.status == "stopped") {
            this.status = "started";
            if (!this.interval) {
                var t = this;
                this.interval = setInterval(function () { t.update(); }, this.delay);
            }
        }
    }

    protected stop() {
        if (this.status == "started") {
            this.status = "stopped";
            if (this.interval) {
                clearInterval(this.interval);
                this.interval = null;
            }
        }
    }

    protected reset() {
        this.stop();
        this.value = 0;
        this.update();
    }

    protected add(){
        return this.update()
    }

  protected render(){

        const divmain= document.createElement("div")
        divmain.setAttribute("class","stopwatch");

        const addbtn= document.createElement("button")
        addbtn.setAttribute("value","Add");
        
        const divdisplay= document.createElement("div")
        divdisplay.setAttribute("id","stopwatch");


        const startbtn= document.createElement("button")
       startbtn.setAttribute("value","Start");

       
       const stopbtn= document.createElement("button")
       stopbtn.setAttribute("value","Stop");


       const resetbtn= document.createElement("button")
       resetbtn.setAttribute("value","Reset");

       const render=divmain.append(addbtn,divdisplay,startbtn,stopbtn,resetbtn)

       return render
       
    }
}




class Stopoffset extends Stopwatch{

    constructor(id:string,delay = 1000) {
        super(id,delay);
        this.status = "stopped";
        this.delay = delay;
        this.display = document.getElementById(id);
        this.value = 0;
    }

    protected formatTime(ms: number) {
        var hours: string | number= Math.floor(ms / 3600000);
        var minutes : string | number= Math.floor((ms - (hours * 3600000)) / 60000)+10;
        var seconds : string | number= Math.floor((ms - (hours * 3600000) - ((minutes-10) * 60000)) / 1000);
        var ds : string | number= Math.floor((ms - (hours * 3600000) - ((minutes-10) * 60000) - (seconds * 1000))/100);

        if (hours < 10) {hours = "0" + hours;}
        if ((minutes-10) < 10) {minutes = "0" + minutes;}
        if (seconds < 10) {seconds = "0" + seconds;}
    

        return hours+':'+minutes+':'+seconds+'.'+ds;
      }

    protected update() {
        if (this.status == "started") {
            this.value += this.delay;
        }
       this.display!.innerHTML= this.formatTime(this.value)
    }

    protected start() {
        if (this.status == "stopped") {
            this.status = "started";
            if (!this.interval) {
                var t = this;
                this.interval = setInterval(function () { t.update(); }, this.delay);
            }
        }
    }

    protected stop() {
        if (this.status == "started") {
            this.status = "stopped";
            if (this.interval) {
                clearInterval(this.interval);
                this.interval = null;
            }
        }
    }

    protected reset() {
        this.stop();
        this.value = 0;
        this.update();
    }

    protected add(){
        return this.update()
    }

  protected render(){

        const divmain= document.createElement("div")
        divmain.setAttribute("class","stopwatch");

        const addbtn= document.createElement("button")
        addbtn.setAttribute("value","Add");
        
        const divdisplay= document.createElement("div")
        divdisplay.setAttribute("id","stopwatch");


        const startbtn= document.createElement("button")
       startbtn.setAttribute("value","Start");

       
       const stopbtn= document.createElement("button")
       stopbtn.setAttribute("value","Stop");


       const resetbtn= document.createElement("button")
       resetbtn.setAttribute("value","Reset");

       const render=divmain.append(addbtn,divdisplay,startbtn,stopbtn,resetbtn)

       return render
       
    }
}


class Stopdecimal extends Stopwatch{

    constructor(id:string,delay = 1000) {
        super(id,delay);
        this.status = "stopped";
        this.delay = delay;
        this.display = document.getElementById(id);
        this.value = 0;
    }

    protected formatTime(ms: number) {
        var hours: string | number= Math.floor(ms / 3600000);
        var minutes : string | number= Math.floor((ms - (hours * 3600000)) / 60000)+10;
        var seconds : string | number= Math.floor((ms - (hours * 3600000) - ((minutes-10) * 60000)) / 1000);
        var ds : string | number= Math.floor((ms - (hours * 3600000) - ((minutes-10) * 60000) - (seconds * 1000))/100);

        if (hours < 10) {hours = "0" + hours;}
        if ((minutes-10) < 10) {minutes = "0" + minutes;}
        if (seconds < 10) {seconds = "0" + seconds;}
               if (ds < 100) {ds = "0" + ds;}
               if (ds < 10) {ds = "0" + ds;}
    

        return hours+':'+minutes+':'+seconds+'.'+ds;
      }

    protected update() {
        if (this.status == "started") {
            this.value += this.delay;
        }
       this.display!.innerHTML= this.formatTime(this.value)
    }

    protected start() {
        if (this.status == "stopped") {
            this.status = "started";
            if (!this.interval) {
                var t = this;
                this.interval = setInterval(function () { t.update(); }, this.delay);
            }
        }
    }

    protected stop() {
        if (this.status == "started") {
            this.status = "stopped";
            if (this.interval) {
                clearInterval(this.interval);
                this.interval = null;
            }
        }
    }

    protected reset() {
        this.stop();
        this.value = 0;
        this.update();
    }

    protected add(){
        return this.update()
    }

  protected render(){

        const divmain= document.createElement("div")
        divmain.setAttribute("class","stopwatch");

        const addbtn= document.createElement("button")
        addbtn.setAttribute("value","Add");
        
        const divdisplay= document.createElement("div")
        divdisplay.setAttribute("id","stopwatch");


        const startbtn= document.createElement("button")
       startbtn.setAttribute("value","Start");

       
       const stopbtn= document.createElement("button")
       stopbtn.setAttribute("value","Stop");


       const resetbtn= document.createElement("button")
       resetbtn.setAttribute("value","Reset");

       const render=divmain.append(addbtn,divdisplay,startbtn,stopbtn,resetbtn)

       return render
       
    }
}

const stopwatch= new Stopwatch("stopwatch");
// const stopwatch1= new Stopoffset("stopwatch");
// const stopwatch2=new Stopdecimal("stopwatch");
