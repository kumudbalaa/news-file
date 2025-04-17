

const btn = document.getElementById('btn');

let hax = document.getElementById('haxcode');
function randomcolor (){
    let letters = '0123456789ABCDEFabcdefg'
    let color = "#";
    for(let i=0; i<6; i++){
        color += letters[Math.floor(Math.random()*16 )]
        console.log(color);
    }
    return color;
}

btn.addEventListener('click',()=>{
    document.body.style.backgroundColor = randomcolor();
    hax.innerHTML = randomcolor(); 
})