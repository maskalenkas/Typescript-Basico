// S => State
// T => Type
// K => Key
// V => Value
// E => Element

// Generics nada mais é do que um tipo que é colocado no inicio e ao longo do tempo não pode ser mudado

// Vai aceitar number ou string, porem o default vai ser string se nada for passado na hora da criação
function useState<S extends number | string = string>() {
  let state:S

  function getState() {
    return state
  }

  function setState( newState: S) {
    state = newState
    console.log(state)
  }

  return { getState, setState }
}

const teste = useState<number>()

teste.setState(3)
teste.setState(2)








