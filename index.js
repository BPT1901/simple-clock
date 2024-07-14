
function updateTime() {
    const d = new Date();
    const time = d.toLocaleTimeString();
    
    document.getElementById("time").innerHTML = time;
}

setInterval(updateTime, 1000);

updateTime();