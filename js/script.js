  window.onload = function() {
    var date = moment([moment().format('YYYY'), (moment().format('M')-1), 1]);
    moment.locale('en');

    changeMonth(date);
 };
 var newDate;

 function calcWeeksInMonth(date) { // подсчет количества недель в месяце
  const dateFirst = moment(date).date(1)
  const dateLast = moment(date).date(date.daysInMonth())
  const startWeek = dateFirst.week()
  const endWeek = dateLast.week()
  if (endWeek < startWeek) {
      return dateFirst.weeksInYear() - startWeek + 1 + endWeek
  } else {
      return endWeek - startWeek + 1
  }
}

function changeMonth(date) {
    newDate = date;
    var year = date.format('YYYY'); //год
    var month = date.format('MMMM'); // буквунный вариант записи месяца
    var monthLetter = date.format("M"); // числовой вариант записи месяца
    //console.log(month);
    var day = date.format('DD'); // день
    var dayOfWeek = date.isoWeekday(); // день недели первого дня месяца от 1 до 7 (1 это пн)
    if(dayOfWeek == 7) {dayOfWeek = 0}
    //console.log(dayOfWeek);
    var row = ''
    var countWeeks = calcWeeksInMonth(date)
    date.subtract(dayOfWeek, 'days');
    for(var i = 0; i < countWeeks; i++)
    {
      row = '<tr>'
       for(var k = 0; k < 7; k++)
       {
          row += "<td>"+date.format('DD')+"</td>"
          date = date.add(1, 'day');
       }
     row += '</tr>'
     calendar.getElementsByTagName('tbody')[0].innerHTML += row
    }
    document.getElementById('month').innerHTML = month
}

function clickOnLeft(){
  calendar.getElementsByTagName('tbody')[0].innerHTML = ''
  let date = newDate.startOf('month');
  changeMonth(date.subtract(2, 'month'))
}

function clickOnRight(){
  let date = newDate.startOf('month');
  //console.log(date.format('MMMM'))
  calendar.getElementsByTagName('tbody')[0].innerHTML = ''
  changeMonth(newDate.add(0, 'month'))
}