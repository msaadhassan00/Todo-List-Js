let inputField = document.getElementById('inputField');
let btn = document.getElementById('btn');
let get = document.getElementById('get');

console.log(inputField,btn,get);

btn.addEventListener("click",()=>{
    var para = document.createElement('p');
    para.innerText=inputField.value;
    get.appendChild(para);
    inputField.value="";
    para.addEventListener("click",()=>{
        para.style.textDecoration="line-through";
        para.style.cursor="pointer";
        para.addEventListener("dblclick",()=>{
            para.innerText="";
        })
    })
})