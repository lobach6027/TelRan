//Ex 2
//Задача querySelectorAll
//Поменяйте содержимое абзацев на их порядковый номер в коде.
//Используйте перебор, индексы и textContent

let paragraphs = document.querySelectorAll('.changeTitleOfParagraph p')
console.log(paragraphs)
function changeTitleOfParagraph(array){
    for (let i = 0; i < array.length; i++) {
       
        array[i].textContent = i+1;

        
    }
}
console.log(changeTitleOfParagraph(paragraphs))

//Ex 1
//Создать две кнопки - одна из них блокирует input с помощью атрибута disabled, а другая разблокирует.
// Заблокировать Разблокировать - 

let blockBtn = document.querySelector('.makeBlock');
let unblockBtn = document.querySelector('.makeUnblock');
let blockUnblockInput = document.querySelector('.blockUnblock');


blockBtn.addEventListener('click',inputDisabled);
unblockBtn.addEventListener('click',activeDisabled);

function inputDisabled(event){
    if(blockUnblockInput.hasAttribute('disabled')){
        blockUnblockInput.removeAttribute('disabled');
    }else{
        blockUnblockInput.setAttribute('disabled',true)
    }
}
function activeDisabled(event){
    blockUnblockInput.value = 'Please, wtite something...';
}