$(document).ready(function () {
  const showAlert = (text) => {
    $('#alert-content').html(text);
    $('.alert').fadeIn('slow');
    setTimeout(function () {
      $('.alert').hide();
    }, 3000);
  };

  $('#form-comment').submit(function () {
    event.preventDefault();
    const name = $('#name').val();
    const comment = $('#comment').val();

    //  console.log(comment);
    if (name !== '' && comment !== '') {
      const commentTemplate = `
         <div class="comment-body d-flex px-3 py-4 mb-4" style="width: 100%;">
            <div class="mr-4 comment-img" style="width: 10%;">
               <img class="rounded-circle" src="../img/default.png" alt="Profil comment">
            </div>
            <div style="width:100%;">
               <h5 class="h5">${name}</h5>
               <p class="font-weight-300">${comment}</p>
               <button class="btn btn-hover shadow-sm px-4"> <img class="mr-2" style="width: 20px;margin-top: -5px;" src="../mockup/reply.svg" alt="reply"> Reply</button>
            </div>
         </div>
        `;
      $('#comment-post').append(commentTemplate);
      // clear value input
      $('#name').val('');
      $('#comment').val('');
      $('#jml-comments').html(
        '0' + $('#comment-post').children().length + ' ' + 'comments'
      );
      showAlert(
        '<i class="far fa-check-circle text-success mr-2"></i> <p class="text-success m-0 py-3 d-inline-block">The comment has been inputed</p>'
      );
    } else {
      showAlert(
        '<i class="far fa-times-circle text-danger mr-2"></i> <p class="text-danger m-0 py-3 d-inline-block">The feilds Name and Comment is required!</p>'
      );
    }
  });
});
