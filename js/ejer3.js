function valormayor(){
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    var num3 = document.getElementById("num3").value;

    if(num1 > num2 && num1 > num3){
        alert("El número mayor es el primer número: "+num1);
    }
    else if(num2 > num1 && num2 > num3){
        alert("El número mayor es el segundo número: "+num2);
    }
    else if(num3 > num1 && num3 > num2){
        alert("El número mayor es el tercer número: "+num3);
    }
}