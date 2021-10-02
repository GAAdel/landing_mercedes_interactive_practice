const form = document.querySelector('.form-test-drive');   // получим форму

// https://jsonplaceholder.typicode.com

form.addEventListener('submit', (event) => {         // вешаем обработчик submit (стандартный для формы)
  event.preventDefault();                            // стандртное поведение браузера при событии submit отправка запроса и перезагрузка // отменяем стандартное поведение будем юзать ajax
                   
  let data = {};

  for(let elem of form.elements) {
    if(elem.name) {
      data[elem.name] = elem.value;
    }
  }

  fetch('https://jsonplaceholder.typicode.com/posts', {
    //method: 'GET'   по умолчанию данный метод юзается
    method: 'POST',
    body: JSON.stringify(data),
  })
    .then(response => {  // fetch делает запрос на эндпоинт // then отработает тогда, когда данные полностью дойдут
      if(response.status === 200 || response.status === 201) {  // 200ый статуст = при успешном get запросе| 201 при успешном post
        return response.json();
      } else {                                 // обрабатываем ошибочные статусы
        throw new Error(response.status)       // выброси в консоль ошибку
      }
    })
    .then(data => {
      alert("Данные успешно сохранены!");
      form.reset();
    })
    .catch(error =>  {                     // перехватываем ошибку
      alert("Произошла ошибка, статус " + error.message);
    })    
})