"use strict"
var voto = "luisa";

var candidatos= ["jesus", "yolanda","hamir","luisa", "nulo","en blanco" ];
var votos =[0,0,0,0,0,0];

for (let i = 0; i < candidatos.length; i++) {
    if( voto === candidatos[i]){
        votos[i]++;
    }
   
}
console.log("====RESULTADOS====");
for (let i = 0; i < candidatos.length; i++ ){

    console.log(candidatos[i] + ":" + votos[i] );
}

