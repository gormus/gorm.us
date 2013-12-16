---
layout: post
title: On click event return false for once
description:
tags: [javascript, reference]
---


I was having problems with the primary navigation on touch devices, iPad landscape mode specifically. Because that was the only view any touch device would display the desktop version of the menu.

The problem was, clicking on the top level menu items would navigate to its href value immediately (well, of course); while expanding its dropdown menu items. So accessing those child items were not really easy. Had to be very quick to catch the item you want to click.. It wasn't realistic.

Basically, all I needed was eating the first click on the parent items, so that they could just display their content, but the second click would navigate to its href.

Then I found out about a great one-liner:

    $('.touch li.hasChilds > a').one("click", false);


`.touch` class name is added to HTML tag dynamically via the Modernizr.js so I can limit this functionality to touch enabled devices.

Rest, is very simple actually. **On click event return false for once.**

I hope this tip would be helpful on your projects as well.
