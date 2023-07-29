const slider = ()=>{

    let hamburger = document.querySelector('.menu');
    let navi = document.querySelector('.navbar')
    hamburger.addEventListener('click',()=>{ 
        navi.classList.toggle("nav-active")


               //BURGER ANIMATION 
               hamburger.classList.toggle("toggle")
    })



    window.onscroll = () => {
        navi.classList.remove("nav-active")
        hamburger.classList.remove("toggle")
    }
}
slider()





// animation









  var tl = anime.timeline({
    targets: '.textfff1',
    delay: function(el, i) { return i * 200 },
    duration: 500, // Can be inherited
    easing: 'easeOutExpo', // Can be inherited
    direction: 'alternate', // Is not inherited
    loop: true // Is not inherited
  });
  
  tl
  .add({
    translateX: 250,
    // override the easing parameter
    easing: 'spring',
  })




  anime({
    targets: '.text1',
    translateX: 250,
    direction: 'alternate',
    // loop: true,
    easing: 'easeInOutQuad'
  });

  anime({
    targets: '.specific-unit-values-demo .el',
    width: '100%', // -> from '28px' to '100%',
    easing: 'easeInOutQuad',
    direction: 'alternate',
    loop: true
  });