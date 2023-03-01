let varA = 'A' // B
let varB = 'B' // C
let varC = 'C' // A

const varATemp = varA
varA =  varB
varB =  varC
varC =  varATemp

console.log(varA, varB, varC)

//---------------------------------------//

let varD = 'D' // E
let varE = 'E' // F
let varF = 'F' // D

const varDTempo =varD
varD = varE
varE = varF
varF = varDTempo


console.log(varD, varE, varF)