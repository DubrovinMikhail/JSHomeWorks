let xhr = new XMLHttpRequest();
const data = {};
const pollTitle = document.getElementById('poll__title');
const pollAnswers =document.getElementById('poll__answers');
xhr.addEventListener('readystatechange', () => {
  if (xhr.readyState === xhr.DONE) {
    response = JSON.parse(xhr.responseText);
    data.title = response.data.title;
    data.answers = response.data.answers;
    pollTitle.textContent = data.title;
    for (let answer of data.answers) {
      let answerButton = document.createElement('button');
      answerButton.className = 'poll__answer';
      answerButton.textContent = answer;
      answerButton.addEventListener('click', () => {
        alert('Спасибо ваш голос засчитан');
      });
      pollAnswers.append(answerButton);
    };
  };
});

xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/poll');
xhr.send();