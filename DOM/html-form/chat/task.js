const chatWidget = document.querySelector('.chat-widget');
const input = document.getElementById('chat-widget__input');

chatWidget.addEventListener('click', () => {
  chatWidget.classList.add('chat-widget_active');
});

robotMessages = [
  'Добрый день!',
  'Добрый день! Досвидания!',
  'Ни чем не могу помочь',
  'С вами свяжется первый освободившийся(из мест лишения свободы) оператор',
];

input.addEventListener('keyup', event => {
  let text = input.value;
  let time = new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  if (event.key === 'Enter' && text != '') {
    let message = '<div  class="message"><div class="message__time">' + time + '</div><div class="message__text">' + text + '</div></div>';
    document.getElementById('chat-widget__messages').innerHTML += message;
    input.value = '';
    text = robotMessages[Math.floor(Math.random() * robotMessages.length)];
    time = new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
    message = `<div class="message message_client" ><div class="message__time">'${time}'</div><div class="message__text">'${text}'</div></div>`;
    document.getElementById('chat-widget__messages').innerHTML += message;
  };
});