(function($) {
  $.fn.topScroll =  function ( props ) {
    var defaultProps = {
      offset: 220,
      duration: 500
    };
    props = Object.assign(defaultProps, props);

    $(window).scroll(function () {
      (this.scrollTop() > props.offset) ? this.fadeIn(props.duration) : this.fadeOut(props.duration);
    });

    this.click(function (event) {
      event.preventDefault();
      $('html, body').animate({
        scrollTop: 0
      }, props.duration);
      return false;
    });
  };
})(jQuery);

