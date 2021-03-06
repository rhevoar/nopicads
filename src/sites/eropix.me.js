// ==UserScript==
// @match          http://eropix.me/view.php?filename=*
// @match          http://freakimage.com/view.php?filename=*
// @match          http://www.hostpic.org/view.php?filename=*
// ==/UserScript==

$.register({
  rule: {
    host: /^eropix\.me|freakimage\.com|www\.hostpic\.org$/,
    query: /filename=([^&]+)/,
  },
  run: function (m) {
    'use strict';

    $.redirect('/images/' + m.query[1]);
  },
});

// ex: ts=2 sts=2 sw=2 et
// sublime: tab_size 2; translate_tabs_to_spaces true; detect_indentation false; use_tab_stops true;
// kate: space-indent on; indent-width 2;
