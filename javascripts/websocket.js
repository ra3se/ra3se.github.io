

const ws = new WebSocket('ws://' + location.hostname + ':3031');
const q3colors = ['black', '#ff0101', '#02e801', '#ffff01', '#015aff', '#00ecff', '#c601ff', 'white', 'black'];

function prettyName(name, defaultColor) {
  const colorMatch = /\^(\d{1})/g;
  const numColors = (name.match(colorMatch) && name.match(colorMatch).length) || 0;

  const result = name.replace(colorMatch, function(match, color) {
    return '<span style="color: '+ q3colors[color] +';">';
  });

  defaultColor = defaultColor || 'white';

  while (numColors > 0) {
    result += '</span>';
    numColors--;
  }

  return '<span style="color: ' + defaultColor + ';">' + result + '</span>';
}

document.addEventListener('DOMContentLoaded', function() {
  const serverLogList = document.getElementById("serverLogList");

  ws.onmessage = function(event) {
    if (!serverLogList) {
      return null;
    }

    const message = JSON.parse(event.data);

    if (document.getElementById(message.event + '_tmpl')) {
      const li = document.createElement('li');
      while (serverLogList.childNodes.length > 2) {
        serverLogList.removeChild(serverLogList.childNodes[0]);
      }

      for (const key in message.data) {
        if (message.data.hasOwnProperty(key)) {
          if (['player', 'killer', 'victim', 'message'].indexOf(key) > -1) {
            message.data[key] = prettyName(message.data[key], key === 'message' ? 'lime' : 'white');
          }

          if (['messageParts'].indexOf(key) > -1) {
            message.data.message = message.data.messageParts.reduce(function(result, part) {
              result += " " + prettyName(part);
            }, "");
          }
        }
      }

      li.innerHTML = tmpl(message.event + '_tmpl', message.data);
      serverLogList.appendChild(li);
    }
  }
});
