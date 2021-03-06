// ==UserScript==
// @match          http://www.fotosik.pl/pokaz_obrazek/pelny/*.html
// ==/UserScript==

$.register({
  rule: {
    host: /fotosik\.pl$/,
  },
  run: function () {
    'use strict';

    var i = $('a.noborder img');
    $.redirect(i.src);
  },
});

// ex: ts=2 sts=2 sw=2 et
// sublime: tab_size 2; translate_tabs_to_spaces true; detect_indentation false; use_tab_stops true;
// kate: space-indent on; indent-width 2;
