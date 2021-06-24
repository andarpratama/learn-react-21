$('.alert').hide();
$(document).ready(function () {
  // jika pick klik, tampilkan tab-item sesuai class
  $('.pick').click(function () {
    const dataPick = $(this).attr('data-pick');
    if (dataPick == 'all') {
      $('.tab-item').fadeIn('1000');
    } else {
      $('.tab-item')
        .not('.' + dataPick)
        .fadeOut('1000');
      $('.tab-item')
        .filter('.' + dataPick)
        .fadeIn('1000');
    }

    $('.pick').removeClass('active');
    $(this).addClass('active');
  });

  // fixed nav when scroll down

  $(document).scroll(function () {
    let nav = $('.fixed-top');
    nav.toggleClass('scrolled', $(this).scrollTop() > nav.height() + 100);
  });

  const showAlert = () => {
    setTimeout(function () {
      $('.alert').fadeIn('slow');
    }, 2000);
    setTimeout(function () {
      $('.alert').hide();
    }, 8000);
  };

  $('.close').click(function () {
    let parentClose = $(this).parent();
    parentClose.remove();
  });

  if (
    window.location.pathname == '/' ||
    window.location.pathname == '/index.html'
  ) {
    showAlert();
  }

  // gallery filter in index.html
  $('.list-filter').click(function () {
    event.preventDefault();
    const valueFilter = $(this).attr('data-filter');
    if (valueFilter == 'all') {
      $('.item-filter').fadeIn('1500');
    } else {
      $('.item-filter')
        .not('.' + valueFilter)
        .fadeOut('1000');
      $('.item-filter')
        .filter('.' + valueFilter)
        .fadeIn('1500');
    }

    $(this).addClass('active').siblings().removeClass('active');
  });

  // end
});
