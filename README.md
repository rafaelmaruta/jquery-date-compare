jQuery Date Compare
======

Date Compare v0.1
jQuery Plugin to order a range of dates or validate if any date is greater than other
(c)2014 Rafael Maruta - rafaelmaruta@gmail.com - www.lotuscreative.com.br
Released under the MIT license

It only accepts dates at numerical format like DD/MM/YYYY, MM/YYYY, YYYY-MM-DD or YYYY-MM.

Accepts three parameters: type, arrayOrder and format.

Use type:'asArray' if you wanna an ordering array return or 'just2' if you just wanna compare two dates.
If the first date in the selector is greater than the second, it will return false. It will consider the DOM ordering.

Use arrayOrder:'ASC' if you wanna the array return to be at ascending order. The default value is 'DESC'.

Use format:'-' if you wanna the YYYY-MM-DD or YYYY-MM format. The default value is '/' DD/MM/YYYY or MM/YYYY.

Call examples:
alert($('#div1,#div2').dateCompare({type:'just2'}));
window.console.log($('#div1,#div2,#div3,#div4').dateCompare({arrayOrder:'ASC',format:'-'}));

Any sugestions please contact me.
