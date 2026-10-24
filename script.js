let textArray = [
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi, ratione rem deserunt modi id eveniet eaque aliquam, molestiae, fugit blanditiis cumque quidem in? Veniam possimus quibusdam laudantium similique. Ab, laboriosam?',
    'Apple ipsum, dolor sit amet consectetur adipisicing elit. Sequi, ratione rem deserunt modi id eveniet eaque aliquam, molestiae, fugit blanditiis cumque quidem in? Veniam possimus quibusdam laudantium similique. Ab, laboriosam?,',
    'Orange ipsum, dolor sit amet consectetur adipisicing elit. Sequi, ratione rem deserunt modi id eveniet eaque aliquam, molestiae, fugit blanditiis cumque quidem in? Veniam possimus quibusdam laudantium similique. Ab, laboriosam?',
    'Car ipsum, dolor sit amet consectetur adipisicing elit. Sequi, ratione rem deserunt modi id eveniet eaque aliquam, molestiae, fugit blanditiis cumque quidem in? Veniam possimus quibusdam laudantium similique. Ab, laboriosam?',
    'Beee ipsum, dolor sit amet consectetur adipisicing elit. Sequi, ratione rem deserunt modi id eveniet eaque aliquam, molestiae, fugit blanditiis cumque quidem in? Veniam possimus quibusdam laudantium similique. Ab, laboriosam?,',
    'Hello ipsum, dolor sit amet consectetur adipisicing elit. Sequi, ratione rem deserunt modi id eveniet eaque aliquam, molestiae, fugit blanditiis cumque quidem in? Veniam possimus quibusdam laudantium similique. Ab, laboriosam?',
    'person ipsum, dolor sit amet consectetur adipisicing elit. Sequi, ratione rem deserunt modi id eveniet eaque aliquam, molestiae, fugit blanditiis cumque quidem in? Veniam possimus quibusdam laudantium similique. Ab, laboriosam?',
    'Good ipsum, dolor sit amet consectetur adipisicing elit. Sequi, ratione rem deserunt modi id eveniet eaque aliquam, molestiae, fugit blanditiis cumque quidem in? Veniam possimus quibusdam laudantium similique. Ab, laboriosam?,',
    'Perfect ipsum, dolor sit amet consectetur adipisicing elit. Sequi, ratione rem deserunt modi id eveniet eaque aliquam, molestiae, fugit blanditiis cumque quidem in? Veniam possimus quibusdam laudantium similique. Ab, laboriosam?',
]
let decrease = document.getElementById('decrease')
let increase = document.getElementById('increase')
let paragraphCount = document.getElementById('paragraph-count')
let generateBtn = document.getElementById('generate-btn')
let outputDiv = document.getElementById('output')
let clearBtn = document.getElementById('clear-btn')


if(paragraphCount.value < 0){
    paragraphCount.value = 0
}else if (paragraphCount.value > 9){
    paragraphCount.value = 9
}
generateBtn.addEventListener('click', function(event){
    event.preventDefault()
    
    let amountElemValue = paragraphCount.value
    let randomTextInput = Math.floor(Math.random() * textArray.length)
    
    if (amountElemValue === '' || isNaN(amountElemValue)){
        outputDiv.textContent = textArray[randomTextInput]
    }else{
        let sliceArray = textArray.slice(0, amountElemValue)
        let maped = sliceArray.map(function(item){
            return '<p>' + item + '</p>'
        })
        
        outputDiv.innerHTML = maped
        
        console.log(sliceArray);
        
    }
})

let paragraphCountValue = paragraphCount.value

increase.addEventListener('click', function(){
    
        paragraphCountValue ++
        paragraphCount.value = paragraphCountValue
    
})

decrease.addEventListener('click', function(){
    paragraphCountValue --
    paragraphCount.value = paragraphCountValue
})
