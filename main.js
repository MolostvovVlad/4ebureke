let vopros = document.querySelectorAll(".vopros");
    let b0 = document.querySelectorAll(".b0");
    let b1 = document.querySelectorAll(".b1");
    let b2 = document.querySelectorAll(".b2");
    let b3 = document.querySelectorAll(".b3");
    let b = 0 ;
    let t = true;
    let f = false;


    for(let index = 0; index<5 index = index + 1){
      b0[index].onclick = function(){
        b0[index].style.display = "none";
        func(0)
      }
    }
    for(let index = 0; index<b1; index = index + 1){
      b1[index].onclick = function(){
        func(1)
      }
    }
    for(let index = 0; index<b2; index = index + 1){
      b2[index].onclick = function(){
        func(2)      
      }
    }
    for(let index = 0; index<b3; index = index + 1){
      b3[index].onclick = function(){
        func(3)      
      }
    }

    let func = function(arg) { 
      b = b + arg;
}
  for(let i = 0; i<10; i = i + 1){
      b0[i].onclick = function(){
        vopros[i].style.display = "none";
      }
      b1[i].onclick = function(){
        vopros[i].style.display = "none";
      }
      b2[i].onclick = function(){
        vopros[i].style.display = "none";
      }
      b3[i].onclick = function(){
        vopros[i].style.display = "none";
      }
}
  if(){

  }
      $(window).on('load',function(){
      $('.preloader').delay(1000).fadeOut('slow')
    });