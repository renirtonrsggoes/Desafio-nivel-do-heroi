let nome = "Renirton";
let xp = 2000;
let nivel;

if (xp < 1000) {nivel = "ferro";}
else if (xp <= 2000) {nivel = "bronze";}
else if (xp <= 5000) {nivel = "prata";}
else if (xp <= 7000) {nivel = "ouro";} 
else if (xp <= 8000) {nivel = "platina";}
else if (xp <= 9000) {nivel = "ascedente";}
else if (xp <= 10000) {nivel = "imortal";}

else { nivel = "radiante";}

let mensagem = `O herói de nome ${nome} está no nível ${nivel}`;

console.log(mensagem)














