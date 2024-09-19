const btn = document.querySelector('.add');
const list = document.querySelector('.list');
const input = document.querySelector('.text');



btn.addEventListener('click', () => {
    if (input.value === '') return;
    const li = document.createElement('li');
    li.innerHTML = input.value;
    list.appendChild(li);
    input.value = '';
    const span = document.createElement('span');
    span.innerHTML = '\u00d7';
    li.appendChild(span);
    datasaving()
})

list.addEventListener('click', (e)=>{
    if(e.target.tagName === 'SPAN'){
        e.target.parentElement.remove();
        datasaving()
        }
})

function datasaving(){
    localStorage.setItem("data", list.innerHTML);
}

function showlist(){
    list.innerHTML = localStorage.getItem("data") || '';
}

showlist();

