$(function(){ 
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
  })
});