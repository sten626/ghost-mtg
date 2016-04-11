/* globals jQuery */
(function($) {
  'use strict';

  var DECK_LI_REGEX = /^(\d+)\s(.+)$/;
  var GATHERER_IMAGE_URL = 'http://gatherer.wizards.com/Handlers/Image.ashx' +
      '?type=card';
  var GATHERER_SEARCH_URL = 'http://gatherer.wizards.com/pages/search/' +
      'default.aspx';

  if (!$) {
    console.log('jQuery missing. Exiting.');
    return;
  }

  $('.decklist li').each(function(index) {
    var li = $(this).html();
    var result = DECK_LI_REGEX.exec(li);
    var num = result[1];
    var cardName = result[2];
    var param = 'name=' + encodeURIComponent('+["' + cardName + '"]');
    var cardLink = GATHERER_SEARCH_URL + '?' + param;

    $(this).html(num + ' <a href="' + cardLink + '" target="_blank">' +
        cardName + '</a>');
    $(this).attr('data-name', cardName);

    if (index === 0) {
      $('.decklist__image').append('<img src="' + GATHERER_IMAGE_URL +
          '&name=' + encodeURIComponent(cardName) + '">');
    }
  });

  $('.decklist li').mouseover(function() {
    var name = $(this).attr('data-name');
    var src = GATHERER_IMAGE_URL + '&name=' + encodeURIComponent(name);

    $('.decklist__image img').attr('src', src);
  });

  $('.decklist li').on('touchstart', function() {
    if (!$(this).attr('data-touched')) {
      $('.decklist li').removeAttr('data-touched');
      $(this).attr('data-touched', 'touched');
    }
  });

  $('.decklist a').click(function(event) {
    if ($(this).parent().attr('data-touched') === 'touched') {
      event.preventDefault();
      $(this).parent().attr('data-touched', 'hover');
    } else {
      $(this).parent().removeAttr('data-touched');
    }
  });
})(jQuery);
