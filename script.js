let NUMROWS = 4;
let NUMCOLS = 4;
let NUMCELLS = NUMROWS * NUMCOLS;
let DIFFSCALE = 50;
let score = 0;

let DoTheThing = function(){

    startMenu();
    do{

        if(score >= 10){
            DIFFSCALE -= 5;
        }

    }while (score > -5);




};

let CreateTable = function() {

    // For Loop - used when you know how many times to loop something. 4 rows 4 cells

    // FOR (initialize control variable; state boolean expression; update control variable )

    let redColor = Math.floor(Math.random()*256);
    let greenColor = Math.floor(Math.random()*256);
    let blueColor = Math.floor(Math.random()*256);

    let regColor = " rgb(" + redColor + "," + greenColor +  "," + blueColor +")";
    let diffColor = " rgb(" + (redColor + DIFFSCALE) + "," + (greenColor + DIFFSCALE) +  "," + (blueColor + DIFFSCALE) +")";

    let randRow = Math.floor(Math.random()*NUMROWS) + 1;
    let randCols = Math.floor(Math.random()*NUMCOLS) + 1;

    let table = document.createElement("TABLE");

    for(let row = 1; row<= NUMROWS; row++){
        let tableRow = document.createElement("TR");
        table.appendChild(tableRow);

        for(let col = 1;  col <= NUMCOLS; col++){

            let cell = document.createElement("TD");
            cell.onclick = function(){winMenu(this)};
            cell.style.backgroundColor = regColor;


            if (row === randRow && col === randCols){
                cell.style.backgroundColor = diffColor;
                cell.id = "correctBox";
            }

            tableRow.appendChild(cell);

        }
    }

    let tableplace = document.getElementById("content");
    tableplace.innerHTML = "";
    tableplace.appendChild(table);

    let scoreRow = document.createElement("TR");
    let scoreRow2 = document.createElement("TR");
    let scoreRow3 = document.createElement("TR");
    let scoreCol = document.createElement("TD");
    let scoreCol2 = document.createElement("TD");
    let scoreCol3 = document.createElement("TD");
    scoreCol.classList.add("smallCell");
    scoreCol2.classList.add("smallCell");
    scoreCol3.classList.add("smallCell");
    scoreCol.innerText = "Player's Score";
    scoreCol2.innerText = score;
    scoreRow.appendChild(scoreCol);
    scoreRow2.appendChild(scoreCol2);
    scoreRow3.appendChild(scoreCol3);


    let scoreboard = document.createElement("TABLE");
    scoreboard.classList.add("aside");
    scoreboard.appendChild(scoreRow);
    scoreboard.appendChild(scoreRow2);
    scoreboard.appendChild(scoreRow3);
};

let winMenu = function(cell){
    if (cell.id === "correctBox"){
        document.getElementById("results").innerText = "found it";
        score++;
        if(score >= 10){
            score = 0;
            DIFFSCALE -=5;
        }
        if(DIFFSCALE <= 0){
            winMenu();
        }
        CreateTable()
    }else {
        document.getElementById("results").innerText = "not it";
        score--;
        if (score >= 10) {
            score = 0;
            DIFFSCALE = 50;
            startMenu();
        } else {
            CreateTable()
        }
    }
};

let startMenu = function () {

    let title = document.createElement("H1");
    title.innerText = "Color Chooser Game";

    let direction = document.createElement("P");
    direction.innerText = "Find the color that is different Point for correct guess Loss of point for incorrect guess 10 points to advance -5 points ends game; ";

    let begin = document.createElement("BUTTON");
    begin.value = "BEGIN";
    begin.onclick = CreateTable;

    let display = document.getElementById("content");
    display.appendChild(title);
    display.appendChild(direction);
    display.appendChild(begin);
};