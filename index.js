function rockFunction(){
    var randomNum = Math.floor((Math.random()*3)+1);
    if(randomNum==1){
        document.getElementsByClassName("rock2")[0].src="images/rock.jpg";
        document.querySelector("h1").innerHTML="you tied🤷";
    }
    else if(randomNum==2){
        document.getElementsByClassName("rock2")[0].src="images/paper.webp";
        document.querySelector("h1").innerHTML="you lose💔"
    }
    else if(randomNum==3){
        document.getElementsByClassName("rock2")[0].src="images/scissors.jfif";
        document.querySelector("h1").innerHTML="you win👍"
    }

  
        document.getElementsByClassName("rock")[0].src="images/rock.jpg";
    
}
 function paperFunction(){
    var randomNum = Math.floor((Math.random()*3)+1);
    if(randomNum==1){
        document.getElementsByClassName("rock2")[0].src="images/rock.jpg";
        document.querySelector("h1").innerHTML="you win👍"
    }
    else if(randomNum==2){
        document.getElementsByClassName("rock2")[0].src="images/paper.webp";
        document.querySelector("h1").innerHTML="you tied🤷";
    }
    else if(randomNum==3){
        document.getElementsByClassName("rock2")[0].src="images/scissors.jfif";
        document.querySelector("h1").innerHTML="you lose💔"
    }
        document.getElementsByClassName("rock")[0].src="images/paper.webp";

}
function scissorsFunction(){
    var randomNum = Math.floor((Math.random()*3)+1);
    if(randomNum==1){
        document.getElementsByClassName("rock2")[0].src="images/rock.jpg";
        document.querySelector("h1").innerHTML="you lose💔"
    }
    else if(randomNum==2){
        document.getElementsByClassName("rock2")[0].src="images/paper.webp";
        document.querySelector("h1").innerHTML="you win👍"
    }
    else if(randomNum==3){
        document.getElementsByClassName("rock2")[0].src="images/scissors.jfif";
        document.querySelector("h1").innerHTML="you tied🤷";
    }
        document.getElementsByClassName("rock")[0].src="images/scissors.jfif";

}
var player1score;
var player2score;


