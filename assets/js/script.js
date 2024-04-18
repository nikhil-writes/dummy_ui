function $(id){
  return document.getElementById(id);
}

const text = "Hello World!";

const textElement = $("typed-text");

let currentIdx = 0;

function typeWriter() {
  if (currentIdx < text.length) {
    textElement.textContent += text[currentIdx];
    currentIdx++;
    setTimeout(typeWriter, 150);
  }
}

window.onload =
()=>{
  /*for(let i=0; i<text.length; ++i){
    $('helloworld').innerHTML += text[i];
    setTimeout(1000);
  }*/
  $('menu1-a').classList.add('hidden');
  $('menu1-b').classList.add('hidden');
  $('back').classList.add('hidden');
  typeWriter();
  
};

$('btn1').addEventListener('click',(e)=>{
  console.log(e);
  $('menu1').classList.remove('visible');
  $('menu1').classList.add('hidden');
  $('menu1-a').classList.add('visible');
  $('back').classList.add('visible');
})

$('btn2').addEventListener('click',(e)=>{
  console.log(e);
  $('menu1').classList.remove('visible');
  $('menu1').classList.add('hidden');
  $('menu1-b').classList.add('visible');
  $('back').classList.add('visible');
})

$('btn-back').addEventListener('click',(e)=>{
  console.log(e);
  $('menu1-a').classList.remove('visible');
  $('menu1-b').classList.remove('visible');
  $('back').classList.remove('visible');
  $('menu1-a').classList.add('hidden');
  $('menu1-b').classList.add('hidden');
  $('back').classList.add('hidden');
  $('menu1').classList.add('visible');
})

