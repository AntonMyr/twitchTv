$(document).ready(function() {
  const streams = ["hipstern", "ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas", "brunofin", "comster404"];


  streams.forEach(function(i) {

/*
$('.streams').append("<p class='five column''><a href='https://twitch.tv/" + i + "' target='_blank'>" + data.display_name + "</a> playing: <i class='small-grey'>" + data.game + "</i><i class='fa fa-check online u-pull-right' aria-hidden='true'></i></p>");
*/
    $.ajax({
      url:'https://wind-bow.gomix.me/twitch-api/channels/' + i,
      type: 'get',
      success: function(data){
        if (data.status != 404) {
          console.log(data);
          $.ajax({
            url:'https://wind-bow.gomix.me/twitch-api/streams/' + i,
            type: 'get',
            success: function(dataStreams){
              if (dataStreams.stream != null) {
                $('.streams').append("<p class='five column''><a href='https://twitch.tv/" + i + "' target='_blank'>" + dataStreams.stream.channel.display_name + "</a> streaming: <i class='small-grey'>" + dataStreams.stream.game + "</i><i class='fa fa-check online u-pull-right' aria-hidden='true'></i></p>");
              } else {
                $('.streams').append("<p class='five column''><a href='https://twitch.tv/" + i + "' target='_blank'>" + i + "</a> <i class='small-grey'>Offline</i><i class='fa fa-times offline u-pull-right' aria-hidden='true'></i></p>");
              }
            },
            error: function(err){

            }
          });
        } else if(data.status == 404) {
          console.log("Offline: " + data);
          $('.streams').append("<p class='five column''><a href='https://twitch.tv/" + i + "' target='_blank'>" + i + "</a> <i class='small-grey'>does not exist</i></p>");

        }


        },
      error: function(err){
        console.log('Error', err);
      }
    });
  });
});
