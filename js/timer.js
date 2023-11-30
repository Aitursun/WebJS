document.addEventListener("DOMContentLoaded", function () {
    const minutesDisplay = document.getElementById("minutesS");
    const secondsDisplay = document.getElementById("secondsS");
    const mlSecondsDisplay = document.getElementById("ml-secondsS");

    let totalSeconds = 0;
    let interval;

    function updateTimer() {
        const minutes = Math.floor(totalSeconds / 60);
        const seconds = totalSeconds % 60;

        minutesDisplay.textContent = minutes < 10 ? "0" + minutes : minutes;
        secondsDisplay.textContent = seconds < 10 ? "0" + seconds : seconds;
        mlSecondsDisplay.textContent = totalSeconds % 100 < 10 ? "0" + (totalSeconds % 100) : totalSeconds % 100;
    }

    document.getElementById("start").addEventListener("click", function () {
        interval = setInterval(function () {
            totalSeconds++;
            updateTimer();
        }, 10);
    });

    document.getElementById("stop").addEventListener("click", function () {
        clearInterval(interval);
    });

    document.getElementById("reset").addEventListener("click", function () {
        totalSeconds = 0;
        updateTimer();
        clearInterval(interval);
    });
});
