// Type aliases define quais os tipos que se pode utilizar

// 1
type UID = number | string

function log(uid: UID, item: string) {
  console.log(`Product: ${item} || Id: ${uid}`)
}

log(123,'teste')

// 2
type Plataform = 'Windows' | 'Linux' | 'Mac OS'

function renderPlataform(plataform: Plataform) {
  return plataform
}

renderPlataform('Windows')



//3 
type AccountInfo = {
  id: number
  name: string
  email?: string // Opcional
}

const account: AccountInfo = {
  id: 123,
  name: 'Arthur'
}

type CharInfo = {
  level: number
}

// intersection
// Caso eu quisesse ligar 2 tipos, ficaria algo como
type PlayerInfo = AccountInfo & CharInfo

const player: PlayerInfo = {
  id: 123,
  name: 'test',
  level: 1000
}