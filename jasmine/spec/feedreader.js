$(function() {
    // This test suite is about the RSS feeds 
    // definitions, the allFeeds variable in the application.
    describe('RSS Feeds', function() {
        // Tests to make sure that the allFeeds variable has been defined 
        // and that it is not empty.
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        // Ensures each feed in the allFeeds object has a URL defined
        // and that the URL is not empty.
        it('have URL', function() {
            allFeeds.forEach(function(feed) {
                expect(feed.url).toBeDefined();
                expect(feed.url).not.toBe('');
            });
        });

        // Ensures each feed in the allFeeds object has a name defined
        // and that the name is not empty.
        it('have name', function() {
            allFeeds.forEach(function(feed) {
                expect(feed.name).toBeDefined();
                expect(feed.name).not.toBe('');
            });
        });
    });

    
    // 'The menu' test suite.
    describe('The menu', function() {

        var body = $('body');
        var menuIconLink = $('.menu-icon-link');

        // Ensures the menu element is hidden by default.
        it('is hidden by default', function () {
            expect(body.hasClass('menu-hidden')).toBe(true);
        });

        // Ensures the menu changes visibility when the menu icon is clicked.
        it('changes visibility when the menu icon is clicked', function () {
            menuIconLink.trigger('click');
            expect(body.hasClass('menu-hidden')).not.toBe(true);
            menuIconLink.trigger('click');
            expect(body.hasClass('menu-hidden')).toBe(true);
        });
    });

    // "Initial Entries" test suite.
    describe('Initial Entries', function() {
        // Loads the feed before testing the presence of .entry element
        beforeEach(function(done) {
            loadFeed(0, done);
        });

        // Ensures when the loadFeed function is called and completes its 
        // work, there is at least a single .entry element within the .feed 
        // container.
        it('leaves a single .entry element within the .feed container', function () {    
            expect($('.feed').find('.entry').length).toBeGreaterThan(0);  
        });
    });

    // "New Feed Selection" test suite.
    describe('New Feed Selection', function() {
        var feed = $('.feed');
        var feed0;
        var feed1;

        beforeEach(function(done) {
            // Loads the feed and assigns the content of first feed to initialHtml
            // before testing the change of content after loading. 
            loadFeed(0, function() {
                //Assigns to variable initial feed's html
                feed0 = feed.html();
                //Reloads feed 
                loadFeed(1, function() {
                    //Assigns to variable feed's html after reloading
                    feed1 = feed.html();
                    done();
                });
            });
        });

        // Ensures when a new feed is loaded that the content changes.
        it('ensures to change content when a new feed is loaded', function() {
                expect(feed1).not.toEqual(feed0);  
        });
    });
}());

