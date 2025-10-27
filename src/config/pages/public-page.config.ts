class PublicPage {
	HOME = "/";
	CATALOG = "/catalog";
	BASKET = "/basket";
	USER = "/user/dashboard";

	/// user-page

	ADDRESS = "/user/dashboard/address";
	FAVORITES = "/user/dashboard/favorites";
	ORDERS = "/user/dashboard/orders";
	PROFILE = "/user/dashboard/profile";

	/// mini-page

	RETURNS = "/mini-pages/returns";
	ABOUT = "/mini-pages/about";
	CORPORATE = "/mini-pages/corporate";
	DELIVERY = "/mini-pages/delivery";
	ADDRESSCONTACT = "/mini-pages/address-contact";
}

export const PAGE = new PublicPage();

class PrivatePage {

	private root = "/auth";

	LOGIN = this.root + "/login";
	REGISTER = this.root + "/register";

}

export const PAGE_AUTH = new PrivatePage();
