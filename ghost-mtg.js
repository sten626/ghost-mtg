/* globals jQuery */
(function($) {
  'use strict';

  var DECK_LI_REGEX = /^(\d+)\s(.+)$/;
  var GATHERER_IMAGE_URL = 'http://gatherer.wizards.com/Handlers/Image.ashx' +
      '?type=card';
  var GATHERER_SEARCH_URL = 'http://gatherer.wizards.com/pages/search/' +
      'default.aspx';

  function cardNameToLink(cardName) {
    var param = 'name=' + encodeURIComponent('+["' + cardName + '"]');
    var cardLink = GATHERER_SEARCH_URL + '?' + param;
    var cardLinkTag = '<a href="' + cardLink + '" target="_blank">' + cardName + '</a>';

    return cardLinkTag;
  }

  if (!$) {
    console.log('jQuery missing. Exiting.');
    return;
  }

  $('.decklist li').each(function(index) {
    var li = $(this).html();
    var result = DECK_LI_REGEX.exec(li);
    var num = result[1];
    var cardName = result[2];
    var cardLinkTag = cardNameToLink(cardName);

    $(this).html(num + ' ' + cardLinkTag);
    $(this).attr('data-name', cardName);

    if (index === 0) {
      $('.decklist__image').append('<img src="' + GATHERER_IMAGE_URL +
          '&name=' + encodeURIComponent(cardName) + '">');
    }
  });

  $('card').each(function() {
    var cardName = $(this).html();
    $(this).html(cardNameToLink(cardName));
    var cardImageSrc = GATHERER_IMAGE_URL + '&name=' + encodeURIComponent(cardName);
    $(this).append('<img src="' + cardImageSrc + '">');
  });

  $('card').mouseover(function() {
    $(this).find('img').show();
  });

  $('card').mouseout(function() {
    $(this).find('img').hide();
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
