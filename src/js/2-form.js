// console.log('Form');

let formData = { email: '', message: '' };

const formEl = document.querySelector('.feedback-form');

const keyInput = 'feedback-form-state';

formEl.addEventListener('input', formInput);

function formInput(event) {
  const name = event.target.name;
  const value = event.target.value;

  formData[name] = value;

  localStorage.setItem(keyInput, JSON.stringify(formData));
}

const inputEl = document.querySelector('input');
const textareaEl = document.querySelector('textarea');

formData = JSON.parse(localStorage.getItem(keyInput) || '');

inputEl.value = formData.email;
textareaEl.value = formData.message;

const btnEl = document.querySelector('button');

btnEl.addEventListener('click', hendlerClick);

function hendlerClick(event) {
  if (formData.email === '' || formData.message === '') {
    alert('Fill please all fields');
    return;
  }

  event.preventDefault();
  console.log(formData.email, formData.message);
  localStorage.removeItem(keyInput);

  inputEl.value = '';
  textareaEl.value = '';
}
