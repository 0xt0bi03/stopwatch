let second = 0;
let millisecond = 0;

function countdown()
{
    while (true)
    {
        setTimeout
    }
}

let count = 0;
const intervalId = setInterval(() => {
  count++;
  console.log(`Count: ${count}`);
  
  if (count === 5) {
    clearInterval(intervalId); // Stop the timer
  }
}, 1000); // runs every 1 second