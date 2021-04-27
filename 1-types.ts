// boolean
let isOpen: boolean
isOpen = true

// string
let message: string
message = `foo ${isOpen}`

// numeros
let total: number 
total = 20.3

// Arrays (type[])
// É um array de numeros
let items: number[]
items = [1,2,3]

// É outro array de numeros
let lista: Array<number>
lista = [1, 2, 3]

// tuple
// É um array que sabemos a quantidade de elementos dentro, e os tipos dele
let title: [number, string, string]
title = [1, 'foo', 'bar']

// enum
enum Colors {
  white = '#fff',
  black = '#000'
}

// void
function logger():void {
  console.log('nothing')
}

// never, usado em excessões
function error(): never {
  throw new Error('error')
}

// object
let cart: object

cart = {
  key: 'teste'
}