// ==UserScript==
// @match          http://www.imagehousing.com/image/*
// ==/UserScript==

$.register({
  rule: {
    host: /^www\.imagehousing\.com$/,
  },
  run: function () {
    'use strict';

    var i = $('td.text_item img');
    $.redirect(i.src);
  },
});

// ex: ts=2 sts=2 sw=2 et
// sublime: tab_size 2; translate_tabs_to_spaces true; detect_indentation false; use_tab_stops true;
// kate: space-indent on; indent-width 2;
