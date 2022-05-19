function conversion(){
    var grados= document.getElementById("valor").value;
    var resultado;

    resultado= (grados-32)*0.5556;

    alert("La conversión da " +resultado+ " grados celcius");
}