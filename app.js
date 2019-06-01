//Chamada da função FileSystem
const fs = require('fs')

//Chamada do método da função FileSystem, escreverá o texto abaixo "My name is Matheus"
//no arquivo "notes.txt".
fs.writeFileSync('notes.txt', 'My name is Matheus.')

//Chamada do método da função FileSystem, diferente do que está descrito acima,
//esse método acrescentará texto no arquivo "notes.txt".
fs.appendFileSync('notes.txt', 'Curitiba')
