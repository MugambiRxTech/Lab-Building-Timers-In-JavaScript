// Countdown Timer function
function countdownTimer(seconds, interval) {
    // Store the starting time
    let remainingTime = seconds;
    
    // Start the timer that runs every interval
    const timerId = setInterval(() => {
        // Print the remaining time
        console.log(remainingTime);
        
        // Decrease the time by 1
        remainingTime--;
        
        // Stop the timer when we reach 0
        if (remainingTime < 0) {
            clearInterval(timerId);
        }
    }, interval);
    
    // Return the timer ID so we can use it later
    return timerId;
}

module.exports = { countdownTimer };
