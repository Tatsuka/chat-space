$(document).on('turbolinks:load',function(){ 
 $(function() {
  var search_list = $(".user-search-result");
    function appendUser(user) {
      var html = ` <div class="chat-group-user clearfix">
                      <p class="chat-group-user__name">${user.name}</p>
                        <a class="user-search-add chat-group-user__btn chat-group-user__btn--add" data-user-id="${user.id}" data-user-name="${user.name}">追加</a>
                    </div>`
      $(".user-search-result").append(html);
    };
    function appendNoUser(fail_comment){
      var html = `<div class='.user-search-result'>${fail_comment}</div>`
      search_list.append(html);
    }

    $("#user-search-field").on("keyup", function() {
      var input = $("#user-search-field").val();
      $.ajax({
        type: 'GET',
        url: '/users',
        data: { keyword: input },
        dataType: 'json'
      })
      .done(function(users) {
        $(".user-search-result").empty();
        if (users.length !== 0) {
          users.forEach(function(user){
            appendUser(user);
          });
        }
        else {
          appendNoUser("一致するユーザはいません");
        }
      })
      .fail(function(){
        alert('通信に失敗しました');
      })
    });

    function clickHTML(user){
      var userId = user.attr("data-user-id");
      var html = `<div class='chat-group-user'>
                  <input name='group[user_ids][]' type='hidden' value='${userId}'>
                      <p class='chat-group-user__name'>${user.attr("data-user-name")}</p>
                   <div class='user-search-remove chat-group-user__btn chat-group-user__btn--remove js-remove-btn'>削除</div>
                  </div>`
      return html;
    };
    $(document).on("click",".user-search-add", function() {
      $input = $(this);
      var add_user_html = clickHTML($input);
      $("#search-users").append(add_user_html);
        $input.parent().remove();
    });
    
    $(document).on("click",".js-remove-btn", function() {
      $input = $(this);
      $input.parent().remove();
    });
  });
});