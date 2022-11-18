let factos = ['The circumference of Earth is 24,901 miles.',
'Earth is a terrestrial planet.',
'Earth is about 4.54 billion years old.',
"Earth's continents were once known as Rodinia.",
]

const randFacts = () =>{
    let randomNum = Math.floor(Math.random()*factos.length)
    return factos[randomNum]
}
randFacts()

let button = document.getElementById('button1');
let factMessage = document.getElementById('fact');

function showFact(){
    button.innerHTML = "Click for More"
    factMessage.innerHTML = randFacts()
    

}

button.addEventListener('click', showFact )