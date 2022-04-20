document.addEventListener("DOMContentLoaded", (event) => {

    let clock = document.getElementById('clock');
    let clockButton =  document.getElementById('timeClock');
    let hourInterval, timerInterval, chronoInterval, alarmInterval, startingHour,  chronoTime;
   

        clearInterval(timerInterval);
        clearInterval(chronoInterval);
        clearInterval(alarmInterval);

        
        

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
    
        hourInterval = setInterval(displayTime, 1000);
    clockButton.addEventListener('click', () => {

        //stop all the running timers
        clearInterval(timerInterval);
        clearInterval(chronoInterval);
        clearInterval(alarmInterval);

        //destroy all the other divs and destroy their timer
        //--- Timer Div
        let timerDiv = document.getElementById('timerDiv');
        if (timerDiv != null) {timerDiv.remove()};

        //-- Chrono Div / laps Div
        let chronoDiv = document.getElementById('chronoDiv');
        if (chronoDiv != null) {chronoDiv.remove()};
        let lapsDiv =  document.getElementById('lapsDiv');
        if (lapsDiv != null) {lapsDiv.remove()}

        //-- Alarm Div
        let alarmDiv = document.getElementById('alarmDiv');
        if (alarmDiv != null) {alarmDiv.remove()}
        

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
    
        hourInterval = setInterval(displayTime, 1000);

    });

});