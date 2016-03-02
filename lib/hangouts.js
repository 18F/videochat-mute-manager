var jq = document.createElement('script');
jq.src = "https://code.jquery.com/jquery-1.12.0.min.js";
document.getElementsByTagName('head')[0].appendChild(jq);

var id = setInterval(function () {
  if ($("[aria-label='Mute microphone']").attr("aria-pressed") === "false") {
    $("[aria-label='Mute microphone']")[0].dispatchEvent(new MouseEvent('mousedown'));
    $("[aria-label='Mute microphone']")[0].dispatchEvent(new MouseEvent('mouseup'));
    $("[aria-label='Mute microphone']")[0].dispatchEvent(new MouseEvent('mouseout'));
    window.clearInterval(id);
  }
}, 100);

$(document).keydown(function (event) {
  if (event.which == 32  && ($("[aria-label='Unmute microphone']").attr("aria-pressed") === "true")) {
    $("[aria-label='Unmute microphone']")[0].dispatchEvent(new MouseEvent('mousedown'));
    $("[aria-label='Unmute microphone']")[0].dispatchEvent(new MouseEvent('mouseup'));
    $("[aria-label='Unmute microphone']")[0].dispatchEvent(new MouseEvent('mouseout'));
  }
});

$(document).keyup(function (event) {
  if (event.which == 32) {
    $("[aria-label='Mute microphone']")[0].dispatchEvent(new MouseEvent('mousedown'));
    $("[aria-label='Mute microphone']")[0].dispatchEvent(new MouseEvent('mouseup'));
    $("[aria-label='Mute microphone']")[0].dispatchEvent(new MouseEvent('mouseout'));
  }
});

window.onbeforeunload = function () {
  if ($("[aria-label='Unmute microphone']").attr("aria-pressed") === "true") {
    $("[aria-label='Unmute microphone']")[0].dispatchEvent(new MouseEvent('mousedown'));
    $("[aria-label='Unmute microphone']")[0].dispatchEvent(new MouseEvent('mouseup'));
    $("[aria-label='Unmute microphone']")[0].dispatchEvent(new MouseEvent('mouseout'));
  }
};
