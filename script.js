const hour = document.getElementById('hour');
const minute = document.getElementById('minute');
const second = document.getElementById('second');
const startbutton =  document.getElementById('start');
const stopbutton = document.getElementById('stop');



function countdown()
{
    second.textContent++;
    if (second == 60)
        {
            second.textContent = 0;
            minute.textContent++;
    }
    if (minute == 60)
        {
            second.textContent = 0;
            minute.textContent = 0;
            hour.textContent += 1;
        }
        
        const stopbutton = addEventListener('click', () =>
            {
                clearInterval(timeinterval);
                
            }
        )
    }
    
startbutton.addEventListener('click', () =>
{
    const timeinterval = setInterval(countdown, 1000);
})

second.textContent = 0;
minute.textContent = 0;
hour.textContent = 0;