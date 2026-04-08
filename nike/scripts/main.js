import HeaderFixed from './header.js'
import BurgerMenu from './burgerButton.js'

try {
	const headerFixed = new HeaderFixed({
		HEADER: 'header',
		HEADER_FIXED: 'header--fixed',
	})

	new BurgerMenu(
		{
			BURGER: 'burger-button',
			BURGER_OPEN: 'burger-button--open',
			HEADER_MENU: 'header__menu',
			HEADER_MENU_OPEN: 'header__menu--open',
			lABEL: {
				OPEN: 'Открыть меню',
				CLOSE: 'Закрыть меню',
			},
			PAGE_BODY: 'page__body',
			PAGE_BODY_NO_SCROLL: 'page__body--locked',
			MENU_LINK: 'menu__link',
			BREAKPOINT: 767,
		},
		headerFixed
	)
} catch (error) {
	console.error(error)
}
