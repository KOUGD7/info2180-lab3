window.addEventListener("load", addSquares);

var squares = new Array(9);
for(var i = 0; i < squares.length; i++){
    squares[i] = -10; 
  }
//console.log(squares);


//Exercise 1 - Layout the board 
function addSquares() {
    let boxes = document.querySelectorAll('#board div')
    var count = 0;
    boxes.forEach(element => {
        element.className = "square";
        addXO(element, count)
        addHover(element)
        count = count + 1;
    });
    //console.log(boxes);
}

//Exercise 2 - Add an X or O to a square when clicked
function addXO(ele, count){
    ele.addEventListener("click", function() { 
        let xo = ele.textContent
        if (xo == "O" ){
            ele.textContent = "X";
            ele.classList.remove('O');
            ele.classList.add('X');
            squares[count] = 1
            win()
        }
        else{
            ele.textContent = "O";
            ele.classList.remove('X');
            ele.classList.add('O');
            squares[count] = 0
            win()
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

//Exercise 4 - Check for the winner and update the status 
function win(){
    var wincheck = new Array();

    let row1 = arrSum(squares, 0, 3, 1);
    wincheck.push(row1)

    let row2 = arrSum(squares, 3, 6, 1);
    wincheck.push(row2)

    let row3 = arrSum(squares, 6, squares.length, 1);
    wincheck.push(row3)

    let col1 = arrSum(squares, 0, squares.length, 3);
    wincheck.push(col1)

    let col2 = arrSum(squares, 1, squares.length, 3);
    wincheck.push(col2)

    let col3 = arrSum(squares, 2, squares.length, 3);
    wincheck.push(col3)

    let dia1 = arrSum(squares, 0, squares.length, 4);
    wincheck.push(dia1)

    let dia2 = arrSum(squares, 0, squares.length-1, 2);
    wincheck.push(dia2)

    let owin = wincheck.filter(word => word == 0);
    let xwin = wincheck.filter(word => word == 3);

    //console.log(wincheck, owin.length, xwin.length);

    let stat = document.getElementById('status');

    if (owin.length > 0 && xwin.length == 0){
        //console.log("Congratulations! O is the Winner!")
        stat.textContent = "Congratulations! O is the Winner!";
        stat.classList.add('you-won');
    }

    else if (xwin.length > 0 && owin.length == 0){
        //console.log("Congratulations! X is the Winner!")
        stat.textContent = "Congratulations! X is the Winner!";
        stat.classList.add('you-won');
    }

    else{
        //stat.textContent = "Move your mouse over a square and click to play an X or an O.";
        //stat.classList.remove('you-won');
    }
}

//Array sum funtion to check for win
function arrSum (array, start, end, hops){
    sum = 0
    for(var i = start; i < end; i++){
        if ((i - start)%hops == 0){
            sum = sum + array[i];
        }
      }

    return sum
}
