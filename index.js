var num= document.querySelectorAll("button").length;

for (var i=0; i<=num; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", e1);
    function e1(){
        var but=this.innerHTML;
        main(but);
    }

    document.addEventListener("keypress", e2);
    function e2(event){
        main(event.key);
    }

    function main(key){
        switch(key){
                    case "w":
                        var aud1= new Audio("tom-1.mp3");
                         aud1.play();
                        break;
            
                        case "a":
                        var aud2= new Audio("tom-2.mp3");
                         aud2.play();
                        break;
            
                        case "s":
                        var aud= new Audio("tom-3.mp3");
                         aud3.play();
                        break;
            
                        case "d":
                        var aud4= new Audio("tom-4.mp3");
                         aud4.play();
                        break;
            
                        case "j":
                        var aud5= new Audio("snare.mp3");
                        aud5.play();
                        break;
            
                        case "k":
                        var aud6= new Audio("crash.mp3");
                        aud6.play();
                        break;
            
                        case "l":
                        var aud7= new Audio("kick-bass.mp3");
                        aud7.play();
                        break;
            
                        default:
                            console.log();
                }

    }
}