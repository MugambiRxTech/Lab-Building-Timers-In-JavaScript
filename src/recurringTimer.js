// Recurring Timer function
function recurringTimer(message, interval) {
    // Start a timer that repeats every interval
    const timerId = setInterval(() => {
        // Print the message each time
        console.log(message);
    }, interval);
    
    // Return the timer ID so we can stop it later
    return timerId;
}

// Function to stop the recurring timer
function stopRecurringTimer(timerId) {
    // Stop the timer using clearInterval
    clearInterval(timerId);
}

module.exports = { recurringTimer, stopRecurringTimer };