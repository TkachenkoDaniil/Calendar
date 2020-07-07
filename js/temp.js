
// date.setMonth(date.getMonth() + 1);
// date.setDate(-1);
//date.setDate(+1);
// console.log(date.getFullYear());
// console.log(date.getMonth()+1);
// console.log(date.getDate()+1);
// console.log(date.getDay());

 //var date = new Date();

// let monthLetter = temp.toLocaleString('ru', {
//   month: 'long'
// });

// console.log(monthLetter);
// temp.setDate(1);
// console.log(temp);

//console.log(getWeekNum(temp));

// function getWeekNum (date) { //Корректно определяем номер недели в году
//   let day = date.getDate();
//   let month = date.getMonth()+1;
//   let year = date.getFullYear();
//   //if (calStartDOW == 0) day++; //Чтоб работало и для САЩ :)
//   month++; //в JS месяцы нумеруются с нуля!
//   let a = Math.floor((14-month) / 12);
//   let y = year + 4800 - a;
//   let m = month + 12 * a - 3;
//   let J = day + Math.floor((153 * m + 2) / 5) + 365 * y + Math.floor(y/4) - 
//    Math.floor(y/100) + Math.floor(y/400) - 32045;
//   d4 = (((J + 31741 - (J % 7)) % 146097) % 36524) % 1461;
//   let L = Math.floor(d4 / 1460);
//   let d1 = ((d4 - L) % 365) + L;
//   let week = Math.floor(d1/7) + 1;
//   if (week<10) week='0'+week; //Лидирующий ноль для недель 1-9
//   return week;
//  }

//console.log(date.getDay());

// date.setDate(date.getDate() + 1);
// console.log(date);

// var mas = [,2, 3];
// console.log(mas[0]);

const date = new Date();
date.setDate(date.getDate() - 5);
console.log(date);