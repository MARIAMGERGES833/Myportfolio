document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });


  document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(link => {
      link.addEventListener('click', function() {
        navLinks.forEach(link => link.classList.remove('active'));
        this.classList.add('active');
      });
    });
  });



  // //================caresol=============
  // $(window).load(function() {
  //   $('.flexslider').flexslider({
  //     animation: "slide",
  //     animationLoop: true,
  //     itemWidth: 210,
  //     itemMargin: 5,
  //     minItems: 2,
  //     maxItems: 12
  //   });
  // });






  //========================================show more images when hover by mouse in project :)
document.addEventListener("DOMContentLoaded", function () {
    function initializeImageHoverEffect(imageContainerId, imageArray, defaultImage) {
      const hoverImage = document.querySelector(`#${imageContainerId} .hover-img`);
      let currentIndex = 0;
      let intervalId;
  
      function startImageSequence() {
        intervalId = setInterval(function () {
          currentIndex = (currentIndex + 1) % imageArray.length;
          hoverImage.src = imageArray[currentIndex];
        }, 1000); // Change image every 1 second
      }
  
      function stopImageSequence() {
        clearInterval(intervalId);
        hoverImage.src = defaultImage; // Reset to the default image
      }
  
      hoverImage.addEventListener('mouseover', startImageSequence);
      hoverImage.addEventListener('mouseleave', stopImageSequence);
    }
  
    
    initializeImageHoverEffect('image-container-1', [
      'images/projects/ecommerce1a.png',
      'images/projects/ecommerce1b.png',
      'images/projects/ecommerce1c.png',
      'images/projects/ecommerce1d.png',
      'images/projects/ecommerce1e.png'
    ], 'images/projects/ecommerce1.png');
  
    initializeImageHoverEffect('image-container-2', [
      'images/projects/oop1.png',
      'images/projects/oop2.png',
      'images/projects/oop3.png',
      'images/projects/oop4.png',
      'images/projects/oop5.png',
      'images/projects/oop6.png',
      'images/projects/oop7.png',
      'images/projects/oop8.png',
      'images/projects/oop9.png',
      'images/projects/oop10.png'
    ], 'images/projects/oop1.png');


    initializeImageHoverEffect('image-container-3', [
        'images/belleChic/p1.png',
        'images/belleChic/p2.png',
        'images/belleChic/p3.png',
        'images/belleChic/p4.png',
        'images/belleChic/p5.png',
        'images/belleChic/p6.png',
        'images/belleChic/p8.png',
        'images/belleChic/p9.png',
        'images/belleChic/p10.png',
        'images/belleChic/p11.png',
        'images/belleChic/p12.png',
        'images/belleChic/p14.png',
        'images/belleChic/p15.png',
        'images/belleChic/p7.png',
       
      ],  'images/belleChic/p1.png');


      initializeImageHoverEffect('image-container-4', [
        'images/projects/framwork1.png',
        'images/projects/framwork2.png',
        'images/projects/framwork3.png',
        'images/projects/framwork4.png',
       
      ],  'images/projects/framwork1.png');
      


      initializeImageHoverEffect('image-container-5', [
        'images/projects/dev1.png',
        'images/projects/dev2.png',
        'images/projects/dev3.png',
        'images/projects/dev4.png',
        'images/projects/dev5.png',
      
       
      ],  'images/projects/dev1.png');
      

      initializeImageHoverEffect('image-container-6', [
        'images/happyflower/f2.png',
        'images/happyflower/f1.png',
        'images/happyflower/f3.png',
        'images/happyflower/f4.png',
        'images/happyflower/f5.png',
        'images/happyflower/f6.png',
        'images/happyflower/f7.png',
        'images/happyflower/f8.png',
        'images/happyflower/f9.png',
        'images/happyflower/f10.png',
        'images/happyflower/f11.png',
     
      
       
      ],  'images/happyflower/f1.png');

      
      

  });
  











//================================animate works
document.addEventListener('DOMContentLoaded', function () {
  const leftCols = document.querySelectorAll('.col-left');
  const h2 = document.querySelector('.works h2');
  const middleCols = document.querySelectorAll('.col-middle');

  function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  function handleScroll() {
    leftCols.forEach(col => {
      if (isElementInViewport(col)) {
        col.classList.add('animate-top');
        col.classList.remove('hidden');
      }
    });

   

    middleCols.forEach(col => {
      if (isElementInViewport(col)) {
        col.classList.add('animate-bottom');
        h2.classList.add('animate-bottom');
        col.classList.remove('hidden');
      }
    });
  }

  window.addEventListener('scroll', handleScroll);
});







  //=============================by click up
 
  $(window).scroll(function(){
    let windowTop = $(window).scrollTop();
    let section2Offset = $("#about").offset().top;
   
    // console.log(windowTop, section2Offset);
    if(windowTop > section2Offset - 200 ){
        //===================appear btnUp==========
        $("#btnUp").fadeIn(500);
    } else {
        //===================disappear "#btnUp"==========
        $("#btnUp").fadeOut(500);
    }
});