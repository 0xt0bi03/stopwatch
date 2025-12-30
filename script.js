// let millisecond = 0;

// function countdown()
// {
//     millisecond = millisecond + 0.1;
//     console.log(`count: ${millisecond}`);

//     if (millisecond >= 5)
//     {
//         clearInterval(intervals);
//     }
// }

// const intervals = setInterval(countdown, 100);

let hour = 0;
let minute = 0;
let second = 0;

function countdown()
{
    second++;
    if (second == 60)
    {
        minute++;
        second = 0;
    }
    if (minute == 60)
    {
        hour++;
        minute = 0;
    }
    console.log(`the time is ${hour}:${minute}:${second}`)
}

const timeinterval = setInterval(countdown, 1000);