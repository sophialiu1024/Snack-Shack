const modal = document.querySelector('.pickup-modal');
const openButtons = document.querySelectorAll('[data-open-modal]');
const closeButton = document.querySelector('.close-modal');
const doneButton = document.querySelector('.modal-done');

openButtons.forEach((button) => button.addEventListener('click', () => modal.showModal()));
[closeButton, doneButton].forEach((button) => button.addEventListener('click', () => modal.close()));

modal.addEventListener('click', (event) => {
  if (event.target === modal) modal.close();
});

document.querySelectorAll('.details-button').forEach((button) => {
  button.addEventListener('click', () => {
    const details = document.getElementById(button.getAttribute('aria-controls'));
    const isOpen = button.getAttribute('aria-expanded') === 'true';
    button.setAttribute('aria-expanded', String(!isOpen));
    button.querySelector('span').textContent = isOpen ? '+' : '−';
    details.hidden = isOpen;
  });
});
