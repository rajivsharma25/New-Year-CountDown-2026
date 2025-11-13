const endDate = new Date("1 Jan, 2026 00:00:00").getTime(); // in milliseconds
const startDate = new Date("1 Jan, 2025 00:00:00").getTime(); // in milliseconds

function updateTimer(){
    const now = new Date().getTime();
    const distanceCovered = now - startDate;  // in milliseconds
    const distancePending = endDate - now;  // in milliseconds

    const oneDayinMilliseconds = (24 * 60 * 60 * 1000);
    const oneHourinMilliseconds = (60 * 60 * 1000);
    const oneMinuteinMilliseconds = (60 * 1000);
    
    // calculate time left
    const days = Math.floor(distancePending / oneDayinMilliseconds);
    const hours = Math.floor((distancePending % oneDayinMilliseconds) / oneHourinMilliseconds);
    const minutes = Math.floor((distancePending % oneHourinMilliseconds) / oneMinuteinMilliseconds);
    const seconds = Math.floor((distancePending % oneMinuteinMilliseconds) / 1000);

    // render in UI
    document.getElementById("days").innerText = days;
    document.getElementById("hours").innerText = hours;
    document.getElementById("minutes").innerText = minutes;
    document.getElementById("seconds").innerText = seconds;

    // calculate width percentage of progress bar
    const totalDistance = endDate - startDate;
    const percentageDistance = (distanceCovered / totalDistance) * 100;
    // set width of progress bar
    document.getElementById("progress-bar").style.width = percentageDistance + "%";

    // clearing timer
    if(distancePending < 0){
        clearInterval(timer);
        document.getElementById("countdown").innerHTML = "Happy New Year 2026🎉";
        document.getElementById("countdown").style.color = "#b14573";
        document.getElementById("countdown").style.fontWeight = "bold";
        document.getElementById("countdown").style.textShadow = "0 0 10px #b1457388";
        document.getElementById("countdown").style.textAlign = "center";
        document.getElementById("countdown").style.fontSize = "2rem";
        
        document.getElementById("progress-bar").style.width = "100%";
    }
}

const timer = setInterval(updateTimer, 1000);