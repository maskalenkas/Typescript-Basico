interface Game {
  title: string
  description: string
  genre: string
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