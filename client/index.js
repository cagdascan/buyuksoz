Template.home.helpers({
	mainPage: function () {
		if (Router.current().route.name === 'home')
			return true;
	}
});