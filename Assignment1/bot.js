function newEntry() {


   //if the message from the user isn't empty then run
   var user_message;
   //var api = "https://lv8kpxz41f.execute-api.us-east-2.amazonaws.com/test/chatbot"

   var apigClient = apigClientFactory.newClient({
                      apiKey: ""
         });




    user_message = document.getElementById("chatbox").value;


    var body = { message : user_message};
    var params = {};
    var additionalParams = {};

    apigClient.chatbotPost(params,body,additionalParams)
    .then(function(res){
      console.log(res)
      $('#interaction').append($("<div id='bot_response'>"+res.data.message+"</div>"));
      document.getElementById("chatbox").value = "";
    }).catch( function(result){

    });

    // $.ajax({
    //       type: "POST",
    //       data :JSON.stringify(u_message),
    //       headers: { "x-api-key": "LfbnbGIoTn8FqUgYvhOHO2DRdxwjspMQ8LePMaqx" },
    //       url: api,
    //       dataType: 'json',
    //       contentType: "application/json"
    //   }).done(function (res) {
    //
    //
    //  });

   }

document.onkeypress = keyPress;
//if the key pressed is 'enter' runs the function newEntry()
function keyPress(e) {
  var x = e || window.event;
  var key = (x.keyCode || x.which);
  if (key == 13 || key == 3) {
    //runs this function when enter is pressed
    $('#interaction').append($("<div id='usr_msg'>"+document.getElementById("chatbox").value+"</div><div class='clear'></div>"));
    document.getElementById("chatbox").placeholder = "";
    newEntry();
  }
  if (key == 38) {
    console.log('hi')
      //document.getElementById("chatbox").value = lastUserMessage;
  }
}

function bot() {
  $('#interaction').append($("<div id='usr_msg'>"+document.getElementById("chatbox").value+"</div><div class='clear'></div>"));
  document.getElementById("chatbox").placeholder = "";
  newEntry();
}
