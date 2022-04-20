document.addEventListener("DOMContentLoaded", (event) => {

let clock = document.getElementById('clock');
let alarmButton = document.getElementById('alarmClock');
let hourInterval, timerInterval, chronoInterval;
let alarmHour, alarmMinutes, alarmVerification;
let snd = new Audio('clock.mp3');



    alarmButton.addEventListener('click', () => {

        //stop the hour from displaying
        clearInterval(hourInterval);
        clearInterval(timerInterval);
        clearInterval(chronoInterval);

       
        //containing div
        let alarmDiv = document.createElement('DIV');
        alarmDiv.setAttribute('id', 'alarmDiv');        

            //input alarm        
            let alarmInput = document.createElement('INPUT');
            alarmInput.setAttribute("type","time");
            alarmInput.setAttribute('id', 'alarmInput');
            alarmInput.setAttribute('class','btn');

            alarmInput.setAttribute("value",0);
            alarmDiv.appendChild(alarmInput)

            //div containing alarmButtons
            let alarmButtonDiv = document.createElement('DIV');
            alarmButtonDiv.setAttribute('id', 'alarmButtonDiv');
            

                //button set timer
                let setButton = document.createElement('Button');
                setButton.setAttribute('name', 'set');
                setButton.setAttribute('class','btn');
                setButton.innerText = "set";
                alarmButtonDiv.appendChild(setButton);

                //button stop timer
                let stopButton = document.createElement('Button');
                stopButton.setAttribute('name', 'stop');
                stopButton.setAttribute('class','btn');
                stopButton.innerText = "stop";
                alarmButtonDiv.appendChild(stopButton);

        alarmDiv.appendChild(alarmInput);
        alarmDiv.appendChild(alarmButtonDiv);

        clock.after(alarmDiv);

        //time display function
        function displayTime () {

            const date = new Date();
    
            let hour = date.getHours().toString();
            let minutes = date.getMinutes().toString();
            let seconds = date.getSeconds().toString();

            hour = hour < 10 ? "0" + hour : hour;
            minutes = minutes < 10 ? "0" + minutes : minutes;
            seconds = seconds < 10 ? "0" + seconds : seconds;            
    
            clock.innerHTML = `${hour} : ${minutes} : ${seconds}`;
    
        }

        setButton.addEventListener('click', () => {

            alarmHour = parseInt(alarmInput.value[0]) * 10 + parseInt(alarmInput.value[1]);
            alarmMinutes = parseInt(alarmInput.value[3]) * 10 + parseInt(alarmInput.value[4]);
            alarmVerification = setInterval(throwAlarm, 1000);
            throwAlarm();

        })

        stopButton.addEventListener('click', () => {
            clearInterval(alarmVerification);
            snd.pause();            
        })

        function throwAlarm() {
            
            let hourVerif = parseInt(clock.innerText[0])*10 + parseInt(clock.innerText[1]);
            let minuteVerif = parseInt(clock.innerText[5])*10 + parseInt(clock.innerText[6]);
             if (alarmHour == hourVerif && alarmMinutes == minuteVerif) {
               snd.play()
             }
             

        }

        alarmInterval = setInterval(displayTime, 1000);
        
    })

});