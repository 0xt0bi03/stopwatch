// VARIABLES
const hour = document.getElementById('hour');
const minute = document.getElementById('minute');
const second = document.getElementById('second');
const millisecond = document.getElementById('millisecond');
const startbutton =  document.getElementById('start');
const stopbutton = document.getElementById('stop');
const resetbutton = document.getElementById('reset');


// FRAME
const frame = document.getElementById('frame');


// FUNCTION
function showtime()
{
    let hr = Number(hour.textContent);
    let min = Number(minute.textContent);
    let sec = Number(second.textContent);
    let msec = Number(millisecond.textContent);

    msec++;
    if(msec == 10)
    {
        msec = 0;
        sec++;
    }
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
    millisecond.textContent = msec;
}


// FUNCTION CALL STATEMENTS
let timeinterval = null;

startbutton.addEventListener('click', () => 
{
    if (!timeinterval)
    {
        frame.style.setProperty('background-color', 'var(--orange)');
        frame.style.setProperty('color', 'var(--darkviolet)');
        timeinterval = setInterval(showtime, 100);
    }
})
    
stopbutton.addEventListener('click', () =>
{
        frame.style.setProperty('background-color', 'var(--violet)');
        frame.style.setProperty('color', 'var(--orange)');
        clearInterval(timeinterval);
    })
    
resetbutton.addEventListener('click', () =>
{
    hour.textContent = 0;
    minute.textContent = 0;
    second.textContent = 0;
    millisecond.textContent = 0;
})
