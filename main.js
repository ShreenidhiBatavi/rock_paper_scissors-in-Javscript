const selectionButtons=document.querySelectorAll('[data-selection]')
const finalColumn = document.querySelector('[data-final-column]')
const yourScore = document.querySelector('[data-your-score]')
const compScore = document.querySelector('[data-comp-score]')
console.log(yourScore.innerText)
console.log(compScore.innerText)
const SELECTIONS=[{
    name: 'rock',
    emoji: '✊',
    beats: 'scissors'
  },
  {
    name: 'paper',
    emoji: '✋',
    beats: 'rock'
  },
  {
    name: 'scissors',
    emoji: '🖖',
    beats: 'paper'
  }
]
selectionButtons.forEach((selectionButton)=>{
    selectionButton.addEventListener('click',(e)=>{
   const selectionName=selectionButton.dataset.selection
   makeSelection(selectionName)
  })
 })

 function makeSelection(selectedName){
     const selected=SELECTIONS.find((select)=>select.name===selectedName)
     const computerSelected=SELECTIONS[computerSelection()]
     const youWin=isWinner(selected,computerSelected)
     const compWin=isWinner(computerSelected,selected)
     addSelectionResult(computerSelected ,compWin)
     addSelectionResult(selected, youWin)
     updateScore(youWin,compWin)
 }

 function isWinner(selection,opponentSelection){
     return selection.beats===opponentSelection.name
 }

 function addSelectionResult(selection,winner){
    const div = document.createElement('div')
    div.innerText = selection.emoji
    div.classList.add('result-selection')
    if (winner) div.classList.add('winner')
    finalColumn.after(div)
 }

 function computerSelection(){
     return Math.floor(Math.random()*2)
 }
 function updateScore(youwin,compWin){  

    if(youwin) yourScore.innerText= Number(yourScore.innerText)+1
  
    if (compWin)compScore.innerText= Number(compScore.innerText)+1
    
 }