/*
Faça um programa para calcular o valor de uma viagem

Você terá 03 (três) variaveis. Sendo elas:
    1- Preço do combustivel;
    2- Gasto médio do combustivel por km;
    3- Distancia em Km da viagem.

Imprima no console o valor que será gasto de combustivel para realizar essa viagem.
*/
let preco = 4.899;
let gasto = 5;
const km = 1000;

let result = preco * (gasto / km);
console.log(result);