const likeHeartArray = document.querySelectorAll('.like-icon');
const likeButtonArray = document.querySelectorAll('.card__like-button');
const iconButtonArray = document.querySelectorAll('.card__icon-button');

iconButtonArray.forEach((iconButton, index) => {
  iconButton.addEventListener('click', () => {
    toggleIsLiked(likeHeartArray[index], likeButtonArray[index]);
  });
});

likeButtonArray.forEach((button, index) => {
  button.addEventListener('click', () => {
    toggleIsLiked(likeHeartArray[index], button);
  });
});

function toggleIsLiked(heart, button) {
  heart.classList.toggle('is-liked');
  setButtonText(heart, button);
}

function setButtonText(heart, button) {
  const text = heart.classList.contains('is-liked') ? 'Unlike' : 'Like';
  button.querySelector('.button__text').textContent = text;
}

const saveButton = document.querySelector('.button-remember');
const dialog = document.querySelector('#dialog-id');
const dialogClose = dialog.querySelector('.button-save');

saveButton.addEventListener('click', (e) => {
  e.preventDefault();
  dialog.showModal();
});

dialogClose.addEventListener('click', () => {
  dialog.close();
});
