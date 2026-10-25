let textArray = [
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi, ratione rem deserunt modi id eveniet eaque aliquam, molestiae, fugit blanditiis cumque quidem in? Veniam possimus quibusdam laudantium similique. Ab, laboriosam.',
    'Apple ipsum, dolor sit amet consectetur adipisicing elit. Sequi, ratione rem deserunt modi id eveniet eaque aliquam, molestiae, fugit blanditiis cumque quidem in? Veniam possimus quibusdam laudantium similique. Ab, laboriosam.',
    'Orange ipsum, dolor sit amet consectetur adipisicing elit. Sequi, ratione rem deserunt modi id eveniet eaque aliquam, molestiae, fugit blanditiis cumque quidem in? Veniam possimus quibusdam laudantium similique. Ab, laboriosam.',
    'Car ipsum, dolor sit amet consectetur adipisicing elit. Sequi, ratione rem deserunt modi id eveniet eaque aliquam, molestiae, fugit blanditiis cumque quidem in? Veniam possimus quibusdam laudantium similique. Ab, laboriosam.',
    'Beee ipsum, dolor sit amet consectetur adipisicing elit. Sequi, ratione rem deserunt modi id eveniet eaque aliquam, molestiae, fugit blanditiis cumque quidem in? Veniam possimus quibusdam laudantium similique. Ab, laboriosam.,',
    'Hello ipsum, dolor sit amet consectetur adipisicing elit. Sequi, ratione rem deserunt modi id eveniet eaque aliquam, molestiae, fugit blanditiis cumque quidem in? Veniam possimus quibusdam laudantium similique. Ab, laboriosam.',
    'person ipsum, dolor sit amet consectetur adipisicing elit. Sequi, ratione rem deserunt modi id eveniet eaque aliquam, molestiae, fugit blanditiis cumque quidem in? Veniam possimus quibusdam laudantium similique. Ab, laboriosam.',
    'Good ipsum, dolor sit amet consectetur adipisicing elit. Sequi, ratione rem deserunt modi id eveniet eaque aliquam, molestiae, fugit blanditiis cumque quidem in? Veniam possimus quibusdam laudantium similique. Ab, laboriosam.',
    'Perfect ipsum, dolor sit amet consectetur adipisicing elit. Sequi, ratione rem deserunt modi id eveniet eaque aliquam, molestiae, fugit blanditiis cumque quidem in? Veniam possimus quibusdam laudantium similique. Ab, laboriosam.',
]
let decrease = document.getElementById('decrease')
let increase = document.getElementById('increase')
let paragraphCount = document.getElementById('paragraph-count')
let generateBtn = document.getElementById('generate-btn')
let outputDiv = document.getElementById('output')
let clearBtn = document.getElementById('clear-btn')
let copyBtn = document.getElementById('copy-btn')
let statWords = document.getElementById('stat-words')
let statParagraphs = document.getElementById('stat-paragraphs')
let toast = document.getElementById('toast')

// Declared outside the functions so that generate, copy and stats can all use it
let currentParagraphs = []

function updateStats() {
    let text = currentParagraphs.join(' ').trim()
    let wordCount = 0

    // Without this check, an empty string would be counted as 1 word
    if (text !== '') {
        // /\s+/ means "one or more spaces/line breaks", so double spaces don't create empty words
        wordCount = text.split(/\s+/).length
    }

    statWords.textContent = wordCount
    statParagraphs.textContent = currentParagraphs.length
}

function clamp(value) {
    value = Number(value)
    if (isNaN(value)) return 1
    // Math.max(value, 1) -> never below 1
    // Math.min(..., textArray.length) -> never above the number of paragraphs
    return Math.min(Math.max(value, 1), textArray.length)
}

generateBtn.addEventListener('click', function(){
    let amountElemValue = paragraphCount.value
    let randomTextInput = Math.floor(Math.random() * textArray.length)

    if (amountElemValue === ''){
        outputDiv.textContent = textArray[randomTextInput]
    }else{
        // slice(0, N) takes the first N items and does not change textArray
        let sliceArray = textArray.slice(0, amountElemValue)

        let maped = sliceArray.map(function(item){
            return '<p>' + item + '</p>'
        }).join('')  // '' = no separator (join() alone would add commas)

        currentParagraphs = sliceArray

        // innerHTML renders the <p> tags; textContent would show them as plain text
        outputDiv.innerHTML = maped
        updateStats()
    }
})

clearBtn.addEventListener('click', function(){
    outputDiv.textContent = ''
    paragraphCount.value = 1
    statWords.textContent = 0
    statParagraphs.textContent = 0
})
increase.addEventListener('click', function(){
    paragraphCount.value = clamp(Number(paragraphCount.value) + 1)
    clamp(increase.value)
})

decrease.addEventListener('click', function(){
    paragraphCount.value = clamp(Number(paragraphCount.value) - 1)
    clamp(decrease.value)
})
copyBtn.addEventListener('click', function () {
    // Nothing generated yet, so stop here
    if (currentParagraphs.length === 0) return

    // \n\n = two line breaks, which leaves a blank line between paragraphs
    let text = currentParagraphs.join('\n\n')

    // writeText returns a Promise; .then runs only after the copy succeeded
    navigator.clipboard.writeText(text).then(function () {
        toast.classList.add('show')

        // Runs once after 2000 ms (2 seconds) to hide the message again
        setTimeout(function () {
            toast.classList.remove('show')
        }, 2000)
    })
})