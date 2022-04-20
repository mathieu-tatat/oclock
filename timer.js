document.addEventListener("DOMContentLoaded", (event) => {

        let timerDiv = document.getElementById('timerDiv');
            if (timerDiv != null) {timerDiv.remove()};

      
        
        
    let clock = document.getElementById('clock');
    let timerButton = document.getElementById('timer');
    let hourInterval, timerInterval, chronoInterval, alarmInterval, startingHour;
    let snd = new Audio('clock.mp3');

    timerButton.addEventListener('click', () => {

        //stop the hour from displaying
        clearInterval(hourInterval);
        clearInterval(chronoInterval);
        clearInterval(alarmInterval);

        //destroy all the other divs and destroy their timer
        //-- Chrono Div / laps Div
        let chronoDiv = document.getElementById('chronoDiv');
        if (chronoDiv != null) {chronoDiv.remove()};
        let lapsDiv =  document.getElementById('lapsDiv');
        if (lapsDiv != null) {lapsDiv.remove()}

        //-- Time
        clock.innerHTML = '';
        
        //-- Alarm Div
        let alarmDiv = document.getElementById('alarmDiv');
        if (alarmDiv != null) {alarmDiv.remove()}

        //timer div containing stop and start buttons
        let timerDiv = document.createElement('DIV');
        timerDiv.setAttribute('id', 'timerDiv');

        //button start timer
        let startButton = document.createElement('Button');
        startButton.setAttribute('name', 'start');
        startButton.setAttribute("class", "btn");
        startButton.innerText = "start";

        //button stop timer
        let stopButton = document.createElement('Button');
        stopButton.setAttribute('name', 'stop');
        stopButton.setAttribute("class", "btn");
        stopButton.innerText = "stop";

        //button reset timer
        let resetButton = document.createElement('Button');
        resetButton.setAttribute('name', 'reset');
        resetButton.setAttribute("class", "btn");
        resetButton.innerText = "reset";

        //add elements to page
        timerDiv.appendChild(startButton);
        timerDiv.appendChild(stopButton);
        timerDiv.appendChild(resetButton);
        clock.after(timerDiv);       

        //input Hours        
        let hoursInput = document.createElement('INPUT');
        hoursInput.setAttribute("type","number");
        hoursInput.setAttribute("class", "btn");
        hoursInput.setAttribute('id', 'hoursInput');
        hoursInput.setAttribute("value",0);
        hoursInput.setAttribute("label","heures");

        //input Minutes
        let minutesInput = document.createElement('INPUT');
        minutesInput.setAttribute("type","number");
        minutesInput.setAttribute("class", "btn");
        minutesInput.setAttribute('id', 'minutesInput');
        minutesInput.setAttribute("value",0);

        //input Seconds
        let secondsInput = document.createElement('INPUT');
        secondsInput.setAttribute("type","number");
        secondsInput.setAttribute("class", "btn");
        secondsInput.setAttribute('id', 'secondsInput');
        secondsInput.setAttribute("value",0);

        //semi colons
        let semiColon = document.createElement('DIV');
        semiColon.innerText = ":";
        let semiColon2 = document.createElement('DIV');
        semiColon2.innerText = ":";

        clock.appendChild(hoursInput);
        clock.appendChild(semiColon);
        clock.appendChild(minutesInput);
        clock.appendChild(semiColon2);
        clock.appendChild(secondsInput);

        function decreaseTime() { 

            if (startingHour == 0) 
            {
                clearInterval(timerInterval);
                snd.play();                
            }
            else
            {
                startingHour--

                //transposition de chacune des parties de l'heure affichée
                let hour = parseInt(startingHour / 3600, 10);
                let minutes = parseInt((startingHour / 60) % 60, 10);
                let seconds = parseInt(startingHour %60, 10);
        
                //gestion du zéro si le nombre est inférieur à 10
                hour = hour < 10 ? "0" + hour : hour;
                minutes = minutes < 10 ? "0" + minutes : minutes;
                seconds = seconds < 10 ? "0" + seconds : seconds;            
        
                //affichage du temps du minuteur            
                hoursInput.value = hour;
                minutesInput.value = minutes;
                secondsInput.value = seconds;
            }

        }
        

        //event listener START
        startButton.addEventListener('click', () =>{
            let testHour = parseInt(hoursInput.value);
            let testMinute = parseInt(minutesInput.value);
            let testSeconds = parseInt(secondsInput.value);
            startingHour = (testHour * 3600) + ( testMinute * 60) + (testSeconds);            
            console.log(startingHour);
            timerInterval = setInterval(decreaseTime, 1000);
        });

        //event listener STOP
        stopButton.addEventListener('click', () => {
            clearInterval(timerInterval);
        });
        
        //event listener RESET
        resetButton.addEventListener('click', () => {
            clearInterval(timerInterval);

            //remise à zero
            hoursInput.value = 0;
            minutesInput.value = 0;
            secondsInput.value = 0;
        })
    })

});