$(document).ready(function () {
		$('body').on('click', '.search__submit', function () {
			$('.search__text').addClass('show-input');
			$('.header__links').addClass('hide-links');
		});

});

