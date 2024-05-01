function $(id){
  return document.getElementById(id);
}

let i = 0;
function typeWriter(text="Hello World!"){
  if (i < text.length) {
    $("typed-text").textContent += text[i];
    i++;
    setTimeout(typeWriter, 150);
  }
}

const SIMULATED_LOAD_TIME = 2000;

var screen_number = 0;
var branch = 0

const main = ()=>{
  $('menu1').classList.add('hidden'); 
  $('menu1-a').classList.add('hidden'); 
  $('menu1-b').classList.add('hidden'); 
  $('back-menu').classList.add('hidden');
  $('screen-a').classList.add('hidden');
  $('screen-b').classList.add('hidden');
  $('screen-c').classList.add('hidden');
  $('screen-x').classList.add('hidden');
  $('screen-y').classList.add('hidden');
  $('screen-z').classList.add('hidden');
  $('loader').classList.add('visible');
  setTimeout(() => {
    screen_number = 1;
    $('loader').classList.remove('visible');
    $('loader').classList.add('hidden');
    $('main').style.display = 'block';
    typeWriter();
    //speakText($('typed-text').innerText)
    $('menu1').classList.add('visible')
    //speakText($('btn1').innerText);
    //speakText($('btn2').innerText);
  }, 0); 
};

//window.onload = () => main()

//window.addEventListener('load', main)

document.onreadystatechange = () => {
  if (document.readyState == 'complete') main();
  else if(document.readyState == 'interactive') $('main').style.display = 'none';
  else document.write("I've never seen this before. Tell me if you encounter this.")
}

$('btn1').addEventListener('click',(e)=>{
  console.log("Clicked " + e.target.id);
  $('typed-text').classList.remove('visible');
  $("typed-text").classList.add('hidden')
  $('menu1').classList.remove('visible');
  $('menu1').classList.add('hidden');
  $('loader').classList.remove('hidden');
  $('loader').classList.add('visible');
  setTimeout(() => {
    $('loader').classList.remove('visible');
    $('loader').classList.add('hidden');
    screen_number = 2
    branch = 1
    $('menu1-a').classList.remove('hidden');
    $('menu1-a').classList.add('visible');
    $('btn-home').style.display = 'none';
    $('back-menu').classList.remove('hidden'); 
    $('back-menu').classList.add('visible');
  }, SIMULATED_LOAD_TIME);
});

$('btn2').addEventListener('click',(e)=>{
  console.log("Clicked " + e.target.id);
  $('typed-text').classList.remove('visible');
  $("typed-text").classList.add('hidden')
  $('menu1').classList.remove('visible');
  $('menu1').classList.add('hidden');
  $('loader').classList.remove('hidden');
  $('loader').classList.add('visible');
  setTimeout(() => {
    $('loader').classList.remove('visible');
    $('loader').classList.add('hidden');
    screen_number = 2
    branch = 2  
    $('menu1-b').classList.add('visible');
    $('btn-home').style.display = 'none';
    $('back-menu').classList.remove('hidden');
    $('back-menu').classList.add('visible');
  }, SIMULATED_LOAD_TIME);
});

$('btn-a').addEventListener('click', (e)=>{
  console.log("Clicked " + e.target.id);
  $('menu1-a').classList.remove('visible');
  $('menu1-a').classList.add('hidden');
  $('back-menu').classList.remove('visible');
  $('back-menu').classList.add('hidden');
  $('loader').classList.remove('hidden');
  $('loader').classList.add('visible');
  setTimeout(() => {
    $('loader').classList.remove('visible');
    $('loader').classList.add('hidden');
    screen_number = 3
    branch = 1
    $('screen-a').classList.remove('hidden');
    $('screen-a').classList.add('visible');
    $('btn-home').style.display = 'inline-block';
    $('back-menu').classList.remove('hidden');
    $('back-menu').classList.add('visible');
  }, SIMULATED_LOAD_TIME);
});

$('btn-b').addEventListener('click', (e)=>{
  console.log("Clicked " + e.target.id);
  $('menu1-a').classList.remove('visible');
  $('menu1-a').classList.add('hidden');
  $('back-menu').classList.remove('visible');
  $('back-menu').classList.add('hidden');
  $('loader').classList.remove('hidden');
  $('loader').classList.add('visible');
  setTimeout(() => {
    $('loader').classList.remove('visible');
    $('loader').classList.add('hidden');
    screen_number = 3
    branch = 2
    $('screen-b').classList.remove('hidden');
    $('screen-b').classList.add('visible');
    $('btn-home').style.display = 'inline-block';
    $('back-menu').classList.remove('hidden');
    $('back-menu').classList.add('visible');
  }, SIMULATED_LOAD_TIME);
});

$('btn-c').addEventListener('click', (e)=>{
  console.log("Clicked " + e.target.id);
  $('menu1-a').classList.remove('visible');
  $('menu1-a').classList.add('hidden');
  $('back-menu').classList.remove('visible');
  $('back-menu').classList.add('hidden');
  $('loader').classList.remove('hidden');
  $('loader').classList.add('visible');
  setTimeout(() => {
    $('loader').classList.remove('visible');
    $('loader').classList.add('hidden');
    screen_number = 3
    branch = 3
    $('screen-c').classList.remove('hidden');
    $('screen-c').classList.add('visible');
    $('btn-home').style.display = 'inline-block';
    $('back-menu').classList.remove('hidden');
    $('back-menu').classList.add('visible');
  }, SIMULATED_LOAD_TIME);
});

$('btn-x').addEventListener('click', (e)=>{
  console.log("Clicked " + e.target.id);
  $('menu1-b').classList.remove('visible');
  $('menu1-b').classList.add('hidden');
  $('back-menu').classList.remove('visible');
  $('back-menu').classList.add('hidden');
  $('loader').classList.remove('hidden');
  $('loader').classList.add('visible');
  setTimeout(() => {
    $('loader').classList.remove('visible');
    $('loader').classList.add('hidden');
    screen_number = 3
    branch = 4
    $('screen-x').classList.remove('hidden');
    $('screen-x').classList.add('visible');
    $('btn-home').style.display = 'inline-block';
    $('back-menu').classList.remove('hidden');
    $('back-menu').classList.add('visible');
  }, SIMULATED_LOAD_TIME);
});

$('btn-y').addEventListener('click', (e)=>{
  console.log("Clicked " + e.target.id);
  $('menu1-b').classList.remove('visible');
  $('menu1-b').classList.add('hidden');
  $('back-menu').classList.remove('visible');
  $('back-menu').classList.add('hidden');
  $('loader').classList.remove('hidden');
  $('loader').classList.add('visible');
  setTimeout(() => {
    $('loader').classList.remove('visible');
    $('loader').classList.add('hidden');
    screen_number = 3
    branch = 5
    $('screen-y').classList.remove('hidden');
    $('screen-y').classList.add('visible');
    $('btn-home').style.display = 'inline-block';
    $('back-menu').classList.remove('hidden');
    $('back-menu').classList.add('visible');
  }, SIMULATED_LOAD_TIME);
});

$('btn-z').addEventListener('click', (e)=>{
  console.log("Clicked " + e.target.id);
  $('menu1-b').classList.remove('visible');
  $('menu1-b').classList.add('hidden');
  $('back-menu').classList.remove('visible');
  $('back-menu').classList.add('hidden');
  $('loader').classList.remove('hidden');
  $('loader').classList.add('visible');
  setTimeout(() => {
    $('loader').classList.remove('visible');
    $('loader').classList.add('hidden');
    screen_number = 3
    branch = 6
    $('screen-z').classList.remove('hidden');
    $('screen-z').classList.add('visible');
    $('btn-home').style.display = 'inline-block';
    $('back-menu').classList.remove('hidden');
    $('back-menu').classList.add('visible');
  }, SIMULATED_LOAD_TIME);
});

$('btn-back').addEventListener('click', (e) => {
  
  console.log("Clicked " + e.target.id);
  
  if(screen_number === 3){
    
    if(branch === 1 || branch === 2 || branch === 3){
    
      if(branch === 1){
        $('screen-a').classList.remove('visible');
        $('screen-a').classList.add('hidden');
      } else if(branch === 2){
        $('screen-b').classList.remove('visible');
        $('screen-b').classList.add('hidden');
      } else if(branch === 3){
        $('screen-c').classList.remove('visible');
        $('screen-c').classList.add('hidden');
      } else alert("I don't know what I'm doing here! - A")
      
      $('back-menu').classList.remove('visible');
      $('back-menu').classList.add('hidden');
      $('loader').classList.remove('hidden');
      $('loader').classList.add('visible');
      setTimeout(() => {
        $('loader').classList.remove('visible');
        $('loader').classList.add('hidden');
        screen_number = 2
        branch = 1
        $('menu1-a').classList.remove('hidden');
        $('menu1-a').classList.add('visible');
        $('btn-home').style.display = 'none';
        $('back-menu').classList.remove('hidden');
        $('back-menu').classList.add('visible');
      }, SIMULATED_LOAD_TIME);
    
    }
    else if(branch === 4 || branch === 5 || branch === 6){
    
      if(branch === 4){
        $('screen-x').classList.remove('visible');
        $('screen-x').classList.add('hidden');
      }
      else if(branch === 5){
        $('screen-y').classList.remove('visible');
        $('screen-y').classList.add('hidden');
      }
      else if(branch === 6){
        $('screen-z').classList.remove('visible');
        $('screen-z').classList.add('hidden');
      }
      else alert("I don't know what I'm doing here either! - B")

      $('back-menu').classList.remove('visible');
      $('back-menu').classList.add('hidden');
      $('loader').classList.remove('hidden');
      $('loader').classList.add('visible');
      setTimeout(() => {
        $('loader').classList.remove('visible');
        $('loader').classList.add('hidden');
        screen_number = 2
        branch = 2
        $('menu1-b').classList.remove('hidden');
        $('menu1-b').classList.add('visible');
        $('btn-home').style.display = 'none';
        $('back-menu').classList.remove('hidden');
        $('back-menu').classList.add('visible');
      }, SIMULATED_LOAD_TIME);
    }
  }
  else if(screen_number === 2){
  
    if(branch === 1){
      $('menu1-a').classList.remove('visible');
      $('menu1-a').classList.add('hidden');
    }
    else if(branch === 2){
      $('menu1-b').classList.remove('visible');
      $('menu1-b').classList.add('hidden');      
    }
    else alert("What am I doing here? - ABBA")
      
    $('back-menu').classList.remove('visible');
    $('back-menu').classList.add('hidden');
    $('loader').classList.remove('hidden');
    $('loader').classList.add('visible');
    setTimeout(() => {
      $('loader').classList.remove('visible');
      $('loader').classList.add('hidden');
      screen_number = 1
      branch = 1 
      $("typed-text").classList.remove('hidden');
      $("typed-text").classList.add('visible');
      $('menu1').classList.remove('hidden'); 
      $('menu1').classList.add('visible');
    }, SIMULATED_LOAD_TIME);
  }
  else alert("The UI flow has broken unexpectedly");
});

$('btn-home').addEventListener('click', (e) => {
  console.log("Clicked " + e.target.id);
  if(screen_number === 3){
    if(branch ===  1){
      $('screen-a').classList.remove('visible');
      $('screen-a').classList.add('hidden');
    } else if(branch ===  2){
      $('screen-b').classList.remove('visible');
      $('screen-b').classList.add('hidden');
    } else if(branch ===  3){
      $('screen-c').classList.remove('visible');
      $('screen-c').classList.add('hidden');
    } else if(branch ===  4){
      $('screen-x').classList.remove('visible');
      $('screen-x').classList.add('hidden');
    } else if(branch ===  5){
      $('screen-y').classList.remove('visible');
      $('screen-y').classList.add('hidden');
    } else if(branch ===  6){
      $('screen-z').classList.remove('visible');
      $('screen-z').classList.add('hidden');
    } else alert("Unexpected branch on screen 3")
  } else alert("The home button was not supposed to be on this screen!")
  $('btn-home').style.display = 'none';
  $('back-menu').classList.remove('visible');
  $('back-menu').classList.add('hidden');
  $('loader').classList.remove('hidden');
  $('loader').classList.add('visible');
  setTimeout(() => {
    $('loader').classList.remove('visible');
    $('loader').classList.add('hidden');
    screen_number = 1
    branch = 1 
    $("typed-text").classList.remove('hidden');
    $("typed-text").classList.add('visible');
    $('menu1').classList.remove('hidden'); 
    $('menu1').classList.add('visible');
  }, SIMULATED_LOAD_TIME);
});