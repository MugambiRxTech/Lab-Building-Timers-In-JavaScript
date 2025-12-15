// Delayed Reminder function
function delayedReminder(message, delay) {
    // Return a promise
    return new Promise((resolve) => {
        // Set a timer to run after the delay
        setTimeout(() => {
            // Print the reminder message
            console.log(message);
            
            // Resolve the promise to confirm it's done
            resolve();
        }, delay);
    });
}

module.exports = { delayedReminder };