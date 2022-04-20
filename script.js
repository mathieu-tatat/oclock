document.addEventListener("DOMContentLoaded", (event) => {

    let clock = document.getElementById('clock');
    let clockButton =  document.getElementById('timeClock');
    let timerButton = document.getElementById('timer');
    let chronoButton = document.getElementById('chrono');
    let alarmButton = document.getElementById('alarmClock');
    let hourInterval;
    let timerInterval;
    let chronoInterval;
    let alarmInterval;
    let startingHour;
    let chronoTime
    let alarmHour;  
    let alarmMinutes;
    let alarmVerification;
    let snd = new Audio('clock.mp3');
  

    function setTime() {

        //convertion données pour affichage de l'heure
        let hour = parseInt(chronoTime / 3600, 10);
        let minutes = parseInt((chronoTime / 60) % 60, 10);
        let seconds = parseInt(chronoTime %60, 10);

        //si la donné est inferieur a 10 alors on la precede d'un 0
        hour = hour < 10 ? "0" + hour : hour;
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        //affichage de mon horloge
        clock.innerHTML = `${hour} : ${minutes} : ${seconds}`;
    }

        clearInterval(timerInterval);
        clearInterval(chronoInterval);
        clearInterval(alarmInterval);

        // fonctionalité pour conserver uniquement l'affichage désiré

        //--- div timer
        let timerDiv = document.getElementById('timerDiv');
        if (timerDiv != null) {timerDiv.remove()};

        //-- Div Chronometre 
        let chronoDiv = document.getElementById('chronoDiv');
        if (chronoDiv != null) {chronoDiv.remove()};
        let lapsDiv =  document.getElementById('lapsDiv');
        if (lapsDiv != null) {lapsDiv.remove()}

        //-- div alarm
        let alarmDiv = document.getElementById('alarmDiv');
        if (alarmDiv != null) {alarmDiv.remove()}
        

        //fonction d'affichage de l'horloge
        function displayTime () {

            let date = new Date();
    
            let hour = date.getHours().toString();
            let minutes = date.getMinutes().toString();
            let seconds = date.getSeconds().toString();

            hour = hour < 10 ? "0" + hour : hour;
            minutes = minutes < 10 ? "0" + minutes : minutes;
            seconds = seconds < 10 ? "0" + seconds : seconds;            
    
            clock.innerHTML = `${hour} : ${minutes} : ${seconds}`;
    
        }
        hourInterval = setInterval(displayTime, 1000);

    clockButton.addEventListener('click', () => {

        //masque tout les autres affichages
        clearInterval(timerInterval);
        clearInterval(chronoInterval);
        clearInterval(alarmInterval);

        //Masque et ras les autres timers

        //--- Div Timer 
        let timerDiv = document.getElementById('timerDiv');
        if (timerDiv != null) {timerDiv.remove()};

        //-- Div Chronometre 
        let chronoDiv = document.getElementById('chronoDiv');
        if (chronoDiv != null) {chronoDiv.remove()};

        //-- Div compte tours
        let lapsDiv =  document.getElementById('lapsDiv');
        if (lapsDiv != null) {lapsDiv.remove()}

        //-- Div Alarme
        let alarmDiv = document.getElementById('alarmDiv');
        if (alarmDiv != null) {alarmDiv.remove()}
        

        //function d'affichage du temps
        function displayTime () {

            let date = new Date();
            let hour = date.getHours().toString();
            let minutes = date.getMinutes().toString();
            let seconds = date.getSeconds().toString();

            hour = hour < 10 ? "0" + hour : hour;
            minutes = minutes < 10 ? "0" + minutes : minutes;
            seconds = seconds < 10 ? "0" + seconds : seconds;            
    
            clock.innerHTML = `${hour} : ${minutes} : ${seconds}`;
    
        }
    
        hourInterval = setInterval(displayTime, 1000);

    });

    timerButton.addEventListener('click', () => {

        //stop l'affiche de l'heure
        clearInterval(hourInterval);
        clearInterval(chronoInterval);
        clearInterval(alarmInterval);

        //Masque et ras les autres timer

        //Div Chronometre  
        let chronoDiv = document.getElementById('chronoDiv');
        if (chronoDiv != null) {chronoDiv.remove()};
        // Div tours
        let lapsDiv =  document.getElementById('lapsDiv');
        if (lapsDiv != null) {lapsDiv.remove()}

        // heure
        clock.innerHTML = '';
        
        //Div alarme
        let alarmDiv = document.getElementById('alarmDiv');
        if (alarmDiv != null) {alarmDiv.remove()}

        // Creation d'une div avec un id 
        let timerDiv = document.createElement('DIV');
        timerDiv.setAttribute('id', 'timerDiv');

        //creation du bouton start et attribution de nom et class 
        let startButton = document.createElement('Button');
        startButton.setAttribute('name', 'start');
        startButton.setAttribute("class", "btn");
        startButton.innerText = "start";

        ///creation du bouton stop et attribution de nom et class 
        let stopButton = document.createElement('Button');
        stopButton.setAttribute('name', 'stop');
        stopButton.setAttribute("class", "btn");
        stopButton.innerText = "stop";

        //creation du bouton reset et attribution de nom et class 
        let resetButton = document.createElement('Button');
        resetButton.setAttribute('name', 'reset');
        resetButton.setAttribute("class", "btn");
        resetButton.innerText = "reset";

        //disposition des bouton dans mon html
        timerDiv.appendChild(startButton);
        timerDiv.appendChild(stopButton);
        timerDiv.appendChild(resetButton);
        clock.after(timerDiv);       

        ////creation d'un input heure et attribution du type et id      
        let hoursInput = document.createElement('INPUT');
        hoursInput.setAttribute("type","number");
        hoursInput.setAttribute('id', 'hoursInput');
        hoursInput.setAttribute("value",0);
        

        ////creation d'un input minute et attribution du type et id      
        let minutesInput = document.createElement('INPUT');
        minutesInput.setAttribute("type","number");
        minutesInput.setAttribute('id', 'minutesInput');
        minutesInput.setAttribute("value",0);

        //////creation du input secondes et attribution du type et id      
        let secondsInput = document.createElement('INPUT');
        secondsInput.setAttribute("type","number");
        secondsInput.setAttribute('id', 'secondsInput');
        secondsInput.setAttribute("value",0);

        //creation des colonnes pour l'affichage du timer
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
                alert("end of timer")     
            }
            else
            {
                startingHour--

                //convertion des données en heure pour affichage
                let hour = parseInt(startingHour / 3600, 10);
                let minutes = parseInt((startingHour / 60) % 60, 10);
                let seconds = parseInt(startingHour %60, 10);
        
                //si la donné est inferieur a 10 on la precede d'un 0
                hour = hour < 10 ? "0" + hour : hour;
                minutes = minutes < 10 ? "0" + minutes : minutes;
                seconds = seconds < 10 ? "0" + seconds : seconds;            
        
                //affichage du temps du minuteur            
                hoursInput.value = hour;
                minutesInput.value = minutes;
                secondsInput.value = seconds;
            }

        }
        

        //demarage de l'evenement
        startButton.addEventListener('click', () =>{
            let testHour = parseInt(hoursInput.value);
            let testMinute = parseInt(minutesInput.value);
            let testSeconds = parseInt(secondsInput.value);
            startingHour = (testHour * 3600) + ( testMinute * 60) + (testSeconds);            
            console.log(startingHour);
            timerInterval = setInterval(decreaseTime, 1000);
        });

        //evenement d'arret de timer 
        stopButton.addEventListener('click', () => {
            clearInterval(timerInterval);
        });
        
        //evenement de remise a zero du timer
        resetButton.addEventListener('click', () => {
            clearInterval(timerInterval);

            hoursInput.value = 0;
            minutesInput.value = 0;
            secondsInput.value = 0;
        })
    })

    chronoButton.addEventListener('click', () => {
        
        //masque l'affichage de l'horloge
        clearInterval(hourInterval);
        clearInterval(timerInterval);
        clearInterval(alarmInterval);

        //ras des autres timer 
        //div timer
        let timerDiv = document.getElementById('timerDiv');
        if (timerDiv != null) {timerDiv.remove()};

        //Div time
        clock.innerHTML = '';  
        
        //div alamre
        let alarmDiv = document.getElementById('alarmDiv');
        if (alarmDiv != null) {alarmDiv.remove()}
        
        //creation d'une div avec un id 
        let chronoDiv = document.createElement('DIV');
        chronoDiv.setAttribute('id', 'chronoDiv');

        //creation d'un bouton start avec nom et class
        let startButton = document.createElement('Button');
        startButton.setAttribute('name', 'start');
        startButton.setAttribute("class", "btn");
        startButton.innerText = "start";

        

        //creation d'un bouton stop avec nom et class
        let stopButton = document.createElement('Button');
        stopButton.setAttribute('name', 'stop');
        stopButton.setAttribute("class", "btn");
        stopButton.innerText = "stop";

        //creation d'un bouton tour avec nom et class
        let lapButton = document.createElement('Button');
        lapButton.setAttribute('name', 'lap');
        lapButton.setAttribute("class", "btn");
        lapButton.innerText = "tour";

        //creation d'un bouton reset avec nom et class
        let resetButton = document.createElement('Button');
        resetButton.setAttribute('name', 'reset');
        resetButton.setAttribute("class", "btn");
        resetButton.innerText = "raz";

        //disposition des boutons dans mon html
        chronoDiv.appendChild(startButton);
        chronoDiv.appendChild(stopButton); 
        chronoDiv.appendChild(lapButton);
        chronoDiv.appendChild(resetButton);
        clock.after(chronoDiv);
        
        //creration d'une div lapsdiv avec id et titre
        let lapsDiv = document.createElement('DIV');
        lapsDiv.setAttribute('id', 'lapsDiv');
        let titleLapsDiv = document.createElement('H3'); //title
        titleLapsDiv.setAttribute("id", 'titleLapsDiv');
        titleLapsDiv.innerText = "laps :";
        lapsDiv.appendChild(titleLapsDiv);
        chronoDiv.after(lapsDiv);

        chronoTime = 0;

        setTime();

        function increaseTime() 
        {
            chronoTime++

            setTime();
            
        };

        startButton.addEventListener('click', () =>{

            chronoInterval = setInterval(increaseTime, 1000);

        })
        
        //evenement  STOP
        stopButton.addEventListener('click', () => {

            clearInterval(chronoInterval);
        });
        
        //evenement RESET
        resetButton.addEventListener('click', () => {

            clearInterval(chronoInterval);

            //raz
            chronoTime = 0;

            setTime();

        })

        lapButton.addEventListener('click', () => {

            let lpsDiv = document.getElementById('lapsDiv')
            let lapsP = document.createElement('P');
            lapsP.setAttribute('class', 'lapTime');

            //convertion des données au format heure
            let hour = parseInt(chronoTime / 3600, 10);
            let minutes = parseInt((chronoTime / 60) % 60, 10);
            let seconds = parseInt(chronoTime %60, 10);

            //si donnée est inferieur a 10 alors on l'a precede d'un 0
            hour = hour < 10 ? "0" + hour : hour;
            minutes = minutes < 10 ? "0" + minutes : minutes;
            seconds = seconds < 10 ? "0" + seconds : seconds;

            lapsP.innerText = `${hour} : ${minutes} : ${seconds}`;
            
            //affichage des 4 derniers tours et suppression du plus ancien 
            if (lpsDiv.childElementCount == 5)
            {
              lpsDiv.removeChild(lpsDiv.children[1])  
            }

            lpsDiv.appendChild(lapsP);

            //remise à zero
            chronoTime = 0;

        })

    })

    alarmButton.addEventListener('click', () => {

        //cache l'affichage de l'heure
        clearInterval(hourInterval);
        clearInterval(timerInterval);
        clearInterval(chronoInterval);

       
        //Div timer
        let timerDiv = document.getElementById('timerDiv');
        if (timerDiv != null) {timerDiv.remove()};

        //affichage de l'horloge
        clock.innerHTML = hourInterval;

        //Div Chronometre 
        let chronoDiv = document.getElementById('chronoDiv');
        if (chronoDiv != null) {chronoDiv.remove()};

        //div tours
        let lapsDiv =  document.getElementById('lapsDiv');
        if (lapsDiv != null) {lapsDiv.remove()}


        //creation d'une div avec id
        let alarmDiv = document.createElement('DIV');
        alarmDiv.setAttribute('id', 'alarmDiv');        

            //creation d'un input time avec type, id et class        
            let alarmInput = document.createElement('INPUT');
            alarmInput.setAttribute("type","time");
            alarmInput.setAttribute('id', 'alarmInput');
            alarmInput.setAttribute('class','btn');

            alarmInput.setAttribute("value",0);
            alarmDiv.appendChild(alarmInput)

            //creation d'un div avec id 
            let alarmButtonDiv = document.createElement('DIV');
            alarmButtonDiv.setAttribute('id', 'alarmButtonDiv');
            
            //creation button valider avec class
            let setButton = document.createElement('Button');
            setButton.setAttribute('name', 'set');
            setButton.setAttribute('class','btn');
            setButton.innerText = "valider";
            alarmButtonDiv.appendChild(setButton);

            //creation d'un bouton arret avec class 
            let stopButton = document.createElement('Button');
            stopButton.setAttribute('name', 'stop');
            stopButton.setAttribute('class','btn');
            stopButton.innerText = "stop";
            alarmButtonDiv.appendChild(stopButton);

        alarmDiv.appendChild(alarmInput);
        alarmDiv.appendChild(alarmButtonDiv);

        clock.after(alarmDiv);

        //fonction affiche du temps 
        function displayTime () {

            let date = new Date();
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
            clearInterval(alarmVerification)
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