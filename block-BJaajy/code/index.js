let promise1 = new Promise((res, rej) => {
  setTimeout(() => {
    res('promise1 is resolved!');
  }, 1000);
}).then((value) => console.log(value));
let promise2 = new Promise((res, rej) => {
  setTimeout(() => {
    res('promise2 is resolved!');
  }, 2000);
}).then((value) => console.log(value));
let promise3 = new Promise((res, rej) => {
  setTimeout(() => {
    res('promise3 is resolved!');
  }, 3000);
}).then((value) => console.log(value));
let promise4 = new Promise((res, rej) => {
  setTimeout(() => {
    res('promise4 is resolved!');
  }, 4000);
}).then((value) => console.log(value));
let all = Promise.all([promise1, promise2, promise3, promise4]);
