export default class Form {
  constructor(page) {
    try {
      this.form = document.querySelector(`${page} .form`);
      this.btn = this.form.querySelector('.btn');
      this.path = 'assets/question.php';
    } catch(e) {}
  }

  async postData (data) {
    const response = await fetch(this.path, {
      method: 'Post',
      body: data
    });

    return await response.text();
  }

  cyrilicEnter() {
    const input = this.form.querySelector('input[type=email]');
    input.addEventListener('input', () => {
      let value = input.value.replace(/[а-яё]/i, '');
      input.value = value;
    });
  }

  phoneEnter() {
    const input = this.form.querySelector('input[name=phone]');
    input.addEventListener('input', () => {

      let value = input.value.replace(/[а-яё a-z]/i, '');
      input.value = value;

      input.setCustomValidity('');
      if(input.value[0] !== '+' || input.value[1] !== '1' && input.value !== '') {
        input.setCustomValidity('Please enter phone in format +1 (___) ___ ___');
      }
    });
  }

  onFormSubmit(evt) {
    this.form.addEventListener('submit', (evt) => {
      evt.preventDefault();
      const data = new FormData(this.form);
      this.btn.textContent = 'Loading';
      this.btn.style.backgroundColor = 'blue';

      this.postData(data)
        .then((res) => {
          console.log(res);
          this.btn.textContent = 'Done';
          this.btn.style.backgroundColor = 'green';
        }).catch(() => {
          this.btn.textContent = 'Error';
          this.btn.style.backgroundColor = 'red';
      })
        .finally(() => setTimeout(() => {
          this.btn.textContent = 'Send';
          this.btn.style.backgroundColor = '#000000';
      }, 3000));
      this.form.reset();
    });
  }

  init() {
    try {
      this.cyrilicEnter();

      try {
        this.phoneEnter();
      } catch(e) {}

      this.onFormSubmit();
    } catch(e) {}
  }
}
