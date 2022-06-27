 let songs = [
      {
          name: 'Azul da Cor do Mar',
          path: 'songs/azul-da-cor-do-mar-lofi-remix.mp3',
          artist: 'GabrielMzero',
          cover: 'images/cover2.png'
      },
      {
          name: 'Ela Partiu',
          path: 'songs/ela-partiu-lofi-remix.mp3',
          artist: 'Tim Maia',
          cover: 'images/cover3.png'
      },
      {
          name: 'Ela mora no meu peito',
          path: 'songs/ela-mora-no-meu-peito-ofi-remix.mp3',
          artist: 'GabrielMzero - Original: Jorge Ben e Toquinho - Carolina Bela',
          cover: 'images/cover4.png'
      },
      {
          name: 'Sailor Moon 2',
          path: 'songs/sailormoon2.mp3',
          artist: 'Aesthetic2',
          cover: 'images/capa.jpg'
      },
  ]

// let songs=[]


// const api_url = "http://localhost:1337/api/musicas/?populate=cover&populate=path"
// function getSong(api_url){


//     let request = new XMLHttpRequest()
//     request.open("GET",api_url,false)
//     request.send()
//     return request.response

// }

// function organizeLine(musicas){
//   addons = [{
//       name: musicas["attributes"]["name"],
//       artist: musicas["attributes"]["artist"],
//       cover: musicas["attributes"]["cover"]["data"]["attributes"]["url"],
//       path: musicas["attributes"]["path"]["data"]["attributes"]["url"]
//   }]

//   return addons
// }


// function main(){
//   let  data = getSong(api_url)
//   let   musicas = JSON.parse(data)

//     console.log(musicas["data"])

//     musicas["data"].forEach(element =>{
//       let addons = organizeLine(element)
//       songs.push(addons)
//       });
//       console.log("addons",songs)
//  }


//  main()

//  console.log("externo",songs)