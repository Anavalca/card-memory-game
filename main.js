document.addEventListener('DOMContentLoaded', () => {
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
  
  cardArray.sort(() => 0.5 - Math.random())

  const grid = document.querySelector('.grid')
  const resultDisplay = document.querySelector('#result')
  let cardsChosen = []
  let cardsChosenId = []
  let cardsWon = []
  
  function createPanel() {
    for (let i = 0; i < cardArray.length; i++) {
      var card = document.createElement('img')
      card.setAttribute('src', 'images/white.png')
      card.setAttribute('data-id', i)
      card.addEventListener('click', flipCard)
      grid.appendChild(card)
    }
  }

  function checkForMatch() {
    let cards = document.querySelectorAll('img')
    const optionOneId = cardsChosenId[0]
    const optionTwoId = cardsChosenId[1]
    if (cardsChosen[0] === cardsChosen[1]) {
      cards[optionOneId].classList.add('winEffect')
      cards[optionTwoId].classList.add('winEffect')
      setTimeout ( () => {
        cards[optionOneId].setAttribute('src', 'images/zero.png')
        cards[optionTwoId].setAttribute('src', 'images/zero.png')
        cardsWon.push(cardsChosen)

      }, 600);

    } else {
      cards[optionOneId].setAttribute('src', 'images/white.png')
      cards[optionTwoId].setAttribute('src', 'images/white.png')
    }
    cardsChosen = []
    cardsChosenId = []
    resultDisplay.textContent = cardsWon.length
    if (cardsWon.length === cardArray.length/2) {
      resultDisplay.textContent = 'Congratulations you found tehm all!!'
    }
  }

  function flipCard() {
    var cardId = this.getAttribute('data-id')
    cardsChosen.push(cardArray[cardId].name)
    cardsChosenId.push(cardId)
    this.setAttribute('src', cardArray[cardId].img)
    if (cardsChosen.length === 2) {
      setTimeout(checkForMatch, 500)
    }
  }

  createPanel()
})
