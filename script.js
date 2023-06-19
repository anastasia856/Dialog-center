$('a[href*="#"]').click(function(){ 
    let scroll = $(this).attr('href');  
    $('html, body').animate({           
    scrollTop:  $(scroll).offset().top - 50  
    }, 600);                            
});

let sliderLine = document.querySelector('.slider__line'),
    sliderDots = document.querySelectorAll('.slider__dot'),
    sliderDiv = document.querySelectorAll('.reviews_block');

let sliderCount = 0;
let sliderWidth;

window.addEventListener('resize', showSlide);

function showSlide() {
    sliderWidth = document.querySelector('.slider').offsetWidth;
    sliderLine.style.width = sliderWidth * sliderDiv.length + 'px';
    sliderDiv.forEach(item => item.style.width = sliderWidth + 'px');

    rollSlider();
}

showSlide();

function rollSlider() {
    sliderLine.style.transform = `translateX(${-sliderCount * sliderWidth}px)`;
}

function thisSlide(index) {
    sliderDots.forEach(item => item.classList.remove('active-dot'));
    sliderDots[index].classList.add('active-dot');
}

sliderDots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        sliderCount = index;
        rollSlider();
        thisSlide(sliderCount);
    })
})

