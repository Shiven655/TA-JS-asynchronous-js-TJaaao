function fetch(url) {
  return new Promise((resolve, reject) => {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.onload = resolve(JSON.parse(xhr.response));
    xhr.onerror = reject('SOmething Went Wrong!');
    xhr.send();
  });
}
