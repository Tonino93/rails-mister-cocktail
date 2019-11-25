const initFormToggler = () => {
  const button = document.getElementById('form_toggle');
  const form = document.querySelector('.form-content');

  if (button) {
    button.addEventListener('click', (event) => {
      form.classList.toggle('visible');

      if (form.classList.contains('visible')) {
        button.innerText = "Close form";
      } else {
        button.innerText = "Add a review";
      }
    })
  }
}

export { initFormToggler };
