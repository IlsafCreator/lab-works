'use strict';
class ChatUI {
  addMessage(messageTextArg, messageSender) {
    let messageText = messageTextArg;
    let messageHistory = document.querySelector('.message-history');

    if (messageText) {
      let newMessageWrapper = document.createElement('div'),
        newMessage = document.createElement('div'),
        newMessageAuthor = document.createElement('div'),
        newMessageText = document.createElement('div');

      newMessageWrapper.classList.add('message-history-block');
      newMessage.classList.add('message');
      newMessageAuthor.classList.add('message_author');
      newMessageText.classList.add('message_text');
      newMessageText.textContent = messageText;

      if (messageSender === 'user') {
        newMessageAuthor.textContent = 'Вы';
        newMessage.classList.add('message--mine');
      } else {
        newMessageAuthor.textContent = 'Собеседник';
      }
      newMessage.append(newMessageAuthor);
      newMessage.append(newMessageText);
      newMessageWrapper.append(newMessage);
      messageHistory.append(newMessageWrapper);
    }
  }
}

window.addEventListener('load', function () {
  const chat = new ChatUI();
  let sendButton = document.querySelector('.send-btn'),
    inputField = document.querySelector('.message-panel_text-field'),
    placeHolder = document.querySelector('.placeholder');
  inputField.addEventListener('input', function (event) {
    if (inputField.textContent !== '')
      placeHolder.style.display = 'none';
    else
      placeHolder.style.display = 'block';
  });
  sendButton.addEventListener('click', function (event) {
    if (inputField.textContent !== '') {
      chat.addMessage(inputField.textContent, 'user');
      inputField.textContent = '';
      placeHolder.style.display = 'block';
    }
  });
});