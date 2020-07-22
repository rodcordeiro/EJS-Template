let items = false
let letter = "A"

function renderItem(letter,num){
    let item = document.createElement('div')
    item.setAttribute("class","item")
    item.setAttribute("id",num)
    
    let group = document.createElement('div')
    group.setAttribute("class","group")
    
    let number = document.createElement('div')
    number.setAttribute("class","number")
    
    let span = document.createElement('span')
    let numText = document.createTextNode(num)
    span.appendChild(numText)
    number.appendChild(span)

    let paragraph = document.createElement('p')
    paragraph.setAttribute('class','text');
    let parText = document.createTextNode(`Item ${letter}${numText.textContent}`);
    paragraph.appendChild(parText)

    group.appendChild(number)
    group.appendChild(paragraph)
    item.appendChild(group)
    
    return(item)
}

function render(number){
    console.log("rendering")
    let x;
    if (number){
        x = number;
    } else {
        x = 1;    
    }
    let i = document.querySelector("input[type=text]").value
    document.querySelector("input[type=text]").classList.remove('warn')
    let container = document.querySelector("#item-container");
    container.innerHTML = ''
    let j = 1
    while (x <= i && j <= 3){
        container.appendChild(renderItem(letter,x))        
        j++;
        x++;
    }
}
function nextPage(){
    let container = document.querySelector('#item-container')
    let last = container.lastElementChild
    let i = document.querySelector("input[type=text]").value
    let value = parseInt(last.getAttribute('id'))
    if (value == i) return;
    render(value + 1)
}
function previousPage(){
    let container = document.querySelector('#item-container')
    let last = container.firstElementChild
    let value = parseInt(last.getAttribute('id'))
    if (value == 1) return;
    render(value - 3)
}

selectLetter.addEventListener("change",function(){
    var filtros = document.getElementById("selectLetter");
    var indice = this.selectedIndex; 
    let qtd = document.querySelector("input[type=text]")
    if(!qtd.value) warn(qtd)
    letter = filtros[indice].value
    render()
})

function warn(element){
    let classe = element.classList
    console.log(element,classe)
    if(!classe.contains("warn")) classe.add('warn');
}
