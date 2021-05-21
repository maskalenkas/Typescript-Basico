// Eu tenho um tipo com propriedades de banner
type BannerProps = {
  name: string,
  img: string
}

// E tenho objetos que usam essa propriedade
const banner1:BannerProps = {
  name: 'banner 1',
  img: 'img1'
}

const banner2:BannerProps = {
  name: 'banner 2',
  img: 'img2'
}

// E tenho um tipo que recebe uma lista de banner
type Slider = {
  items: BannerProps[]
}

// E tenho listas
const lista3 = {
  teste: 'oi'
}


// E tenho uma lista que só usa os itens com os tipos de bannerprops
const amontoadoDeListas:Slider = {
  items: [
    banner1,
    banner2,
    // lista3 (daria erro, pois não tem props de banner)
  ]
}