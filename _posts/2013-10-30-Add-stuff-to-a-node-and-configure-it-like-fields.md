---
layout: post
title: Add stuff to a node and configure it like fields
description: Add stuff to a node and configure it like fields
published: true
tags: [development, drupal, fields]
---

I recently found out Display Suite doesn't play nice with custom fields that are created via its API (preprocess, code, or block, etc) if they are placed in field groups.

I found a D7 native way to handle the task. Whether you use Display Suite or not, the following method would work much easily and safely.

* [hook_node_view](https://api.drupal.org/api/drupal/modules%21node%21node.api.php/function/hook_node_view/7)
* [hook_field_extra_fields](https://api.drupal.org/api/drupal/modules%21field%21field.api.php/function/hook_field_extra_fields/7)

Found at ComputerMinds: [Add stuff to a node and configure it like fields](http://www.computerminds.co.uk/drupal-code/add-stuff-node-and-configure-it-fields)

Sample:

