---
layout: post
title: Better Development Practises
description: Better development practises on Pantheon and Acquia platforms
published: true
tags: [acquia, development, drupal, pantheon]
---

This is more like a reminder to all.

We are very fortunate using Pantheon and Acquia platforms.

In both systems backups can be scheduled, and can be manually triggered.

Especially in active development, please make sure to schedule backups as often as possible. If daily backups are not available do manual backups at least once, everyday, end of the day.

Also, another benefit of using these platforms is, they provide 3 server instances; DEV -> TEST -> LIVE. During heavy development this feature could be used as a backup too.

In certain milestones of the development, and/or before implementing a large feature to the website, push your DEV instance to TEST, and to LIVE when needed. Then try out your implementation in DEV. If the implementation is complete and works as desired, push it to the next instance; and continue working on DEV. Keep TEST (and LIVE) instances as stable as possible.

Please utilize these 3 instances as another method of a backup of the website you are developing. You can always restore your DEV instance from TEST or LIVE, if anything goes sour in your DEV instance.

If you need any clarification, or help setting it up, please let me know. If you have other suggestions please share.
