$(document).on('turbolinks:load',function(){
  function buildHTML(message){
    var content = message.content ? '${message.content}' : "";
    var img = message.image? '<img src= ${ message.image }>' :"";
    var html = `<div class="message" data-id="${message.id}">
                  <div class="message__detail">
                    <p class="message__detail__current-user-name">
                      ${message.user_name}
                    </p>
                    <p class="message__detail__date">
                      ${message.date}
                    </p>
                  </div>
                  <p class="message_body">
                    <div>
                      ${content}
                    </div>
                    ${img}
                  </p>
                </div>`
    rerturn html;
  }
  
 $('#new_message').on('submit',function(e){
    e.preventDfault();
    var formdata = new FormData(this);
    var url = (window.location.href);

    $ajax({
      url: url,
      type:'POST',
      data: message,
      dataType: 'json',
      processData: false,
      contentType: false,
    })

    .done(function(data){
      var html = buildHTML(data);
      $('.messages').append(html);
      $('#message_content').val('');
    })
  })
});