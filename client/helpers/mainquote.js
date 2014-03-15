Template.mainQuote.helpers({

	// returns big quote
	mainQuote: function () {
		if (Router.current().route.name === 'home')
			return Quotes.findOne({},
				{limit: 1, skip: Session.get('skip'), sort: {_id: -1}});
		else if (Router.current().route.name === 'author')
			return Quotes.findOne({'pid': Session.get('author')},
				{limit: 1, skip: Session.get('authorQuote'), sort: {_id: -1}});
	},

	// checks if main page
	mainPage: function () {
		if (Router.current().route.name === 'home')
			return true;
	},

	// hide left arrow on first quote
	firstQuote: function () {
		return !Session.get('authorQuote');
	},

	// hide right arrow on last quote
	lastQuote: function () {
		var quoteCount = Quotes.find({'pid': Session.get('author')}).count();
		if (quoteCount - 1 <= Session.get('authorQuote'))
			return true;
	},

	// current main quotes id
	currentQuote: function () {
		if (Session.equals('authorQuote', 0))
			return 1;
		else
			return Session.get('authorQuote') + 1;
	},

	// total quote count of an author
	totalQuote: function () {
		return Quotes.find({'pid': Session.get('author')}).count();
	}
});

Template.mainQuote.events({
	'click, tap i.fa-angle-right': function () {
		Router.go('/p/' + Session.get('author') + '/' + (Session.get('authorQuote') + 1));
	},
	'click, tap i.fa-angle-left': function () {
		Router.go('/p/' + Session.get('author') + '/' + (Session.get('authorQuote') - 1));
	}
});