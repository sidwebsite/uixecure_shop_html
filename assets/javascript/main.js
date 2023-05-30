(function(){
    // navbar javascript
    const bars = document.querySelector('.bars');
    const menu = document.querySelector('.menu');
    bars.addEventListener('click', (e) => {
        // console.log(e.target.classList)
        if(e.target.classList[1] === 'fa-bars') {
            menu.classList.add('menu-show');
            bars.querySelector('i').classList.remove('fa-bars');
            bars.querySelector('i').classList.add('fa-xmark');
        } else {
            menu.classList.remove('menu-show');
            bars.querySelector('i').classList.add('fa-bars');
            bars.querySelector('i').classList.remove('fa-xmark');
        }
    })
    // language phone show/hide
    const languagePhone = document.querySelector('.language-phone');
    const languageMenu = document.querySelector('.language-menu');
    languagePhone.addEventListener('click', () => {
        languageMenu.classList.toggle('active');
    })
    // language show/hide
    const language = document.querySelector('.language');
    language.addEventListener('click', (e) => {
        e.preventDefault(); 
        language.classList.remove('hide');
        language.classList.add('show');
    });
    document.body.addEventListener('click', (e) => {
        if(e.target.matches('.language') === false) {
            language.classList.remove('show');
            language.classList.add('hide');
        }
    });
    // add or remove active class
    const languageDropdownLi = document.querySelectorAll('.language + ul.dropdown li');
    languageDropdownLi.forEach((li, index) => {        
        li.addEventListener('click', () => {        
            li.classList.add('active');
            removeActive(index);
        });
    })
    // remove active 
    function removeActive(index1) {
        languageDropdownLi.forEach((item, index2) => {
            if(index1 !== index2) {
                item.classList.remove('active');
            }
        })
    }
    
})();