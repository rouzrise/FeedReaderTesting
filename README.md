# Project Overview

The project shows example of existing code coverage by **Jasmine** tests.
Given a web-based application that reads RSS feeds - the test suits were created to make sure future feature development doesn't break existing features.

## How to run the appllication?

To run the application you should open *index.html* in your browser. Under the main content on the page you will see the list of all tests and the result of their passing. You can run either all tests at once or any particular test separately by clicking on related links. 

## The tests applied

1. Tests checking that feeds in the `allFeeds` object: 
1.1 are defined;
1.2 have URL;
1.3 have name.

2. Tests checking that Menu element: 
2.1 is hidden by default;
2.2 changes visibility when the menu icon is clicked.

3. Test checking that when the `loadFeed` function is called and completes its work, there is at least a single `.entry` element within the `.feed` container.

4. Test that ensures when a new feed is loaded by the `loadFeed` function that the content actually changes.
