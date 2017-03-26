//// output flickr feed
function flickrFeed(json) {
  $.each(json.items, function(i, item) {
    // console.log(this);

    // variables
    var parent = $('<article class="item ib" />'),
        authorCont = $('<header class="author" />'),
        imgCont = $('<div class="img-cont" />'),
        itmDtls = $('<div class="details" />'),
        authorPic = $('<div class="author-profile" />'),
        heartSvg = $('<svg class="heart" viewBox="0 0 32 29.6"><path d="M23.6,0c-3.4,0-6.3,2.7-7.6,5.6C14.7,2.7,11.8,0,8.4,0C3.8,0,0,3.8,0,8.4c0,9.4,9.5,11.9,16,21.2c6.1-9.3,16-12.1,16-21.2C32,3.8,28.2,0,23.6,0z"/></svg>');

    // author formatting
    var authorStart = item.author.replace('nobody@flickr.com ("', ''),
        author = authorStart.replace('")', '');

    // date formatting
    var dateTaken = new Date(item.date_taken),
        datePublished = new Date(item.published);

    // tags formatting
    var tags = item.tags.split(' ').join(', ');

    // create item elements
    authorCont.appendTo(parent).append(authorPic).append(author);
    authorPic.append(author.charAt([0]).toUpperCase());
    imgCont.appendTo(parent);
    $('<img>').attr('src', item.media.m).appendTo(imgCont);
    itmDtls.appendTo(parent);
    $('<h2 class="title" />').append(item.title).appendTo(itmDtls);
    $('<div class="date-taken ib"><span class="label">Taken:</span> </div>').append(dateTaken).appendTo(itmDtls);
    $('<div class="date-published ib"><span class="label">Published:</span> </div>').append(datePublished).appendTo(itmDtls);
    $('<div class="tags" />').append(tags).appendTo(itmDtls);
    $('<div class="controls cf" />').appendTo(itmDtls).append($('<div class="fav-btn" />').append(heartSvg));
    parent.appendTo('.flickr-feed');
  });
};





//// favourites
$(function() {
  // // get favourites from local storage or empty array
  // var favourites = JSON.parse(localStorage.getItem('favourites')) || [];
  //
  // // clear favourites button
  // $('.clear-favs-btn').click(function(e){
  //   e.preventDefault();
  //   // favourites.splice();
  //   favourites = [];
  //   $('.item').removeClass('fav');
  // });
  //
  // // add class 'fav' to each favourite
  // favourites.forEach(function(favourite) {
  //   // document.getElementById(favourite).className = 'fav';
  // });
  //
  // // register click event listener
  // $('.fav-btn').each(function(){
  //   $(this).click(function(e){
  //     var favItem = $(this).closest('.item'),
  //         favItemImg = favItem.find('.img-cont img').attr('src'),
  //         // item = e.target,
  //         favList = favourites.indexOf(favItemImg);
  //
  //     // item is not favourite
  //     if (favList == -1) {
  //               // item.className = 'fav';
  //       favourites.push(favItemImg);
  //       favItem.addClass('fav');
  //
  //     // item is already favourite
  //     } else {
  //               // item.className = '';
  //       favourites.splice(favList, 1);
  //       favItem.removeClass('fav');
  //     }
  //     // store array in local storage, local storage stores strings so we use JSON to stringify for storage and parse to get out of storage
  //     localStorage.setItem('favourites', JSON.stringify(favourites));
  //   });
  // });



  // fav button
  $('.fav-btn').each(function(){
    $(this).click(function(e){
      var favItem = $(this).closest('.item'),
          favItemImg = favItem.find('.img-cont img').attr('src');
      // item is not favourite
      if (!favItem.hasClass('fav')) {
        favItem.addClass('fav');
      // item is already favourite
      } else {
        favItem.removeClass('fav');
      }
    });
  });

  // only display favourites
  $('.favs-only').click(function(e) {
    e.preventDefault();
    $(this).hide();
    $('.show-all').css('display', 'inline-block');
    if (!$('.no-results').length) {
      if (!$('.fav').length) {
        $('.item').hide();
        $('.flickr-feed').append($('<div class="no-results">Sorry, no favourites 😩<br>Why not favourite some items?</div>'));
      } else {
        $('.flickr-feed').find('.item').each(function() {
          if (!$(this).hasClass('fav')) {
            $(this).hide();
          }
        });
      }
    }
  });

  // show all items
  $('.show-all').click(function(e) {
    $(this).hide();
    $('.favs-only').css('display', 'inline-block');
    $('.item').css('display', 'inline-block');
    $('.no-results').remove();
  });

  // clear favourites
  $('.clear-favs-btn').click(function(e){
    e.preventDefault();
    $('.item').removeClass('fav');
  });
});
