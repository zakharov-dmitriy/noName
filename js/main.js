$(function () {


});
document.querySelector('.burger__btn').addEventListener('click', function () {
   document.querySelector('.header-menu__list').classList.toggle('menu--active');
   document.querySelector('.btn-line').classList.toggle('btn-line--active');
   document.querySelector('body').classList.toggle('lock');
});

// document.querySelector('.burger__btn').onclick = function () {
//    document.querySelector('.btn-line').classList.toggle('btn-line--active');
// }