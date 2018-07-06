var menu = document.getElementById('menu');
var x = document.getElementById('myTopnav');
menu.addEventListener('click', myFunc);
function myFunc() {
   if (x.className === 'topnav') {
      x.className += ' responsive';
   } else {
      x.className = 'topnav';
   }
}