window.addEventListener("load", addSquares);

function addSquares() {
    let boxes = document.querySelectorAll('#board div')

    boxes.forEach(element => {
        element.className = "square";
    });

    console.log(boxes);
}