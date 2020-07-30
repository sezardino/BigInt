export default class Differences {
  constructor(oldColumn, newColumnt, items) {
    this.oldColumn = document.querySelector(oldColumn);
    this.newColumn = document.querySelector(newColumnt);
    try {
      this.oldItems = this.oldColumn.querySelectorAll(items);
      this.newItems = this.newColumn.querySelectorAll(items);
    } catch(e) {}
    this.oldCount = 0;
    this.newCount = 0;
  }

  hideItems(arr) {
    arr.forEach((item) => {
      let hide = true;
      item.children.forEach((item) => {
        if(item.classList.contains('card__click')) {
          hide = false;
        }
      });
      if (hide) {
        item.style.display = 'none';
      }
    });
  }

  bindTrigger(item, counter, arr) {
    item.querySelector('.plus').addEventListener('click', function() {
      if (counter !== arr.length - 2) {
        arr[counter].style.display = 'flex';
        arr[counter].classList.add('animated', 'slideInLeft');
        arr[arr.length - 1].classList.add('animated', 'slideInDown');
        setTimeout(() => arr[arr.length - 1].classList.remove('slideInDown'), 1000);
        counter++;
      } else {
        arr[counter].style.display = 'flex';
        arr[arr.length - 1].style.display = 'none';
      }
    });
  }

  init() {
    try {
      this.hideItems(this.oldItems);
      this.hideItems(this.newItems);

      this.bindTrigger(this.oldColumn, this.oldCount, this.oldItems);
      this.bindTrigger(this.newColumn, this.newCount, this.newItems);
    } catch(e) {}
  }
}
