export const websocket = () => {
  const ws = new WebSocket('ws://' + location.hostname + ':3031');
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
            message.data.message = message.data.messageParts.reduce(function(_, part) {
              result += " " + prettyName(part);
            }, "");
          }
        }
      }

      li.innerHTML = tmpl(message.event + '_tmpl', message.data);
      serverLogList.appendChild(li);
    }
  }
}
