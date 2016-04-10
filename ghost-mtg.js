/* globals jQuery */
(function($) {
  'use strict';

  var DECK_LI_REGEX = /^(\d+)\s(.+)$/;
  var GATHERER_SEARCH_URL = 'http://gatherer.wizards.com/pages/search/' +
      'default.aspx';

  if (!$) {
    console.log('jQuery missing. Exiting.');
    return;
  }

  $('.decklist li').each(function() {
    var li = $(this).html();
    var result = DECK_LI_REGEX.exec(li);
    var num = result[1];
    var cardName = result[2];
    var param = 'name=' + encodeURIComponent('+["' + cardName + '"]');
    var cardLink = GATHERER_SEARCH_URL + '?' + param;
    $(this).html(num + ' <a href="' + cardLink + '" target="_blank">' +
        cardName + '</a>');
  });
})(jQuery);
