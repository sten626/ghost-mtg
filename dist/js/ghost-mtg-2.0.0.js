/* globals jQuery */
(function($) {
  'use strict';

  var DECK_LI_REGEX = /^(\d+)\s(.+)$/;
  var GATHERER_IMAGE_URL = '//gatherer.wizards.com/Handlers/Image.ashx?type=card';
  var GATHERER_SEARCH_URL = '//gatherer.wizards.com/pages/search/default.aspx';

  function cardNameToLink(cardName) {
    var param = 'name=' + encodeURIComponent('+["' + cardName + '"]');
    var cardLink = GATHERER_SEARCH_URL + '?' + param;
    var cardLinkTag = '<a href="' + cardLink + '" target="_blank">' + cardName + '</a>';

    return cardLinkTag;
  }

  if (!$) {
    throw 'jQuery missing. Exiting.';
  }

  var $decklist = $('decklist');

  var deckName = '';
  var deckAuthor = '';
  var headers = [];
  var sections = [];

  $decklist.find('p').each(function(index) {
    var header = $(this).text();

    if (index === 0) {
      if (header.toLowerCase() !== 'none') {
        deckName = header;
      }
    } else if (index === 1) {
      if (header.toLowerCase() !== 'none') {
        deckAuthor = header;
      }
    } else {
      headers.push(header);
    }
  });

  $decklist.find('ul').each(function() {
    var section = $(this).html();
    section = section.replace('<br>', '');
    section = section.replace(/(\r\n|\n|\r)/gm, '');
    sections.push(section);
  });

  if (headers.length !== sections.length) {
    throw 'Number of decklist headers differs from number of decklist sections.';
  }

  if (headers.length !== 4) {
    throw 'Locked in to 4 sections right now.';
  }

  // Convert what's in the <decklist> tag to the actual decklist.

  var $deckName = $('<p class="decklist__name">' + deckName + '</p>');
  var $deckAuthor = $('<p class="decklist__author">' + deckAuthor + '</p>');
  var $header = $('<header></header>');
  $header.append($deckName);
  $header.append($deckAuthor);

  var $firstList = $('<ul></ul>');
  $firstList.append('<li class="decklist__section-header">' + headers[0] + '</li>');
  $firstList.append(sections[0]);
  $firstList.append('<li class="decklist__section-header">' + headers[1] + '</li>');
  $firstList.append(sections[1]);

  var $firstColumn = $('<section class="decklist__column"></section>');
  $firstColumn.append($firstList);

  
  var $secondList = $('<ul></ul>');
  $secondList.append('<li class="decklist__section-header">' + headers[2] + '</li>');
  $secondList.append(sections[2]);

  var $sideboard = $('<ul class="decklist__sideboard"></ul>');
  $sideboard.append('<li class="decklist__section-header">' + headers[3] + '</li>');
  $sideboard.append(sections[3]);

  var $secondColumn = $('<section class="decklist__column"></section>');
  $secondColumn.append($secondList);
  $secondColumn.append($sideboard);

  var $decklistImage = $('<section class="decklist__image"></section>');

  var $main = $('<main></main>');
  $main.append($firstColumn);
  $main.append($secondColumn);
  $main.append('<div class="medium-view-cf"></div>');
  $main.append($decklistImage);

  var $figure = $('<figure class="decklist"></figure>');
  $figure.append($header);
  $figure.append($main);

  $decklist.html($figure);

  // Turn card names into links with hover functionality.

  var first = true;

  $decklist.find('li').each(function() {
    var li = $(this).html();
    var result = DECK_LI_REGEX.exec(li);

    if (!result) {
      // Probably a header, continue.
      return true;
    }

    var num = result[1];
    var cardName = result[2];
    var cardNameLinkTag = cardNameToLink(cardName);

    $(this).html(num + ' ' + cardNameLinkTag);
    $(this).attr('data-name', cardName);

    if (first) {
      $decklistImage.append('<img src="' + GATHERER_IMAGE_URL + '&name=' + encodeURIComponent(cardName) + '">');
      first = false;
    }
  });

  $decklist.find('li').mouseover(function() {
    var name = $(this).attr('data-name');
    var src = GATHERER_IMAGE_URL + '&name=' + encodeURIComponent(name);

    $('.decklist__image img').attr('src', src);
  });

  // Add on-hover card images to card tags.

  $('card').each(function() {
    var $card = $(this);
    var cardName = $card.html();
    $card.html(cardNameToLink(cardName));
    var cardImageSrc = GATHERER_IMAGE_URL + '&name=' + encodeURIComponent(cardName);
    $card.append('<img src="' + cardImageSrc + '">');
  });

  $('card').hover(function() {
    $(this).find('img').show();
  }, function() {
    $(this).find('img').hide();
  });
})(jQuery);
