function getTime() {
    //Selecting
    const date = document.getElementById('show-date');
    const time = document.getElementById('show-time');


    //getting date & time
    const daysWeek = ['อาทิตย์', 'จันทร์', 'อังคาร', 'พุธ', 'พฤหัสฯ', 'ศุกร์', 'เสาร์'];
    const months = ['มกราคม', 'กุมภาพันธ์', 'มีนาคม', 'เมษายน', 'พฤษภาคม', 'มิถุนายน', 'กรกฎาคม', 'สิงหาคม', 'กันยายน', 'ตุลาคม', 'พฤศจิกายน', 'ธันวาคม'];
    let currentDate = new Date();
    let currentYear = currentDate.getFullYear() + 543;
    let currentMonth = months[currentDate.getMonth()];
    let currentDay_name = daysWeek[currentDate.getDay()];
    let currentDay_number = currentDate.getDate();
    let currentHour = currentDate.getHours();
    let currentMinute = currentDate.getMinutes();
    let currentSeconds = currentDate.getSeconds();

    //transform 1 to 01
    currentHour = (currentHour < 10) ? `0${currentHour}` : currentHour;
    currentMinute = (currentMinute < 10) ? `0${currentMinute}` : currentMinute;
    currentSeconds = (currentSeconds < 10) ? `0${currentSeconds}` : currentSeconds;




    //date String
    let dateString = `${currentDay_name} ${currentDay_number} ${currentMonth} ${currentYear}`;
    let timeString = `${currentHour}:${currentMinute}:${currentSeconds}`;


    //changing value
    date.textContent = dateString;
    time.textContent = timeString;
}

setInterval(function () {
    getTime()
}, 1000);