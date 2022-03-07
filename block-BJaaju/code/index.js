let input = document.querySelector('input');

function handleInput(event) {
  if (event.keyCode === 13) {
    console.log(input.value);
  }
}
input.addEventListener('keydown', handleInput);
