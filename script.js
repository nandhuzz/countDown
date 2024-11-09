const targetDate = new Date("04/05/2025"); // mm/dd/yyyy

// Cache DOM elements to avoid repeated lookups
const elements = {
    targetDate: document.getElementById("targetDate"),
    remainingDays: document.getElementById("remainingDays"),
    years: document.getElementById("years"),
    months: document.getElementById("months"),
    days: document.getElementById("days"),
    hours: document.getElementById("hours"),
    minutes: document.getElementById("minutes"),
    seconds: document.getElementById("seconds")
};

// Display the target date
elements.targetDate.innerHTML = targetDate.toDateString();

setInterval(() => {
    const today = new Date();
    let remainingTime = targetDate - today;

    if (remainingTime <= 0) {
        // Stop countdown if target date is reached
        elements.remainingDays.innerHTML = "0";
        elements.years.innerHTML = "0";
        elements.months.innerHTML = "0";
        elements.days.innerHTML = "0";
        elements.hours.innerHTML = "0";
        elements.minutes.innerHTML = "0";
        elements.seconds.innerHTML = "0";
        return;
    }

    // Define constants for time conversions
    const msInSecond = 1000;
    const msInMinute = msInSecond * 60;
    const msInHour = msInMinute * 60;
    const msInDay = msInHour * 24;
    const msInMonth = msInDay * 30.4375;
    const msInYear = msInDay * 365.25;

    // Calculate remaining time components
    const years = Math.floor(remainingTime / msInYear);
    remainingTime %= msInYear;
    const months = Math.floor(remainingTime / msInMonth);
    remainingTime %= msInMonth;
    const days = Math.floor(remainingTime / msInDay);
    remainingTime %= msInDay;
    const hours = Math.floor(remainingTime / msInHour);
    remainingTime %= msInHour;
    const minutes = Math.floor(remainingTime / msInMinute);
    remainingTime %= msInMinute;
    const seconds = Math.floor(remainingTime / msInSecond);

    // Display results in the HTML
    elements.remainingDays.innerHTML = Math.floor((targetDate - today) / msInDay);
    elements.years.innerHTML = years;
    elements.months.innerHTML = months;
    elements.days.innerHTML = days;
    elements.hours.innerHTML = hours;
    elements.minutes.innerHTML = minutes;
    elements.seconds.innerHTML = seconds;
    // if (years <= 0) {
    //     elements.years.style.display = 'none';
    // }
}, 1000);
