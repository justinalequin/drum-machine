
const tick = new Audio('sounds/tick.mp3');
const tock = new Audio('sounds/tock.mp3');

const checked = document.querySelectorAll('input[type="checkbox"]');
const beat1 = document.querySelector('.beat1')
const beat2 = document.querySelector('.beat2')
const beat3 = document.querySelector('.beat3')
const beat4 = document.querySelector('.beat4')
        beat1.style.opacity = '.5'
        beat2.style.opacity = '.5'
        beat3.style.opacity = '.5'
        beat4.style.opacity = '.5'




let metCount = 0;
let killSwitch = 1;
let array1 = [];
let array2 = [];



function update1() {

    metCount = metCount +1

    if (metCount % 4 !== 0){
        //console.log('tick')
        beat4.style.color = 'black' 

    if  (killSwitch <= 1){tick.play();}
        
          
    }

    if (metCount === 1){
        beat1.style.color = 'white'
   
    
    }
    if (metCount === 2){beat2.style.color = 'white';
    beat1.style.color = 'black'}
    if (metCount === 3){beat3.style.color = 'white';
    beat2.style.color = 'black'}
    



        if(metCount % 4 === 0) {
           // console.log('tock')
            beat4.style.color = 'white'
            beat3.style.color = 'black'
             metCount = 0;

             checked.forEach(function(options){
               // console.log('options ',options.className)  
                options.addEventListener('click', function(e){
                    if(e.target.checked = true){
                        //console.log(metCount)
                        //console.log(e.target.classList[2])
                        array1.push(e.target.classList[1])
                        //console.log(typeof e.target.classList[1])
                        array2.push(e.target.classList[2])
                        //console.log(typeof e.target.classList[2])
                    //   if(metCount === 1 && e.target.classList[2] === 1){
                    //       if (e.target.classList[1] === 'hat'){
                    //         console.log('hi hat sound in loop')
                    //         hiSound.play();
                    //       }
                    //       if (e.target.classList[1] === 'kick'){
                    //         console.log('kick drum sound in loop')
                    //         kickSound.play();
                    //       }

                    //       if (e.target.classList[1] === 'snare'){
                    //         console.log('snare drum sound in loop')
                    //         hiSound.play();
                    //       }
                    //   }
                   

                    
                    }
                    
                })
                   
                })     

        if (killSwitch <= 1){tock.play();}
            
               
           
        }
    
}

// function update2() {
//     metCount = metCount + 1
//     console.log(metCount)
//     tock.play();
// }


function setupUpdate1() {
    setInterval(update1, 600);
}

setTimeout(setupUpdate1, 300);



const hiHat = document.querySelector('.drum');
const kick = document.querySelector('.ick');
const snare = document.querySelector('.nare');
const hiSound = new Audio('sounds/hi-hat.mp3');
const kickSound = new Audio('sounds/kick-drum.mp3');
const snareSound = new Audio('sounds/snare-drum.mp3');

function onClick(){
    hiHat.addEventListener('click', function(){
        hiSound.play();

    })
}
onClick();

function onClick2(){
    kick.addEventListener('click', function(){
        kickSound.play();

    })
}
onClick2();

function onClick3(){
    snare.addEventListener('click', function(){
        snareSound.play();

    })
}
onClick3();

const mute = document.querySelector('.mute')
const unmute = document.querySelector('.unmute')

function onClick4 (){
    mute.addEventListener('click', function(){
        console.log('Mute')
        console.log(array1)
        console.log(array2)
        killSwitch = 100;
    })
}

onClick4();

function onClick5 (){
    unmute.addEventListener('click', function(){
        console.log('Unmute')
        killSwitch = 1;
    })
}

onClick5();

function pattern(){
    for (i=0; i<array2.length;i++){
        if (Number(array2[i]) === metCount){
            console.log('We have a match. On beat: ',array2[i],', the instrument that needs to play is: ', array1[i])
             //hiSound.play();
}
    }
        
}

setInterval(pattern, 1200);







 







