const menuToggle = document.querySelector('#menu-toggle');

const activeElements = document.querySelectorAll('.active-ele');

menuToggle.addEventListener('click', function () {
  for (let active = 0; active < activeElements.length; active++) {
    activeElements[active].classList.toggle('active');
  }

  const navBtn = menuToggle.childNodes[1];
  navBtn.classList.toggle('fa-times');

  const pageBg = document.querySelector('.main-con');

  if (navBtn.classList.contains('fa-times')) {
    pageBg.style.filter = 'blur(3px)';
  } else {
    setTimeout(function () {
      pageBg.style.filter = 'blur(0px)';
    }, 500);
  }

  const listIt = document.querySelectorAll('.main-nav-li a');

  listIt.forEach(function (item, index) {
    item.style.transition = `all 0.5s linear ${index * 0.3}s`;
  });
});
