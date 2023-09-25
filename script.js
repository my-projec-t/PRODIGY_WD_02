window.onload= function () {
    var seconds = 0;
    var tens = 0;
    var min = 0;
    var hrs = 0;
    var appendhrs = document.getElementById("hrs")
    var appendmin = document.getElementById("min")
    var appendTens = document.getElementById("tens")
    var appendSeconds = document.getElementById("seconds")
    var appendStart = document.getElementById('btn-start')
    var appendStop = document.getElementById('btn-stop')
    var appendReset = document.getElementById('btn-reset')
    var interval;

    appendStart.onclick = function (){
        clearInterval(interval);
        interval = setInterval(startTimer,10);
    }
    appendStop.onclick = function() {
        clearInterval(interval);
    }
    appendReset.onclick= function (){
        clearInterval(interval);
        tens="00";
        seconds="00";
        min="00"
        appendTens.innerHTML=tens;
        appendSeconds.innerHTML=seconds;
        appendmin.innerHTML=min;
    }

    function startTimer(){
        tens++;

        if(tens<=9){
            appendTens.innerHTML= "0" + tens;
        }
        if(tens>9){
            appendTens.innerHTML=tens;
        }
        if(tens>99){
            // console.log("seconds");
            seconds++;
            appendSeconds.innerHTML="0"+seconds;
            tens=0;
            appendTens.innerHTML="0"+0;
        }
        if(seconds>9){
            appendSeconds.innerHTML=seconds;
        }
        if(seconds>59){
            min++;
            appendmin.innerHTML="0"+min;
            seconds=0;
            appendSeconds.innerHTML="0"+0
        }
        if(min>9){
            appendmin.innerHTML=min;
        }
        if(min>59){
            hrs++;
            appendhrs.innerHTML="0"+hrs;
            min=0;
            appendmin.innerHTML="0"+0
        }
        if(hrs>9){
            appendhrs.innerHTML=hrs;
        }
    }
}


