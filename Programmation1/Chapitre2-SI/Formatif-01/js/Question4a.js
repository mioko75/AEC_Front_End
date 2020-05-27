/** created by Sophie Bergeron **/

/**

 */
var a = 5;
var b = 5;
var c = 0;
var reponse = "";

if(a === b){
    reponse+= "1 ";
    if(b <= (a+c)){
        reponse+="2 ";
    }
    else if((a+b) < c){
        reponse+="3 ";
    }
    else{
        reponse+="4 ";
    }
}
else{
    reponse+="5 ";
}
if(a === b && b === a){
    reponse+="6 ";
}
else{
    reponse+="7 ";
}
alert(reponse);


