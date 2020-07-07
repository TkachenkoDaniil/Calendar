window.onload = function() {
  //debugger;
  let date = new Date();
  date.setDate(1);
  changeMonth(date);
};
var newDate;

function changeMonth(date) {
  newDate = new Date(date.getFullYear(), date.getMonth(), date.getDate());
  let month = date.toLocaleString('ru', {
    month: 'long'
  });
  //debugger;
  var prevMonthLastDay = new Date(date.getFullYear(), date.getMonth(), 0);
  let lastDay = new Date(date.getFullYear(),date.getMonth() + 1, 0).getDate();
  let dayOfWeek = date.getDay();
  let row = ''

  //if(dayOfWeek == 6) {dayOfWeek = 0}
  date.setDate(date.getDate() - dayOfWeek);
  //debugger;

  row += '<tr>'
  if (dayOfWeek != 0) {
    for(let i = date.getDate(); i != prevMonthLastDay.getDate()+1; i++){
      row += '<td></td>'
      date.setDate(date.getDate() + 1);
    }
  }

  for(let j = date.getDate(); j != lastDay+1; j ++){
    if(date.getDay() == 0){
      row += '</tr><tr>'
    }
    row += "<td>" + date.getDate() + "</td>";
    date.setDate(date.getDate() + 1);
  }
  row += '</tr>'
  calendar.getElementsByTagName('tbody')[0].innerHTML += row
  document.getElementById('month').innerHTML = month
}

function clickOnLeft(){
  calendar.getElementsByTagName('tbody')[0].innerHTML = '';
  let prevMonth = new Date(newDate.getFullYear(), newDate.getMonth()-1, 1);
  //console.log(prevMonth);
  changeMonth(prevMonth);
}

function clickOnRight(){
  calendar.getElementsByTagName('tbody')[0].innerHTML = '';
  let nextMonth = new Date(newDate.getFullYear(), newDate.getMonth()+1, 1);
  //console.log(nextMonth);
  changeMonth(nextMonth); 
}