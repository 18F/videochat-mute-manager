var id = setInterval(function () {
  if (!$("#button_mute_mic").hasClass("on")) {
    $("#button_mute_mic")[0].click();
    window.clearInterval(id);
  }
}, 100);

$(document).keydown(function (event) {
  if (event.which == 32  && $("#button_mute_mic").hasClass("on")) {
    $("#button_mute_mic")[0].click();
    console.log($("#button_mute_mic"));
  }
});

$(document).keyup(function (event) {
  if (event.which == 32) {
    $("#button_mute_mic")[0].click();
  }
});

window.onbeforeunload = function () {
  if (!$("#button_mute_mic").hasClass("on")) {
    $("#button_mute_mic")[0].click();
  }
};
