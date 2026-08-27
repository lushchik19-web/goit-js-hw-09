// console.log('Form');

let formData = { email: '', message: '' };

const formEl = document.querySelector('.feedback-form');

const keyInput = 'feedback-form-state';

const inputEl = document.querySelector('input');
const textareaEl = document.querySelector('textarea');

const storedFormData = localStorage.getItem(keyInput) || '';

if (storedFormData !== '') {
  formData = JSON.parse(storedFormData);
}

inputEl.value = formData.email;
textareaEl.value = formData.message;

formEl.addEventListener('input', formInput);

function formInput(event) {
  const name = event.target.name;
  const value = event.target.value;

  formData[name] = value;

  localStorage.setItem(keyInput, JSON.stringify(formData));
}

const formEL = document.querySelector('.feedback-form');

formEL.addEventListener('submit', hendlerClick);

function hendlerClick(event) {
  if (formData.email === '' || formData.message === '') {
    alert('Fill please all fields');
    return;
  }

  event.preventDefault();
  console.log(formData.email, formData.message);
  localStorage.removeItem(keyInput);

  formData = { email: '', message: '' };

  inputEl.value = '';
  textareaEl.value = '';
}
