function addingEventListener() {
  const input = document.getElementById('button');

  input.addEventListener('click', function() {
    alert('I was clicked!');
  });
}

function clickAlert() {
  alert('I was clicked!');
}

function addingEventListener() {
  const input = document.getElementById('button');

  input.addEventListener('click', clickAlert);
}
