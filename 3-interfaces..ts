// readonly serve para não ser modificado depois de criado

interface Game {
  title: string
  description: string
  readonly genre: string
  plataform: string[]
  getSimilars: (title:string) => void
}

const tlou: Game = {
  title: 'the last of us',
  description: 'Um jogo',
  genre: 'terror',
  plataform: ['PS3', 'PS4'],
  getSimilars: (title: string) => {
    console.log('testando a função')
  }
}

// Para interpolar 2 interfaces, se usa o extends
// interface xx extends Game { ... }

// Para interpolar classe com interface, se usa o implements
// class xx implements Game { ... }
