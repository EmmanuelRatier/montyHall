const readline = require('readline-sync')
const { randomInt } = require('crypto')
////
//
// TO DO
// 
// FAIRE LES VERIF !!
//
////
let questionStart = readline.keyInYN(' êtes vous prêt ? ')
if (questionStart) {
  const n = randomInt(0, 3) // un nombre aléatoire entre 0 et 2
  const gates = ['goat', 'goat', 'goat'] // 3 chèvres par défaut derrière chacune des portes
  gates[n] = 'car'
  //console.log(gates)
  let choiceDoor = readline.keyIn('ok, donc nous avons trois portes, choisissez en une "Tape 1, 2 ou 3":  ', { limit: `$<1-3>` })
  let choice = ''
  if (choiceDoor === "1") {
    console.log('vous avez choisi la porte 1')
    choice = 0
  }
  else if (choiceDoor === "2") {
    console.log('vous avez choisi la porte 2')
    choice = 1
  }
  else if (choiceDoor === "3") {
    console.log('vous avez choisi la porte 3')
    choice = 2
  }
  let nR = randomInt(0, 3) // variable nR (nbr random) entre à et 2
  while (nR === n || choice === nR) { // Tant que nR est égal à n  OU  tant que choice est égal nR 
    nR = randomInt(0, 3) // tu me génère un nouveau chiffre random en boucle 
  }

  console.log('la porte numéro ' + (nR + 1) + ' contenait une chèvre !')
  let secondQuestion = readline.keyInYN('le suspens est à son comble, êtes vous prêt pour la suite?')
  if (secondQuestion) {
    let secondChoiceDoor = readline.question('ok, choisissez de garder votre porte initial ou modifiez votre choix en choissisant l\'autre porte: ')
    if (secondChoiceDoor === "1") {
      secondChoiceDoor = 0
    }
    if (secondChoiceDoor === "2") {     // do a verif ! important !
      secondChoiceDoor = 1
    }
    if (secondChoiceDoor === "3") {
      secondChoiceDoor = 2
    }
    console.log('la porte ' + (secondChoiceDoor + 1) + ' contient ça bravo : ' + gates[secondChoiceDoor])
  }
}

