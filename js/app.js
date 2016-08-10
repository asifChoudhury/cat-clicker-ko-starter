var cats = [
        {
            name: 'Whiskers',
            clickCount: 0,
            imgSource: 'img/cat1.jpg',
            nickname: 'Meow'
        },
        {
            name: 'Snowy',
            clickCount: 0,
            imgSource: 'img/cat2.jpg',
            nickname: 'MeowTwo'
        },
        {
            name: 'Thunder',
            clickCount: 0,
            imgSource: 'img/cat3.jpg',
            nickname: 'MeowThree'
        },
        {
            name: 'Theodore',
            clickCount: 0,
            imgSource: 'img/cat4.jpg',
            nickname: 'MeowFour'
        },
        {
            name: 'Tinklebel',
            clickCount: 0,
            imgSource: 'img/cat5.jpg',
            nickname: 'MeowFive'
        }];

var Cat = function(newCat) {
    this.name = ko.observable(newCat.name);
    this.clickCount = ko.observable(newCat.clickCount);
    this.imgSource = ko.observable(newCat.imgSource);

    this.title = ko.computed(function() {
        var title;
        var numOfClicks = this.clickCount();

        if(numOfClicks < 1) {
            title = 'Newborn';
        } else if(numOfClicks > 0 && numOfClicks < 3) {
            title = 'Infant';
        } else if(numOfClicks > 2 && numOfClicks < 5) {
            title = 'Toddler';
        } else if(numOfClicks > 4 && numOfClicks < 13) {
            title = 'Junior';
        } else if(numOfClicks > 12 && numOfClicks < 19) {
            title = 'Teenager';
        } else if(numOfClicks > 18 && numOfClicks < 25) {
            title = 'Young Adult';
        } else {
            title = 'Adult';
        }

        return title;
    }, this);
};

var ViewModel = function() {
    var self = this;
    this.catList = ko.observableArray([]);

    cats.forEach( function(catItem) {
        self.catList.push(new Cat(catItem));
    });

    this.currentCat = ko.observable(this.catList()[0]);

    this.incrementClickCounter = function() {
        self.currentCat().clickCount(self.currentCat().clickCount() + 1);
    };

    this.setCurrentCat = function(clickedCat) {
        self.currentCat(clickedCat);
    };
};

ko.applyBindings(new ViewModel());