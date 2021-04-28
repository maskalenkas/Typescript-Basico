"use strict";
// S => State
// T => Type
// K => Key
// V => Value
// E => Element
// Generics nada mais é do que um tipo que é colocado no inicio e ao longo do tempo não pode ser mudado
// Vai aceitar number ou string, porem o default vai ser string se nada for passado na hora da criação
function useState() {
    var state;
    function getState() {
        return state;
    }
    function setState(newState) {
        state = newState;
        console.log(state);
    }
    return { getState: getState, setState: setState };
}
var teste = useState();
teste.setState(3);
teste.setState(2);
