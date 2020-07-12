document.addEventListener('DOMContentLoaded', () =>{
  const cardArray = [
    {
      name:"bronw",
      img:"images/brown.png"
    },
    {
      name:"bronw",
      img:"images/brown.png"
    },
    {
      name:"cake",
      img:"images/cake.png"
    },
    {
      name:"cake",
      img:"images/cake.png"
    },
    {
      name:"crepe",
      img:"images/crepe.png"
    },
    {
      name:"crepe",
      img:"images/crepe.png"
    },
    {
      name:"red",
      img:"images/red.png"
    },
    {
      name:"red",
      img:"images/red.png"
    },
    {
      name:"vanilla",
      img:"images/vanilla.png"
    },
    {
      name:"vanilla",
      img:"images/vanilla.png"
    },
    {
      name:"watermelon",
      img:"images/watermelon.png"
    },
    {
      name:"watermelon",
      img:"images/watermelon.png"
    },
  ]
  
  const grid = document.querySelector('.grid')
  
  function createPanel() {
    console.log('hola')
    for (let i = 0; i < cardArray.length; i++) {
      var card = document.createElement('img')
      card.setAttribute('src', 'images/white.png')
      card.setAttribute('data-id', i)
      // card.addEventListener('click', flipcard)
      grid.appendChild(card)
    }
  }

  createPanel()


})
