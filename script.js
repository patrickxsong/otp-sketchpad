const container = document.querySelector('.container');


createGrid(16);

function createGrid(num) {
    for (let i = 0; i < num; i++) {
        let row = document.createElement("div");
            for (let j = 0; j < num; j++) {
                let item = document.createElement('div');
                row.appendChild(item).className = "cell";
            }
        container.appendChild(row).className = "row";
    };
};

function resetSketch() {
    container.textContent= "";
    let num = parseInt(prompt("Please enter the number (1-100) of squares per side you would like to start with: "));
    if (num <= 100) {
        createGrid(num);
    } else {
        prompt("Invalid num. Please try again");
    }
    createGrid(num);

    let cells = document.querySelectorAll(".cell");
    
    cells.forEach(cell => cell.addEventListener("mouseenter", function(e) {
        this.classList.add('sketched')
    }));
}

const cells = document.querySelectorAll(".cell");

cells.forEach(cell => cell.addEventListener("mouseenter", function(e) {
    this.classList.add('sketched')
}));


const button = document.querySelector("#reset");
button.addEventListener('click', function() {
    cells.forEach(cell => cell.classList.remove('sketched'));
});

button.addEventListener('click', resetSketch);
