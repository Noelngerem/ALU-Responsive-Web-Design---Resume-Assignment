document.getElementById('menu-toggle').addEventListener('click', () => {
  document.querySelector('.nav-links').classList.toggle('show');
});

document.querySelectorAll('.modal-btn').forEach((button, index) => {
  button.addEventListener('click', () => {
    const modals = document.querySelectorAll('.modal');
    if (modals[index]) {
      modals[index].style.display = 'flex';
    }
  });
});

document.querySelectorAll('.close').forEach(span => {
  span.addEventListener('click', () => {
    span.closest('.modal').style.display = 'none';
  });
});

window.addEventListener('click', e => {
  document.querySelectorAll('.modal').forEach(modal => {
    if (e.target === modal) {
      modal.style.display = 'none';
    }
  });
});

document.getElementById('contact-form').addEventListener('submit', function (e) {
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  if (!name || !email || !message) {
    alert('Please fill in all fields.');
    e.preventDefault();
  } else if (!email.includes('@')) {
    alert('Please enter a valid email.');
    e.preventDefault();
  }
});
