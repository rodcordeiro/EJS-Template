let items = 3
let letter = "A"

function renderItem(letter,num){
    let item = document.createElement('div')
    item.setAttribute("class","item")
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
    let x;
    if (number){
        x = number;
        console.log(number)
    } else {
        x = 1;
        console.log("number")
    
    }
    let i = document.querySelector("input[type=text]").value || '3'
    let container = document.querySelector("#item-container");
    container.innerHTML = ''
    let j = 1
    while (x <= i && j <= 3){
        console.log(renderItem(letter,x))
        container.appendChild(renderItem(letter,x))        
        j++;
        x++;
    }
    if(x < i){
        let next = document.querySelector('.next')
        next.setAttribute("data-value",x + 1)
    }
    if(x > j){
        let prev = document.querySelector('.prev')
        prev.setAttribute("data-value",x - 3)
    }
}
function nextPage(){
    let button = parseInt(document.querySelector('.next').getAttribute('data-value'))
    console.log(button)
    render(button)
}
function previousPage(){
    let button = parseInt(document.querySelector('.prev').getAttribute('data-value'))
    console.log(button)
    render(button)
}

render()