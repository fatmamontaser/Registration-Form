let title = document.querySelector('.title')
let getName = JSON.parse(localStorage.getItem('Users'));

let x = getName.name


title.innerHTML =` Welecome ${x}`