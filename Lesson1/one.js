"use strict";
let money, time, appdata, 
expenses, optionalExpenses, income, savings;

savings = false;
money = prompt("Ваш бюджет на месяц?", "0");
time = prompt("Введите дату в формате YYYY-MM-DD", "");

 appdata = {
     budget : money,
     timedata : time
 };
 let st1 = prompt("Введите обязательную статью расходов в этом месяце", "0");
 let rs1 = prompt("Во сколько обойдется?", "0");
 let st2 = prompt("Введите обязательную статью расходов в этом месяце", "0");
 let rs2 = prompt("Во сколько обойдется?", "0");

 expenses = {
    st1: rs1,
    st2: rs2
 }

alert("Бюджет на 1 день составляет " + money/30);

 console.log("бюджет на месяц " + appdata.budget);
 console.log("дата " + appdata.timedata);

