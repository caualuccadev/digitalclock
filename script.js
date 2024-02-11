// getting the data values 
var dateToday = new Date()

    // getting the day of the week
var days = ['DOM', 'SEG', 'TER', 'QUA', 'QUIN', 'SEX', 'SAB']
var dayNumber = dateToday.getDay()
var day = days[dayNumber]

    // getting the month
var months = ['JAN', 'FEV', 'MAR', 'ABR', 'MAI', 'JUN', 'JUL', 'AGO', 'SET', 'OUT', 'NOV', 'DEZ']
var monthNumber = dateToday.getMonth()
var month = months[monthNumber]

    // getting the date of the day 
var dateDay = dateToday.getDate()


// getting the ids of DOM for the date 
var dayDom = document.getElementById('dia__semana')
var dateDom = document.getElementById('dia__data')
var monthDom = document.getElementById('mes')

dayDom = dayDom.innerHTML = day
dateDom = dateDom.innerHTML = dateDay
monthDom = monthDom.innerHTML = month



/* --------------------------------------
-----------------------------------------
-----------------------------------------
----------------------------------------- */

// getting the hours and minutes of the clock
var hour = dateToday.getHours()
var minute = dateToday.getMinutes()

if(hour < 10){
    hour = '0' + hour
}
if(minute < 10){
    minute = '0' + minute
}

    // getting the ids of DOM
var hourDom = document.getElementById('hora')
var minDom = document.getElementById('minuto')

hourDom = hourDom.innerHTML = hour
minDom = minDom.innerHTML = minute