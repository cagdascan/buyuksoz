Quotes = new Meteor.Collection('quotes');

if (Meteor.isServer) {
	Meteor.publish('quotes', function (route, authorId) {
		if (route === 'home')
			return Quotes.find({'coverQuote': true}, {limit: 10});
		else if (route === 'author')
			return Quotes.find({'pid': authorId}, {limit: 10});
	});
}