const checkboxes = document.querySelectorAll('input[type="checkbox"]');
const progressMonday = document.getElementById('Monday');
const progressTuesday = document.getElementById('Tuesday');
const progressWednesday = document.getElementById('Wednesday');
const progressThursday = document.getElementById('Thursday');
const progressFriday = document.getElementById('Friday');
const progressSaturday = document.getElementById('Saturday');
const progressSunday = document.getElementById('Sunday');

// count the number of checkboxes that are checked

const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

const d = new Date();
let day = weekday[d.getDay()];

const len = checkboxes.length;

if (day == 'Monday')
    progressMonday.style.width = 0 + '%';
if (day == 'Tuesday')
    progressTuesday.style.width = 0 + '%';
if (day == 'Wednesday')
    progressWednesday.style.width = 0 + '%';
if (day == 'Thursday')
    progressThursday.style.width = 0 + '%';
if (day == 'Friday')
    progressFriday.style.width = 0 + '%';
if (day == 'Saturday')
    progressSaturday.style.width = 0 + '%';
if (day == 'Sunday')
    progressSunday.style.width = 0 + '%';

const countChecked = () => {
    let num = 0;

    checkboxes.forEach(checkbox => {
        if (checkbox.checked == true)
            num++;
    })

    let per = (num / len) * 100;
    if (day == 'Monday')
        progressMonday.style.width = per + '%';
    if (day == 'Tuesday')
        progressTuesday.style.width = per + '%';
    if (day == 'Wednesday')
        progressWednesday.style.width = per + '%';
    if (day == 'Thursday')
        progressThursday.style.width = per + '%';
    if (day == 'Friday')
        progressFriday.style.width = per + '%';
    if (day == 'Saturday')
        progressSaturday.style.width = per + '%';
    if (day == 'Sunday')
        progressSunday.style.width = per + '%';
}

countChecked()
checkboxes.forEach(checkbox => checkbox.addEventListener('click', countChecked));

