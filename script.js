const hour = document.getElementById('hour');
const minute = document.getElementById('minute');
const second = document.getElementById('second');
const startbutton =  document.getElementById('start');
const stopbutton = document.getElementById('stop');
const resetbutton = document.getElementById('reset');



function showtime()
{
    let hr = Number(hour.textContent);
    let min = Number(minute.textContent);
    let sec = Number(second.textContent);
    
    sec++;
    if (sec == 60)
    {
        sec = 0;
        min++;
    }
    if (min == 60)
    {
        hr++;
        min = 0;
        sec = 0;
    }
    hour.textContent = hr;
    minute.textContent = min;
    second.textContent = sec;
}

let timeinterval;

startbutton.addEventListener('click', () => 
{
    timeinterval = setInterval(showtime, 1000);
})

stopbutton.addEventListener('click', () =>
    {
        clearInterval(timeinterval);
    })
    
resetbutton.addEventListener('click', () =>
{
    hour.textContent = 0;
    minute.textContent = 0;
    second.textContent = 0;
})
