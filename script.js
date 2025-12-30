let millisecond = 0;

function countdown()
{
    millisecond = millisecond + 0.1;
    console.log(`count: ${millisecond}`);

    if (millisecond >= 5)
    {
        clearInterval(intervals);
    }
}

const intervals = setInterval(countdown, 100);

