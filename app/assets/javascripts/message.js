$(document).on('turbolinks:load',function(){
  function buildHTML(message){
    var content = message.content ? `${message.content}` : "";
    var img = message.image? `<img src= ${ message.image }>` :"";
    var html = `<div class='message'>
                  ${message.id}
                  <div class='messege__upper-info'>
                    <div class='messege__upper-info__talker'>
                      ${message.user_name}
                    </div>
                    <div class='messege__upper-info__date'>
                      ${message.date}
                    </div>
                </div>
                <div class='messege__text'>
                    <div class='messege__text__content'>
                      ${content}
                    </div>
                    <img class="lower-message__image">
                    ${img}
                </div>`
    return html;
  }
  
 $('#new_message').on('submit',function(e){
    e.preventDfault();
    // console.log(this)
    // debugger;
    var message = new FormData(this);
    var url = (window.location.href);

    $ajax({
      url: url,
      type:'POST',
      data: message,
      dataType: 'json',
      processData: false,
      contentType: false
    })

    .done(function(data){
      var html = buildHTML(data);
      $('.messages').append(html);
      $('#message_content').val('');

      function scrollBottom(){
        var target = $('.message').last();
        var position = target.offset().top + $('.messages').scrollTop();
        $('.messages').animate({
          scrollTop: position
        }, 300, 'swing');
      }
    })
    .fail(function(data){
      alert('エラーが発生したためメッセージは送信できませんでした。');
    })
    .always(function(data){
      $('.submit-btn').prop('disabled', false);
    })
  })
});