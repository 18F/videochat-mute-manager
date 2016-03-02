var id = setInterval(function () {
  if ($("[title='Mute microphone']").hasClass("toolbar-button")) {
    $("[title='Mute microphone']").click();
    window.clearInterval(id);
  }
}, 100);

$(document).keydown(function (event) {
  if (event.which == 32  && $("[title='Unmute microphone']").hasClass("active")) {
    $("[title='Unmute microphone']").click();
  }
});

$(document).keyup(function (event) {
  if (event.which == 32) {
    $("[title='Mute microphone']").click();
  }
});

window.onbeforeunload = function () {
  if (!$("[title='Unmute microphone']").hasClass("active")) {
    $("[title='Unmute microphone']").click();
  }
};
