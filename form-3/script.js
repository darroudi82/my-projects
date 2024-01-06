// تاریخ را خودمان وارد کرده ایم :

function a(data) {
    // at first we have to write days of week
    var default_days = new Array('Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday');
    // then we make data object
    var num_day = new Date(data).getDay();

    return `our day is: ${default_days[num_day]}`;
}
//  this is an example for date
var date = "1981-05-02";
var one_day = a(date);
console.log(one_day);



//  برای وقتی که تاریخ را از  کاربر بگیریم :


function getDayOfWeek(date) {
    var defaultDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    var numDay = new Date(date).getDay();
    return defaultDays[numDay];
}

var input = document.getElementById("date");
var button = document.getElementById("but");

button.addEventListener("click", function () {
    var dateValue = input.value;
    var dayOfWeek = getDayOfWeek(dateValue);
    console.log("Our day is: " + dayOfWeek);
});
