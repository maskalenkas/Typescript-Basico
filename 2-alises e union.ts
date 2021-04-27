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

renderPlataform