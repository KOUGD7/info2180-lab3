window.addEventListener("load", addSquares);

//Exercise 1 - Layout the board 
function addSquares() {
    let boxes = document.querySelectorAll('#board div')

    boxes.forEach(element => {
        element.className = "square";
        addXO(element)
        addHover(element)
    });
    //console.log(boxes);
}

//Exercise 2 - Add an X or O to a square when clicked
function addXO(ele){
    ele.addEventListener("click", function() { 
        let xo = ele.textContent
        if (xo == "O" ){
            ele.textContent = "X";
            ele.classList.remove('O');
            ele.classList.add('X');
        }
        else{
            ele.textContent = "O";
            ele.classList.remove('X');
            ele.classList.add('O');
        }
        //console.log(ele.textContent)
        //console.log("Button clicked.");
        }); 
}

//Exercise 3 - Change the style when you move your mouse over a square
function addHover(ele){
    //when mouse over square
    ele.addEventListener("mouseover", function() {
        ele.classList.add('hover');
        });
    //when mouse leaves square
    ele.addEventListener("mouseout", function() {
        ele.classList.remove('hover');
        });
    
}