/*-----------------------------------------------------------------------------------*/
/*	POSTS GRID
/*-----------------------------------------------------------------------------------*/ 
$(window).load(function() {
  var $container = $('.blog-grid').imagesLoaded(function() {
    $container.masonry({
      itemSelector: '.post',
      columnWidth: '.post-sizer',
      gutter: '.gutter-sizer',
      percentPosition: true
    });

    $container.css('visibility', 'visible');
  });
});
