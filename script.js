    var seconds = 00;
    var tens = 00;
    var min = 00;
    var OutputSeconds = document.getElementById("second");
    var OutputTens = document.getElementById("tens");
    var OutputMin = document.getElementById("min");
    var buttonStart = document.getElementById("btn-start");
    var buttonStop = document.getElementById("btn-stop");
    var buttonReset = document.getElementById("btn-reset");
    var Interval;

    buttonStart.addEventListener('click', () => {
        // clearInterval(Interval);
        Interval = setInterval(startTimer, 10);  // millisecond 10 = 0.01 second
    });

    buttonStop.addEventListener('click', () => {
        clearInterval(Interval);
    });

    buttonReset.addEventListener('click', () => {
        clearInterval(Interval);
        tens = "00";
        seconds = "00";
        min = "00";
        OutputSeconds.innerHTML = seconds;
        OutputTens.innerHTML = tens;
        OutputMin.innerHTML = min;
    });

    function startTimer(){
        tens++;
        if(tens <= 9){
            OutputTens.innerHTML = "0" + tens;
        }

        if(tens > 9){
            OutputTens.innerHTML = tens;
        }

        if(tens > 99){
            seconds++;
            OutputSeconds.innerHTML = "0" + seconds;
            tens = 0;
            OutputTens.innerHTML = "0" + 0;
        }

        if(seconds > 9){
            OutputSeconds.innerHTML = seconds;
        }
        if(seconds >59){
            min++;
            OutputMin.innerHTML = "0" + min;
            seconds = 0;
            OutputSeconds.innerHTML = "0" + 0;
            tens=0;
            OutputTens.innerHTML = "0" + 0;
             
        }
        if(min>9){
            OutputMin.innerHTML = min;
        }
    }