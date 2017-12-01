$(document).ready(function () {

	var nav_dropdown = '<li class="nav-dropdown"><div class="nav-dropdown-btn">еще</div><div class="nav-dropdown-container"><div class="nav-dropdown-list"></div></div></li>',
		menu_width = $('.nav').find('ul').width() - 44,
		all_menuItem_width = $('.nav').find('li').width(),
		hidden_nav_items = [],
		dropdown;

	// HEADER NAV MENU DROPDOWN

	(dropdown = {
		init: function () {
			this.checkMenuItems();
			this.creatDropdown();
			this.addToDropdown();
		},
		checkMenuItems: function () {
			$('.nav').find('li').each(function (i, t) {
				if (menu_width > all_menuItem_width) {
					all_menuItem_width += $(this).width();
				} else {
					hidden_nav_items.push($(this).html());
					$(this).hide();
				}
			});
		},
		creatDropdown: function () {
			$('.nav').find('ul').append(nav_dropdown);
		},
		addToDropdown: function () {
			jQuery.each(hidden_nav_items, function (i, t) {
				$('.nav-dropdown').find('.nav-dropdown-list').append('<div class="nav-dropdown-item">' + t + '</div>');
			});
		}
	}).init();


	// NAV MENU DROPDOWN OPEN

	$('body').on('click', '.nav-dropdown', function () {
		$('.nav-dropdown-container').toggleClass('show-nav_dropdown');
	});

	$(document).on("click", function (e) {
		if (!$(e.target).closest(".nav-dropdown-container").length && $('.nav-dropdown-container').hasClass("show-nav_dropdown") && !$(e.target).closest(".nav-dropdown").length) {
			$('.nav-dropdown-container').removeClass('show-nav_dropdown');
		}
	});




	// OPEN HEADER SEARCH


	$('body').on('click', '.search__submit', function () {
		$('.search__text').addClass('show-input');
		$('.header__links').addClass('hide-links');
	});




});

