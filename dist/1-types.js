"use strict";
// boolean
var isOpen;
isOpen = true;
// string
var message;
message = "foo " + isOpen;
// numeros
var total;
total = 20.3;
// Arrays (type[])
// É um array de numeros
var items;
items = [1, 2, 3];
// É outro array de numeros
var lista;
lista = [1, 2, 3];
// tuple
// É um array que sabemos a quantidade de elementos dentro, e os tipos dele
var title;
title = [1, 'foo', 'bar'];
// enum
var Colors;
(function (Colors) {
    Colors["white"] = "#fff";
    Colors["black"] = "#000";
})(Colors || (Colors = {}));
// void
function logger() {
    console.log('nothing');
}
// never, usado em excessões
function error() {
    throw new Error('error');
}
// object
var cart;
cart = {
    key: 'teste'
};
