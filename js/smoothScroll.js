const linksHead = document.querySelectorAll('.menu-list__link');
const mainScroll = document.querySelector('.main__scroll');
const newArray = [...linksHead, mainScroll];  // спред оператор объединили элементы массивов

newArray.forEach(link => {
  link.addEventListener('click', (event) => {
    event.preventDefault();                                   // убираем стандартное взаимодействие
    const ID = event.target.getAttribute('href').substr(1);    // получаем атрибут href ссылки через свойство attributes(getAttribute)
    document.getElementById(ID).scrollIntoView({            // находим нужный ID и прокручиваем
      behavior: 'smooth', 
      block: 'start'
    }); 
  })
})