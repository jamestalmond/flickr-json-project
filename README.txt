Hi there!


This is a small text file detailing the choices made and difficulties found whilst creating this single page application.


The Single Page Application
===========================

- HTML5
- CSS3
- jQuery
- Supported in IE9+
- Fully responsive
- Works on mobile to desktop
- Includes some small, fun animations
- Outputs data from the Flickr API
- Allows the user to favourite items and view the favourited items
- Ability to clear the favourited items either per item or clear all items


Design choices
==============

I decided to keep my SPA simple and clean, utilizing a card design format to separate the content. I'm quite fond of Google's Material Design methodology.

I kept my favourite button as simple as possible with a small heart SVG, on click of the favourite button the item is favourited and becomes filterable.

I wanted to keep my SPA simple, I believe I've achieved that in the design.


Technology choices
==================

You'll notice I've used the jQuery library to create my SPA, the main reason for this is because I'm extremely familiar with jQuery as I use it on a daily basis in my current role. I find it extremely simple to use an manipulate DOM elements. I decided to keep using jQuery to focus more on the other aspects of the SPA I had troubles with, which have been detailed below.

I've used HTML5 and CSS3 within my SPA to keep the application semantic and modern.

I created the SPA with mobile devices firmly in mind designing from a mobile-first viewpoint, I used media queries to scale the item widths up as the viewport became larger. During testing I found that my SPA worked great on mobile, tablet and desktop, including my Father's old Windows laptop and in IE9.


Difficulties and challenges
===========================

The first difficulty I had was getting used to the Flickr API, I've never used it before so it took a little bit of experimenting to get working correctly but I got it outputting the information.

The main issue I had is getting the favourited items to remain favourited on page reload, I decided to attempt this using localStorage (https://developer.mozilla.org/en/docs/Web/API/Window/localStorage), which I've never used before. I've not attempted to store information on the client side before so this was a learning experience. I couldn't quite get the persistence functionality working in time for the deadline however I've left the code that I was working on commented out within script.js so you can see my progress.

Overall the project was a great learning experience, I'm glad I got assigned it!


Conclusion
==========

I'm happy with my SPA, with a little advice I could easily make it persist through page reload, I'm certain of it.

One thing I will say is that I enjoyed this project a lot, I'll continue attempting to get localStorage working after submitting this project as I'd love to learn how it all works. Any advice on this is appreciated!


Thanks,
James Thomas Almond ✌🏼
