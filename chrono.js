document.addEventListener("DOMContentLoaded", (event) => {
    
    function setTime() {

        //transposition de chacune des parties de l'heure affichée
        let hour = parseInt(chronoTime / 3600, 10);
        let minutes = parseInt((chronoTime / 60) % 60, 10);
        let seconds = parseInt(chronoTime %60, 10);

        //gestion du zéro si le nombre est inférieur à 10
        hour = hour < 10 ? "0" + hour : hour;
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        //display
        clock.innerHTML = `${hour} : ${minutes} : ${seconds}`;
    }

    
    //-- Chrono Div / laps Div
    let chronoDiv = document.getElementById('chronoDiv');
    if (chronoDiv != null) {chronoDiv.remove()};
    let lapsDiv =  document.getElementById('lapsDiv');
    if (lapsDiv != null) {lapsDiv.remove()}
    
    let clock = document.getElementById('clock');
    let chronoButton = document.getElementById('chrono');
    let hourInterval, timerInterval, chronoInterval, alarmInterval, chronoTime;

    chronoButton.addEventListener('click', () => {
        
        //stop the hour from displaying
        clearInterval(hourInterval);
        clearInterval(timerInterval);
        clearInterval(alarmInterval);

        //destroy all the other divs and destroy their timer
        //--- Timer Div
        let timerDiv = document.getElementById('timerDiv');
        if (timerDiv != null) {timerDiv.remove()};

        //-- Time
        clock.innerHTML = '';  
        
        //-- Alarm Div
        let alarmDiv = document.getElementById('alarmDiv');
        if (alarmDiv != null) {alarmDiv.remove()}
        
        //timer div containing stop and start buttons
        let chronoDiv = document.createElement('DIV');
        chronoDiv.setAttribute('id', 'chronoDiv');

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

        //button lap timer
        let lapButton = document.createElement('Button');
        lapButton.setAttribute('name', 'lap');
        lapButton.setAttribute("class", "btn");
        lapButton.innerText = "tour";

        //button reset timer
        let resetButton = document.createElement('Button');
        resetButton.setAttribute('name', 'reset');
        resetButton.setAttribute("class", "btn");
        resetButton.innerText = "ras";

        //add elements to page
        chronoDiv.appendChild(startButton);
        chronoDiv.appendChild(stopButton); 
        chronoDiv.appendChild(lapButton);
        chronoDiv.appendChild(resetButton);
        clock.after(chronoDiv);
        
        //laps div
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
        
        //event listener STOP
        stopButton.addEventListener('click', () => {

            clearInterval(chronoInterval);
        });
        
        //event listener RESET
        resetButton.addEventListener('click', () => {

            clearInterval(chronoInterval);

            //remise à zero
            chronoTime = 0;

            setTime();

        })

        lapButton.addEventListener('click', () => {

            let lpsDiv = document.getElementById('lapsDiv')
            let lapsP = document.createElement('P');
            lapsP.setAttribute('class', 'lapTime');

            //transposition de chacune des parties de l'heure affichée
            let hour = parseInt(chronoTime / 3600, 10);
            let minutes = parseInt((chronoTime / 60) % 60, 10);
            let seconds = parseInt(chronoTime %60, 10);

            //gestion du zéro si le nombre est inférieur à 10
            hour = hour < 10 ? "0" + hour : hour;
            minutes = minutes < 10 ? "0" + minutes : minutes;
            seconds = seconds < 10 ? "0" + seconds : seconds;

            lapsP.innerText = `${hour} : ${minutes} : ${seconds}`;
            
            //si le nombre d'enfants de la div est égal à 6, j'enlève le premier temps
            if (lpsDiv.childElementCount == 6)
            {
              lpsDiv.removeChild(lpsDiv.children[1])  
            }

            lpsDiv.appendChild(lapsP);

            //remise à zero
            chronoTime = 0;

        })

    })
});