function init () {
    const takeOffButton = document.getElementById("takeoff");
    const shuttleBackground = document.getElementById("shuttleBackground");
    const flightStatus = document.getElementById("flightStatus");
    const shuttleHeight = document.getElementById("spaceShuttleHeight");
    const landButton = document.getElementById("landing");
    const missionAbort = document.getElementById("missionAbort");
    const up = document.getElementById("up");
    const down = document.getElementById("down");
    const right = document.getElementById("right");
    const left = document.getElementById("left");
    const rocket = document.getElementById("rocket");
    rocket.style.position="relative";
    rocket.style.left = "0px";
    rocket.style.right = "0px";
    rocket.style.bottom = "0px";
    rocket.style.top = "0px";


    takeOffButton.addEventListener("click", function(event){
        let response = confirm("Confirm that the shuttle is ready for takeoff.");
        if(response){
            flightStatus.innerHTML = 'Shuttle in flight.';
            shuttleHeight.innerHTML = '10,000';
            shuttleBackground.style.backgroundColor = "#0000ff";
        }  else{

        }
    })

    landButton.addEventListener("click", function(event){
        alert("The shuttle is landing. Landing gear engaged.");
        flightStatus.innerHTML = 'The shuttle has landed.';
        shuttleHeight.innerHTML = '0';
        shuttleBackground.style.backgroundColor = "#00ff00";
        shuttleBackground.style.left = '0px';
        shuttleBackground.style.right = '0px';
        shuttleBackground.style.top = '0px';
        shuttleBackground.style.bottom = '0px';
        rocket.style.left = '0px';
        rocket.style.right = '0px';
        rocket.style.top = '0px';
        rocket.style.bottom = '0px';
    })

    missionAbort.addEventListener("click", function(event){
        let response = confirm("Confirm that you want to abort the mission.");
        flightStatus.innerHTML = 'Mission aborted.';
        shuttleHeight.innerHTML = '0';
        shuttleBackground.style.backgroundColor = "#00ff00";
        shuttleBackground.style.left = '0px';
        shuttleBackground.style.right = '0px';
        shuttleBackground.style.top = '0px';
        shuttleBackground.style.bottom = '0px';
        rocket.style.left = '0px';
        rocket.style.right = '0px';
        rocket.style.top = '0px';
        rocket.style.bottom = '0px';
    })

    right.addEventListener("click", function(event){
        rocket.style.left = parseInt(rocket.style.left) + 10 + 'px';
    })

    left.addEventListener("click", function(event){
        rocket.style.left = parseInt(rocket.style.left) - 10 + 'px';
    })

    up.addEventListener("click", function(event){
        rocket.style.top = parseInt(rocket.style.top) - 10 + 'px';
        shuttleHeight.innerHTML = parseInt(shuttleHeight.innerHTML) + 10000;
    })

    down.addEventListener("click", function(event){
        rocket.style.top = parseInt(rocket.style.top) + 10 + 'px';
        shuttleHeight.innerHTML = parseInt(shuttleHeight.innerHTML) - 10000;
    })
   
}


window.addEventListener("load", init);