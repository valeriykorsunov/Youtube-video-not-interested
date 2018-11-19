function push()
{
    var titlelist = document.querySelectorAll("div .style-scope.ytd-compact-autoplay-renderer");

    [].forEach.call(titlelist, function(el) {
        var title = el.textContent.trim();
        // Ищем Рекомендованные
        if(title == "Следующее"){
            var parentel = el.closest('div.style-scope.ytd-watch-next-secondary-results-renderer');
            addBTN(parentel,el);
        }
    });
}
//chrome.tabs.executeScript(null, {code:"alert(‘hello!’)"});


/* Удаляем элемент */
function removethis(el){
    // Хак на скрытие попапа, если вдруг пользователь открыл его ранее
    if (document.querySelector('ytd-popup-container iron-dropdown') && document.querySelector('ytd-popup-container iron-dropdown').style.display !== "none"){
        document.querySelector('ytd-popup-container iron-dropdown').style.display = "none";
    }
    var thisli = this.closest('ytd-compact-video-renderer');
    thisli.querySelector('button#button').click();
    removthisevent(thisli);
}
function removthisevent(thisli){
    // Проверяем открытый попап
    if (document.querySelector('ytd-popup-container iron-dropdown') && document.querySelector('ytd-popup-container iron-dropdown').style.display !== "none"){
        // Нажимаем "Скрыть"
        document.querySelector('ytd-popup-container ytd-menu-service-item-renderer').click();
        // Нажимаем "почему нам это не интересно"
        // Включаем "я не тормоз, подождите" для нового тормозного интерфейса
        setTimeout(function(){
            thisli.querySelector('#dismissed ytd-button-renderer:last-child #button').click();
            // Ожидаем очередной попап
            setTimeout(function(){
                var popup = document.querySelector('ytd-popup-container'),
                    form = document.querySelector('#reasons'),
                    inputs = form.querySelectorAll('ytd-dismissal-reason-text-renderer');
                // Чекаем нужные пункты
                // inputs[0].querySelector('paper-checkbox').click(); // Я смотрю его не первый раз.
                // inputs[1].querySelector('paper-checkbox').click(); // Мне оно не понравилось.
                inputs[2].querySelector('paper-checkbox').click(); // Мне не интересен канал...
                // Отправляем форму
                setTimeout(function(){
                    popup.querySelector('#submit').click();
                    //thisli.remove();                             // укрыть следы
                },200);
            },200);
        },500);
    }
    // Иначе перезапускаем функцию после паузы
    else {
        setTimeout(function(){
            removthisevent(thisli);
        },500); // Время задержки
    }
}

/* Добавляем кнопки удаления */
function addBTN(parentel,el){

    var list = el.closest('#related').querySelectorAll('ytd-compact-video-renderer');
    [].forEach.call(list, function(list_el) {
      //  if(!parentel.querySelector('.remthis')){
            console.log(list_el);
            var remthis = document.createElement('div');
            remthis.textContent = 'Удалить';
            remthis.onclick = removethis;
            remthis.className = "remthis";
            list_el.insertBefore(remthis, list_el.children[0]);
        //}
    });
};

/* Стили */
