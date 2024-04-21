let makeSymbol = 1;
let count =0;
// 1 for X
// 0 for O

function getId(id){
    let symbolCheck = document.getElementById(id).innerText;
    if(makeSymbol){
        if(symbolCheck!="X"&&symbolCheck!="O"){
        document.getElementById(id).innerText = "X";
        makeSymbol--;
        count++;
        }
    }
    else{
        if(symbolCheck!="X"&&symbolCheck!="O"){
        document.getElementById(id).innerText = "O";
        makeSymbol++;
        count++;
        }
    }
    if(count==9){
        gameOver();
    }
}

function gameOver(){
    document.getElementById("gameOver").innerText = "Game Over!"
}

function restart(){
    count =0;
    makeSymbol =1;
    b1.innerText = "-";
    b2.innerText = "-";
    b3.innerText = "-";
    b4.innerText = "-";
    b5.innerText = "-";
    b6.innerText = "-";
    b7.innerText = "-";
    b8.innerText = "-";
    b9.innerText = "-";
    document.getElementById("gameOver").innerText = "";
}

function checkWin(){
    // for rows

    //row1
    if(b1.innerText==b2.innerText&&b2.innerText==b3.innerText&&b1.innerText!="-"){
        document.getElementById("winner").innerText = "Winner is "+b1.innerText;
        restart();
    }
    //row2
    else if(b4.innerText==b5.innerText&&b5.innerText==b6.innerText&&b5.innerText!="-"){
        document.getElementById("winner").innerText = "Winner is "+b4.innerText;
        restart();
    }
    //row3
    else if(b7.innerText==b8.innerText&&b8.innerText==b9.innerText&&b9.innerText!="-"){
        document.getElementById("winner").innerText = "Winner is "+b7.innerText;
        restart();
    }

    // for column

    //col1
    else if(b1.innerText==b4.innerText&&b4.innerText==b7.innerText&&b7.innerText!="-"){
        document.getElementById("winner").innerText = "Winner is "+b1.innerText;
        restart();
    }
    //col2
    else if(b2.innerText==b5.innerText&&b5.innerText==b8.innerText&&b8.innerText!="-"){
        document.getElementById("winner").innerText = "Winner is "+b2.innerText;
        restart();
    }
    //col3
    else if(b3.innerText==b6.innerText&&b6.innerText==b9.innerText&&b9.innerText!="-"){
        document.getElementById("winner").innerText = "Winner is "+b3.innerText;
        restart();
    }

    //for diagonal

    //dig1
    else if(b1.innerText==b5.innerText&&b5.innerText==b9.innerText&&b9.innerText!="-"){
        document.getElementById("winner").innerText = "Winner is "+b1.innerText;
        restart();
    }
    //dig2
    else if(b3.innerText==b5.innerText&&b5.innerText==b7.innerText&&b7.innerText!="-"){
        document.getElementById("winner").innerText = "Winner is "+b3.innerText;
        restart();
    }
    else{
        if(count==9)
        document.getElementById("winner").innerText = "No Wins";
    }
}