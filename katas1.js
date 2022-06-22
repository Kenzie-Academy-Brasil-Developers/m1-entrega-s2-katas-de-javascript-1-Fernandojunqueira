function oneThroughTwenty() {
    
   let numeros = [];
   for(i=1;i<=20;i++){
    
    numeros.push(i)
    
   }
   return numeros
}

console.log(oneThroughTwenty())

function evensToTwenty() {
    
   let pares = [];

   for(i=1;i<=20;i++){
    if(i%2 === 0){
        pares.push(i)
    }
   }
   return pares
}

console.log(evensToTwenty())

function oddsToTwenty() {
    
  let impares = [];

  for(i=1;i<=20;i++){
   if(i%2 != 0){
       impares.push(i)
   }
  }
  return impares
   
}

console.log(oddsToTwenty())

function multiplesOfFive() {
  
  let fives = []
  
  for(i=5;i<=100;i++){
    if(i % 5 === 0){
        fives.push(i)
    }
   }
   return fives
}

console.log(multiplesOfFive())

function squareNumbers() {
    
  let quadradosPerfeitos = [];
  for(i=1;i<=10;i++){
   
   quadradosPerfeitos.push(i*i)
   
  }
  return quadradosPerfeitos
    
}

console.log(squareNumbers())

function countingBackwards() {
    
  let decrescente = [];
  for(i=20;i>=1;i--){
   
   decrescente.push(i)
   
  }
  return decrescente
}

console.log(countingBackwards())

function evenNumbersBackwards() {
    
  let paresDescrescente = []
  for(i=20;i>=1;i--){
    if(i%2 === 0){
        paresDescrescente.push(i)
    }
   }
   return paresDescrescente
}

console.log(evenNumbersBackwards())

function oddNumbersBackwards() {
    
  let imparesDecrescente = []
  for(i=20;i>=1;i--){
    if(i%2 != 0){
        imparesDecrescente.push(i)
    }
   }
   return imparesDecrescente
}

console.log(oddNumbersBackwards())

function multiplesOfFiveBackwards() {
    
  let fivesDecrescente = []
  
  for(i=100;i>=5;i--){
    if(i % 5 === 0){
        fivesDecrescente.push(i)
    }
   }
   return fivesDecrescente
}

console.log(multiplesOfFiveBackwards())

function squareNumbersBackwards() {
    
  let quadradosPerfeitosDecrescentes = [];
  for(i=10;i>=1;i--){
   
   quadradosPerfeitosDecrescentes.push(i*i)
   
  }
  return quadradosPerfeitosDecrescentes
}

console.log(squareNumbersBackwards())
