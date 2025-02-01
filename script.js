// const socials = document.querySelector('socials');
function updateTime() {
    const utcTime = new Date().toUTCString();
    document.getElementById("utc-time").textContent = `UTC Time: ${utcTime}`;
}

setInterval(updateTime, 2000);

updateTime();
