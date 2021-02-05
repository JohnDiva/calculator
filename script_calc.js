let express = require('express')
let path = require('path')
let app = express()


app.get(
    '/home'
    , function( request, response){
    response.sendFile(path.join(__dirname, 'calculator.html'))
}
)





app.listen(8080)
app.use(express.static('./'))


function instruction() {
    alert("when using cos, tan, sin, exp and sqr, the digit to be evaluated is typed first");
    let user = confirm ("Do you agree");
    if ( user === false) {
        buy_new_calculator()}
}

function buy_new_calculator() {
    window.open("https://www.amazon.com/Calculator/b?ie=UTF8&node=172518");
}


function AC() {
    document.getElementById("disp").innerHTML="0";
}


function clr() {
    let val = document.getElementById('disp').innerHTML;
    let x = "";
    var a = val.length;

    if( val === "sin" || val ==="cos"|| val==="tan"|| val==="exp" || val==="sqr" ) {
        AC(val);
    }
    else {
    for (let i = 0; i<a -1; i++) {
        x += val[i] ;
        document.getElementById("disp").innerHTML = x;}
        if(a==1){
            AC(val);
        }
        
    }
}


function display(value) {
   let  val = document.getElementById('disp').innerHTML;
    if (val == 0){
      document.getElementById("disp").innerHTML = value; 
    }
    else {
      document.getElementById('disp').innerHTML = val + value;
    }
}


function equate() {
    let val = document.getElementById("disp").innerHTML;
    var a = val.length;
     (val[a-3] === "s" && val[a-2] ==="q" && val[a-1] ==="r") ? sqrt()

    :(val[a-3] === "c" && val[a-2] ==="o" && val[a-1] ==="s") ? cos()
    
    :(val[a-3] === "t" && val[a-2] ==="a" && val[a-1] ==="n") ? tan()

    :(val[a-3] === "s" && val[a-2] ==="i" && val[a-1] ==="n") ? sin()

    :(val[a-3] === "e" && val[a-2] ==="x" && val[a-1] ==="p") ? exp()

    :ans();
}

function ans() {
    var equation = document.getElementById("disp").innerHTML
    var answer = eval(equation)
    document.getElementById('disp').innerHTML = answer;

}


function sqrt(){
    let val = parseInt(document.getElementById("disp").innerHTML);
    document.getElementById('disp').innerHTML = Math.sqrt(val);

}

function cos() {
    let val = parseInt(document.getElementById("disp").innerHTML);
    document.getElementById('disp').innerHTML = Math.cos(val);
}

function tan(){
    let val = parseInt(document.getElementById("disp").innerHTML);
    document.getElementById('disp').innerHTML = Math.tan(val);

}

function sin(){
    let val = parseInt(document.getElementById("disp").innerHTML);
    document.getElementById('disp').innerHTML = Math.sin(val);

}

function exp(){
    let val = parseInt(document.getElementById("disp").innerHTML);
    document.getElementById('disp').innerHTML = Math.exp(val);
}



