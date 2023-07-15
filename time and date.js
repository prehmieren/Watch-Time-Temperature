// function currentTime() {
//     let date = new Date();
//     let hh = date.getHours();
//     let mn = date.getMinutes();
//     let ss = date.getSeconds();
//     // let session = "AM"
//     // if (hh > 12) {
//     //     session = "PM"
//     // }

//     // if (hh < 0) {
//     //     hh = "0" + hh
//     // } else {
//     //     hh = hh
//     // }

//     hh = (hh < 10) ? "0" + hh : hh;
//     mn = (mn < 10) ? "0" + mn : mn;
//     ss = (ss < 10) ? "0" + ss : ss;

//     let time = hh + ":" + mn + ":" + ss + " ";

//     document.getElementById("show-time").innerHTML = time
//     document.getElementById("show-date").innerHTML = time


//     let t = setInterval(function (params) {
//         currentTime()
//     }, 1000)
// }

// let show = currentTime();
function getTime() {
    //Selecting
    const date = document.getElementById('show-date');
    const time = document.querySelector('#show-time');


    //getting date & time
    const daysWeek = ['อาทิตย์', 'จันทร์', 'อังคาร', 'พุธ', 'พฤหัสฯ', 'ศุกร์', 'เสาร์'];
    const months = ['มกราคม', 'กุมภาพันธ์', 'มีนาคม', 'เมษายน', 'พฤษภาคม', 'มิถุนายน', 'กรกฎาคม', 'สิงหาคม', 'กันยายน', 'ตุลาคม', 'พฤศจิกายน', 'ธันวาคม'];
    let currentDate = new Date();
    let currentYear = currentDate.getYear() + 2443;
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