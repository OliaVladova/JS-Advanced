function attachEventsListeners() {
    let daysIn = document.getElementById('days');
    let hoursIn = document.getElementById('hours');
    let minutesIn = document.getElementById('minutes');
    let secondsIn = document.getElementById('seconds');
    let values = {
        days: 1,
        hours: 24,
        minutes: 1440,
        seconds: 86400
    };
    
    document.querySelector('main').addEventListener('click', show);

    function show(event) {
        let btnPressed = event.target.parentElement.querySelector('input[type="text"]');
        let time = convert(btnPressed.value, btnPressed.id);

        daysIn.value = time.days;
        hoursIn.value = time.hours;
        minutesIn.value = time.minutes;
        secondsIn.value = time.seconds;
    }
    function convert(value, id) {
        let input = value / values[id];
        return {
            days: input,
            hours: input * values.hours,
            minutes: input * values.minutes,
            seconds: input * values.seconds
        };
    }
    
}