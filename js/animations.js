$(document).ready(function() {
  $('.tweet-actions').hide();
  $('.stats').hide();
  $('.reply').hide();
  $('.tweet-controls').hide();
  var tweetLength = $('.tweet-compose').val().length;
  var charCount = $('#char-count');
  var fav = $('.tweet-actions > ul :nth-child(3)');

  function newTweet(tweet) {
    $('#stream').prepend(function() {
      return '<div class="tweet"><div class="content"><img class="avatar" src="img/alagoon.jpg" /><strong class="fullname">Shurik Tweet</strong> <span class="username">@shuriktweet</span><p class="tweet-text">' + tweet + '</p>';
    });
  }

	$('.tweet').click(function() {
		$(this).find('.stats').show({duration: 400});
		$(this).find('.reply').show();
	});

	$('.tweet').hover(function() {
		$(this).find('.tweet-actions').show();
	}, function() {
		$(this).find('.tweet-actions').hide();
	});

	$('.tweet-compose').focus(function() {
		$('.tweet-controls').show();
		$(this).height($(this).height()*2);
	});


  $('.tweet-compose').keydown(function() {
    tweetLength = $('.tweet-compose').val().length;
    charCount.text(140 - tweetLength);
    if (tweetLength >= 130) {
      charCount.css('color', 'red');
    }
    if (tweetLength > 140) {
      charCount.text(0);
    }
  })
  $('.tweet-compose').keydown(function() {
    tweetLength = $('.tweet-compose').val().length;
    charCount.text(140 - tweetLength);
    if (tweetLength < 130) {
      charCount.css('color', 'inherit');
    }
   
  })
  $('#tweet-submit').on('click', function() {
    var tweet = $('.tweet-compose').val();
    if (tweet.length > 140) {
     var count = charCount;
     charCount.css('color', 'red')
     return;
    }
    $('.tweet-compose').val('Compose new tweet...');
    $('.tweet-compose').height(25);
    $('#tweet-controls').css("display", "none");
    newTweet(tweet);
  });

  fav.on('click', function() {
    var target = $('.num-favorites');
    var favorites = $(target).text();
    $(target).text(favorites += 1);

  })

  $('[data-toggle="tooltip"]').tooltip();

  $('.tweet').show('.action-favorite');

});
