const container = document.querySelector("#container");


function cleanColor(){
    //changing all bg clors of small grids created.
    const divs = document.querySelectorAll('.square');
    //divs is now a node list, can't use forEach on none array object.
    //divs.forEach(element => element.style.backgroundColor='white');
    let arrayDivs = Array.from(divs)
    arrayDivs.forEach(element => element.style.backgroundColor = "white");
    
}


function clearContainer(){
    //remove all grids created
    while(container.firstChild){
        container.removeChild(container.firstChild);
    }
}

function makingSquare(row=16,column=16){
    clearContainer();
    for(i=0; i<row; i++){
    let div = document.createElement("div");
    div.setAttribute('class', "rowsquare");
    div.style.height = `${640/row}px`;
    
    for(z=0;z<column;z++){
        let sdiv = document.createElement('div');
        sdiv.setAttribute('class','square')
        sdiv.style.height = `${640/row}px`;
        sdiv.style.width = `${640/column}px`;
        div.appendChild(sdiv);
    }
    container.appendChild(div);
    }
    addHoverEffect();
}

function addHoverEffect(){
    const divs = document.querySelectorAll('.square');

    divs.forEach(element => {
        element.addEventListener('mouseover',()=>{
        element.style.backgroundColor='red';
        } )
    
    });
}
function addingOnclicks(){
    const clean = document.querySelector('#clear');
    const sgrid = document.querySelector('#sgrid');
    const mgrid = document.querySelector('#mgrid');
    const lgrid = document.querySelector('#lgrid');
    clean.addEventListener("click",cleanColor);
    sgrid.addEventListener("click",function(){makingSquare(16,16)});
    mgrid.addEventListener("click",function(){makingSquare(32,32)});
    lgrid.addEventListener("click",function(){makingSquare(64,64)});
}
makingSquare();
addingOnclicks();