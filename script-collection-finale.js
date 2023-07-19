// TOP BTN //
var btn = $('#topbtn');

$(window).scroll(function() {
  if ($(window).scrollTop() > 500) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});


// TOGGLE DESCRIZIONE //
const description = document.querySelectorAll(".description");
description.forEach((desc) => {
  desc.addEventListener("click", () => {
    desc.classList.toggle("active");
  })
})
