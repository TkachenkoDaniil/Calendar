for(var i = 0; i < countWeeks; i++)
{
  row = '<tr>'
  //console.log(dayOfWeek);
  if((i == 0) && (dayOfWeek != 1)) // пропускаем дни недели до начала месяца
  {
    //console.log('1');
     for(var j = 0; j < dayOfWeek; j++)
     {
       //console.log('2');
       row += '<td></td>'
     }
     for(var k = dayOfWeek; k < 7; k++)
     {
        //console.log('3');
        row += "<td>"+date.format('DD')+"</td>"
        date = date.add(1, 'day');
     }
  }
  else if(i != (countWeeks-1))
  {
    //console.log('4');
    for(var t = 0; t < 7; t++)
    {
      //console.log("все ок");
      row += "<td>"+date.format('DD')+"</td>"
      date = date.add(1, 'day');
      //console.log(date.format('DD'));
    }
  }
  else
  {
    var count = 0;
    var l = date.format('DD');
    do
    {
      console.log("s");
      row += "<td>"+date.format('DD')+"</td>"
      date = date.add(1, 'day');
      count ++;
      l++;
    }while(l != date.daysInMonth());
    //console.log("s");
    //console.log("вsadсе ок");
    while(count != 7)
    {
      console.log("s");
      row += '<td></td>'
      count++;
    }
  }
}




  for(var i = 0; i < countWeeks; i++)
    {
      row = '<tr>'
      //console.log(dayOfWeek);
      if((i == 0) && (dayOfWeek != 1)) // пропускаем дни недели до начала месяца
      {
        //console.log('1');
         for(var j = 0; j < dayOfWeek; j++)
         {
           //console.log('2');
           row += '<td></td>'
         }
         for(var k = dayOfWeek; k < 7; k++)
         {
            //console.log('3');
            row += "<td>"+date.format('DD')+"</td>"
            date = date.add(1, 'day');
         }
      }
      else
      {
        //console.log('4');
        for(var t = 0; t < 7; t++)
        {
          //console.log();
          if(date.format('DD') != moment(date).date(date.daysInMonth()))
          {
            //console.log("все ок");
            row += "<td>"+date.format('DD')+"</td>"
            date = date.add(1, 'day');
          }
          else
          {
            console.log("вsadсе ок");
            row += '<td></td>'
          }
        }
      }
     row += '</tr>'
     calendar.getElementsByTagName('tbody')[0].innerHTML += row
    }


    window.onload = function() {
      var date = moment([moment().format('YYYY'), (moment().format('M')-1), 1]);
      moment.locale('en');
  
      changeMonth(date);
   };