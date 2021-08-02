"use strict";

console.log('Hello!');
$(document).ready(function () {
  console.log('HesSchool Hello!');
  $('.dropdown').click(function (e) {
    e.preventDefault();
    $(this).toggleClass('active');
    $(this).parent().siblings().find('.dropdown').removeClass('active');
  });
});
//# sourceMappingURL=all.js.map
