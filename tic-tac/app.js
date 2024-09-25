// let boxElements=document.getElementsByClassName("box");
boxElements=document.querySelectorAll(".box")

console.log(boxElements);

boxElements.forEach((box) => {
    box.addEventListener('click',function(){
        playGame(box)
 
    });
})
let player="X"
let turn=0
function playGame(box){
    if (turn%2==0){
        box.innerHTML=`<p>${player}</p>`
        player="O"
    } else{
        box.innerHTML=`<p>${player}</p>`
        player="X"
    }
    turn++
    checkWinner()
  
}
function checkWinner(){
    let box1=document.querySelector('#container>div:nth-child(1)')
    let box2=document.querySelector('#container>div:nth-child(2)')
    let box3=document.querySelector('#container>div:nth-child(3)')
    let box4=document.querySelector('#container>div:nth-child(4)')
    let box5=document.querySelector('#container>div:nth-child(5)')
    let box6=document.querySelector('#container>div:nth-child(6)')
    let box7=document.querySelector('#container>div:nth-child(7)')
    let box8=document.querySelector('#container>div:nth-child(8)')
    let box9=document.querySelector('#container>div:nth-child(9)')

    let  str1=box1.textContent + box2.textContent + box3.textContent
    let  str2=box4.textContent + box5.textContent + box6.textContent
    let  str3=box7.textContent + box8.textContent + box9.textContent
    let  str4=box1.textContent + box4.textContent + box7.textContent
    let  str5=box2.textContent + box5.textContent + box8.textContent
    let  str6=box3.textContent + box6.textContent + box9.textContent
    let  str7=box1.textContent + box5.textContent + box9.textContent
    let  str8=box7.textContent + box5.textContent + box3.textContent

    let finalScreen=document.getElementById("final-screen");
    let won=document.getElementById("won");

    if(str1=="XXX" || str2=="XXX" || str3=="XXX" || str4=="XXX" || str5=="XXX"  || str6=="XXX" || str7=="XXX" || str8=="XXX" ){
        won.textContent="'X' won the game"
        finalScreen.style.visibility="visible";
    }else if(str1=="OOO" || str2=="OOO" || str3=="OOO" || str4=="OOO" || str5=="OOO"  || str6=="OOO" || str7=="OOO" || str8=="OOO" ){
        won.textContent="'O' won the game"
        finalScreen.style.visibility="visible";
    }else if(turn==9){
        won.textContent='Tie';
        finalScreen.style.visibility="visible";
    }
    let btn=document.getElementById("playbtn");
    btn.addEventListener('click',function(){
        window.location.href=""
    })
    
}