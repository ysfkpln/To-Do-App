// Eleman Ekleme
const addForm = document.querySelector(".add");
const list = document.querySelector(".todos");

const generateTemplate = (todo) => {
    const html = `
    <li class="list-group-item d-flex justify-content-between align-items-center">
        <span>${todo}</span>
        <i class="far fa-trash-alt delete"></i>
    </li>
    `;
    list.innerHTML += html; 
};

addForm.addEventListener('submit', e =>{
    e.preventDefault();
    const todo = addForm.add.value.trim();  // trimEnd sondaki boslugu kaldirir.trimStart basdaki boslugu kaldirir.
    if(todo.length>0)
    {
        generateTemplate(todo)
        addForm.reset();
    };
});



// Eleman Silme

list.addEventListener("click",e=>{
    if(e.target.classList.contains("delete")){
        e.target.parentElement.remove();
    }
});



// Elemanlar icinde arama yapmak

const search = document.querySelector(".search input");
const filterTodos = (ans) =>{
    Array.from(list.children).filter(todo => !todo.textContent.toLowerCase().includes(ans)).forEach(todo => todo.classList.add("filtered"));
    Array.from(list.children).filter(todo => todo.textContent.toLowerCase().includes(ans)).forEach(todo => todo.classList.remove("filtered"));
};

search.addEventListener("keyup",()=>{
    const ans = search.value.trim().toLowerCase();
    filterTodos(ans)
    
});
