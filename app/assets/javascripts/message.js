$(document).on('turbolinks:load',function(){
  function buildHTML(message){
    var content = message.content ? `${message.content}` : "";
    var img = message.image? `<img src= ${ message.image }>` :"";
    var html = `<div class='message'>
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
    e.preventDefault();
    var message = new FormData(this);
    var url = $(this).attr('action');

    $.ajax({
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
      $('.messages').animate({ scrollTop: $('.messages')[0].scrollHeight });
      $("#new_message")[0].reset();
      

    })
    .fail(function(data){
      alert('エラーが発生したためメッセージは送信できませんでした。');
    })
    .always(function(data){
      $('.form__submit').prop('disabled', false);
    })
  })

  var reloadMessages = function () {
    if (window.location.href.match(/\/groups\/\d+\/messages/)){
      var last_message_id = $('.message:last').data("message-id");
      $.ajax({
        url: "api/messages",
        type: 'get',
        dataType: 'json',
        data: {last_id: last_message_id}
      })
      .done(function (messages) {
        var insertHTML = '';
        messages.forEach(function (message) {
          insertHTML = buildHTML(message); 
          $('.messages').append(insertHTML);
        })
        $('.messages').animate({scrollTop: $('.messages')[0].scrollHeight}, 'fast');
      })
      .fail(function () {
        alert('自動更新に失敗しました');
      });
    }
  };
  setInterval(reloadMessages, 5000);
  });

});