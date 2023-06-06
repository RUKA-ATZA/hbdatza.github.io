window.onload = function() {
    // Set the target date for the countdown (June 12, 2023)
    const targetDate = new Date("June 12, 2023").getTime();

    // Update the countdown every second
    setInterval(function() {
        // Get the current date and time
        const now = new Date().getTime();

        // Find the time remaining between now and the target date
        const timeRemaining = targetDate - now;

        // Calculate the days, hours, minutes, and seconds remaining
        const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
            (timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor(
            (timeRemaining % (1000 * 60 * 60)) / (1000 * 60)
        );
        const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

        // Display the countdown values in the HTML elements
        document.getElementById("days").innerHTML = days;
        document.getElementById("hours").innerHTML = hours;
        document.getElementById("minutes").innerHTML = minutes;
        document.getElementById("seconds").innerHTML = seconds;
    }, 1000);
};
