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
            for (var i = 0; i < allFeeds.length; i++) { 
                expect(allFeeds[i].url).toBeDefined();
                expect(allFeeds[i].url).not.toBe('');
            };
        });

        // Ensures each feed in the allFeeds object has a name defined
        // and that the name is not empty.
        it('have name', function() {
            for (var i = 0; i < allFeeds.length; i++) { 
                expect(allFeeds[i].name).toBeDefined();
                expect(allFeeds[i].name).not.toBe('');
            };
        });
    });

    
    // 'The menu' test suite.
    describe('The menu', function() {

        // Ensures the menu element is hidden by default.
        it('is hidden by default', function () {
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });

        // Ensures the menu changes visibility when the menu icon is clicked.
        it('changes visibility when the menu icon is clicked', function () {
            $('.menu-icon-link').trigger('click');
            expect($('body').hasClass('menu-hidden')).not.toBe(true);
            $('.menu-icon-link').trigger('click');
            expect($('body').hasClass('menu-hidden')).toBe(true);
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

        var initialHtml;

        beforeEach(function(done) {
            // Loads the feed and assigns the content of first feed to initialHtml
            // before testing the change of content after loading. 
            loadFeed(0, function() {
                initialHtml = $('.feed').html();
            });
             //Loads new feed 
            loadFeed(1, done);
        });

        // Ensures when a new feed is loaded that the content changes.
        it('ensures to change content when a new feed is loaded', function() {
                expect($('.feed').html()).not.toBe(initialHtml);  
        });
    });
}());
