// Variables
const adviceId = document.getElementById('advice-id');
const advice = document.getElementById('advice');
const adviceButton = document.getElementById('random-btn');

const getAdvice = async () => {
  const response = await fetch('https://api.adviceslip.com/advice');
  try {
    const data = await response.json();
    adviceId.innerHTML = 'ADVICE #' + data.slip.id;
    advice.innerHTML = '"' + data.slip.advice + '"';
  } catch (error) {
    adviceId.innerHTML = 'Error'
    advice.innerHTML = error;
  }
}

window.onload = () => {
  getAdvice();
}

adviceButton.addEventListener('click', () => {
  getAdvice();
});