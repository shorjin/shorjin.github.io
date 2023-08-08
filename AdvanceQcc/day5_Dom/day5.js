console.log("Xiaojin Li")
let mytext=document.querySelector('#userName p:nth-child(2)')
mytext.style.color="red"
document.querySelector(".name1").style.backgroundColor ='magenta'


/*-- querySelectorAll --*/
let myName =document.querySelectorAll('#userName p')
for (let i=0; i<myName.length;i++){
    myName[i].style.color="green"
    // change the font size of all odd<P>
    if (i %2===0){
        myName[i].style.fontSize='2em'
    }
}
// innerHTML
let myDiv=document.querySelectorAll('p')[1]
myDiv.innerHTML="Next text content using <em><b>innerHTML</em></b>"

// add class name by using javascript
document.querySelector('h1').classList.add("subtitle")

// testing parent/siblings/child
let listItem=document.querySelector('li:nth-child(2)')

// create elements and text nodes
// step 1 create an element
let myPara=document.createElement('p')
// step 2 give it content
let mySentence=document.createTextNode("This is the text of the new paragraph")
// step 3 add it to the Dom
myPara.appendChild(mySentence)
myPara.classList.add('subtitle')
// step 4 find the position 
document.querySelector('div').appendChild(myPara)

// remove an item from list
let myitem=document.querySelector('ul')
myitem.removeChild(myitem.children[2])

// events
let btn = document.getElementById('btn1');
btn.onclick = function() {
    alert("Hi, there!");
};

// example of guess a number 
let randomnum=function(){
    let radnum=Math.ceil(Math.random()*9)
    return radnum
}

let guessnum = document.getElementById('guessnumber');
let btnguess = document.getElementById('btnguessnum');

btnguess.addEventListener("click",function(){
    guessnum.innerHTML=randomnum()
})

// mouse event

let btnMouseEvent = document.getElementById('btnMouseEvent');
let mouseoutDisplay=document.querySelector('.mouseoutDisplay')
let dblclickDisplay=document.querySelector('.dblclickDisplay')
let mousecounter=0
btnMouseEvent.addEventListener('mouseout',function(){
    mousecounter++
    mouseoutDisplay.innerHTML=mousecounter
   
  

})

btnMouseEvent.addEventListener('dblclick',function(){
    dblclickDisplay.innerHTML+=' dbclick'

})

// window event
let topIcon=document.querySelector('.top')
window.addEventListener('scroll',function(){
    let yposition=this.scrollY
    if(yposition>100){
        topIcon.style.display='block'
    }
    else{topIcon.style.display='none'}
})

