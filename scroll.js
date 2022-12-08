window.addEventListener('scroll', () => {
	let scrollDistance = window.scrollY;

	if (window.innerWidth > 768) {
		
       document.querySelectorAll('.block').forEach((el, i) => {

			if (el.offsetTop  <= scrollDistance + 150) {

				document.querySelectorAll('.menu_right__ul>li>a').forEach((el) => {
					if (el.classList.contains('active')) {
						el.classList.remove('active');
					}
				});
				document.querySelectorAll('.menu_right__ul li')[i].querySelector('a').classList.add('active');
			}
		});
	}
});
