document.addEventListener('DOMContentLoaded', function() {
  const saveButton = document.querySelector('.button-remember');
  const dialog = document.getElementById('dialog-id');
  const closeButton = document.querySelector('.button-save');

  if (saveButton) {
    saveButton.addEventListener('click', function(event) {
      event.preventDefault(); 
      if (dialog) {
        dialog.showModal();
      }
    });
  }

  if (closeButton) {
    closeButton.addEventListener('click', function(event) {
      event.preventDefault(); 
      if (dialog) {
        dialog.close();
      }
    });
  }


  if (dialog) {
    dialog.addEventListener('click', function(event) {
      const dialogDimensions = dialog.getBoundingClientRect();
      if (
        event.clientX < dialogDimensions.left ||
        event.clientX > dialogDimensions.right ||
        event.clientY < dialogDimensions.top ||
        event.clientY > dialogDimensions.bottom
      ) {
        dialog.close();
      }
    });
  }
});