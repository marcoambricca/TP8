function CalcularEdad(fecha){
    const fechaAhora = new Date("2023-09-12");
    const fechapersona = new Date(fecha);
    if(fechaAhora.getMonth()<fechapersona.getMonth() || (fechaAhora.getMonth()==fechapersona.getMonth() && fechaAhora.getDay()<fechapersona.getDay()))
    {
        console.log((fechaAhora.getFullYear()-fechapersona.getFullYear())-1);
    }else
    {
        console.log(fechaAhora.getFullYear()-fechapersona.getFullYear());
    }
    
}
function HayFruta(frutas,fruta){
    let hayFruta = false, i = 0;
    while(hayFruta == false && i<frutas.length){
        if(fruta == frutas[i]){
            hayFruta = true;
        }
        i = i+1;
    }
    if(hayFruta == true){
        console.log("hay fruta");
    }
    else
    {
        console.log("no hay fruta");
    }

}   
function Doblar(numeros){
const doblado = numeros.map(numero => numero*2);
for(let i = 0; i<numeros.length; i++){
    console.log(doblado[i]);
}
}

function Triangulos(){
    for(let i = 0; i<5; i++){
        for(let o = 0; o<=i; o++){
            console.log("*");
        }
    }

    for(let i = 0; i<5; i++){
        for(let o = 5-1-i; o>0; o--){
            console.log("-");
        }
        for(let o = 0; o<i+1; o++){
            console.log("*");
        }
        for(let o = 5-1-i; o>0; o--){
            console.log("-");
        }
    }
}

function NombresConA(nombres, id){
    let sep = document.getElementById(id);
    let seprados = nombres.split(",");
    sep.innerHTML = seprados.filter(nombre  => nombre[0] == 'A'); 
}

function Reemplazo(cadena, palabra, reemplazo, id){
const posicion = cadena.indexOf(palabra);
const principio = cadena.slice(0,posicion);
const final = cadena.slice((posicion+palabra.length), cadena.length);

//replace hay que hacer


let resultado = document.getElementById(id);
resultado.innerHTML = (principio+reemplazo+final);
}

function cortarTexto(id){
    let cadena = prompt("Ingrese una cadena de texto: ");
    let num = prompt("Ingrese un numero: ");

    let nueva = cadena.slice(0, num);
    let dom = document.getElementById("ej9");
    dom.innerHTML = nueva;
}

function ComaPorGuion(cadena){
cadena = cadena.replaceAll(",","-");
let dom = document.getElementById("ej10");
dom.innerHTML = cadena;
}

function montoTotal(cadena){
    compras = cadena.split(",");
    let suma  = 0;
    for(let i = 0; i<compras.length; i++){
        desde = compras[i].indexOf(":");
        numero = compras[i].substring(desde+1, (compras[i].length));
        suma = suma + Number(numero);
    }
    let dom = document.getElementById("ej11");
    dom.innerHTML = suma;
}