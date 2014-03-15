Router.map(function () {

	// home route
	this.route('home', {
		path: '/',
		template: 'home',
		layoutTemplate: 'main',
		yieldTemplates: {
			'header': {to: 'header'}
		},
		waitOn: function () {
			Meteor.subscribe('quotes', 'home');
		},
		data: {
			quotes: function () {
				return Quotes.find();
			}
		}
	});

	this.route('author', {
		path: '/p/:paramOne/:optionalParam?',
		template: 'home',
		layoutTemplate: 'main',
		yieldTemplates: {
			'header': {to: 'header'}
		},
		before: function () {

			// set author's quote
			var authorQuote = this.params.optionalParam;
			if (authorQuote === undefined)
				Session.set('authorQuote', 0);
		 	else
				Session.set('authorQuote', parseInt(this.params.optionalParam));

			// set the main author
			Session.set('author', parseInt(this.params.paramOne));
		},
		waitOn: function () {
			Meteor.subscribe('quotes', 'author', Session.get('author'));
		},
		after: function () {
			window.scrollTo(0, 0);
		},
		data: {
			quotes: function () {
				return Quotes.find();
			}
		}
	});
});