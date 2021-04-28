"use strict";
// readonly serve para não ser modificado depois de criado
var tlou = {
    title: 'the last of us',
    description: 'Um jogo',
    genre: 'terror',
    plataform: ['PS3', 'PS4'],
    getSimilars: function (title) {
        console.log('testando a função');
    }
};
// Para interpolar 2 interfaces, se usa o extends
// interface xx extends Game { ... }
// Para interpolar classe com interface, se usa o implements
// class xx implements Game { ... }
