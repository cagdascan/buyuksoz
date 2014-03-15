Meteor.startup(function () {
	if (Quotes.find().count() === 0){
		Quotes.insert({'pid': 1, 'author': 'Mustafa Kemal Atatürk', 'quote': 'Sanatsız kalan bir milletin hayat damarlarından biri kopmuş demektir.', 'coverQuote': true});
		Quotes.insert({'pid': 1, 'author': 'Mustafa Kemal Atatürk', 'quote': 'En büyük savaş cahilliğe karşı yapılan savaştır.'});
		Quotes.insert({'pid': 1, 'author': 'Mustafa Kemal Atatürk', 'quote': 'Tarih yazmak, tarih yapmak kadar mühimdir. Yazan, yapana sadık kalmazsa değişmeyen hakikat insanlığı şaşırtacak bir mahiyet alır.'});
		Quotes.insert({'pid': 1, 'author': 'Mustafa Kemal Atatürk', 'quote': 'Vatanını en çok seven, görevini en iyi yapandır.'});
		Quotes.insert({'pid': 1, 'author': 'Mustafa Kemal Atatürk', 'quote': 'Hayatta en hakiki mürşit ilimdir, fenndir. İlim ve fennin dışında mürşit aramak gaflettir, dalalettir.'});

		Quotes.insert({'pid': 2, 'author': 'Steve Jobs', 'quote': 'Cennete gitmek isteyenler bile oraya gitmek uğruna ölümü göze almak istemez.'});
		Quotes.insert({'pid': 2, 'author': 'Steve Jobs', 'quote': 'Küçük başlayın, büyük düşünün.', 'coverQuote': true});
		Quotes.insert({'pid': 2, 'author': 'Steve Jobs', 'quote': 'Dünyayı değiştirenler ancak bunu yapabileceklerini düşünecek kadar çılgın olan insanlardır.'});
		Quotes.insert({'pid': 2, 'author': 'Steve Jobs', 'quote': 'Bir gün öleceğimizi unutmamak, kaybedecek bir şeylerin olduğunu düşünme tuzağından kurtulabilmek için en gerçekçi yöntemdir.'});
		Quotes.insert({'pid': 2, 'author': 'Steve Jobs', 'quote': 'İnsanlar çoğunlukla siz onlara gösterene kadar ne istediklerini bilmiyorlar.'});

		Quotes.insert({'pid': 3, 'author': 'Albert Einstein', 'quote': 'Bu dünyada beni birkaç kişi anladı, onlar da yanlış anladı.', 'coverQuote': true});
		Quotes.insert({'pid': 4, 'author': 'Recep Tayyip Erdoğan', 'quote': 'Elhamdülillah şeriatçıyım.', 'coverQuote': true});
		Quotes.insert({'pid': 5, 'author': 'Sunay Akın', 'quote': 'İkimiz de aynı şeyi düşünüyoruz; Ben seni, Sen kendini.', 'coverQuote': true});
		Quotes.insert({'pid': 6, 'author': 'Oscar Wilde', 'quote': 'Yaşamak çok nadir rastlanan bir şeydir. Çoğu insan sadece var olur.', 'coverQuote': true});
		Quotes.insert({'pid': 7, 'author': 'Michel de Montaigne', 'quote': 'Dünyaya geldiğimiz gün bir yandan yaşamaya, bir yandan ölmeye başlarız.', 'coverQuote': true});
		Quotes.insert({'pid': 8, 'author': 'Stephen Hawking', 'quote': 'Biz sıradan ortalama bir yıldızı olan ufak bir gezegendeki gelişmiş maymun türleriyiz. Ancak evreni anlayabiliyoruz. İşte bu bizi çok özel kılıyor.', 'coverQuote': true});
		Quotes.insert({'pid': 9, 'author': 'John Lennon', 'quote': 'Eğer herkes başka bir televizyon seti yerine barış isteseydi, o zaman barış olurdu.', 'coverQuote': true});
		Quotes.insert({'pid': 10, 'author': 'Konfüçyüs', 'quote': 'Karanlığa söveceğine, bir mum yak.', 'coverQuote': true});
	}
})