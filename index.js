
/* for learning JS - DELETE*/

window.onload = function() {
//radio-button
    addRadioButtonClickHandler();
// burger
    selectedBurger();
// About carousel
    addCarret();
    console.log('deploy test')
}


// Favorites radio-button
const addRadioButtonClickHandler = () => {
    document.querySelector(".radio-button").addEventListener('click', (event) => {
        if (event.target.classList.contains('favorites-label')) {
           console.log(event); /*DELETE!*/
            let clickedButton = event.target;
            removeActiveButton();
            selectedButton(clickedButton);
            showSeasonBooks(clickedButton.innerText.toLowerCase().trim())
        };
    })
}

// label_active - название после крыжика Winter выделено жирным
const removeActiveButton = () => {
    let radioButtons = document.querySelectorAll('.favorites-label');
    console.log(radioButtons); /*DELETE!*/
    radioButtons.forEach(button => {
        button.classList.remove('label_active');
        button.classList.add('label_inactive');
    })
}

// label_active - название после крыжика Winter выделено жирным 
const selectedButton = (clickedButton) => {
    clickedButton.classList.add('label_active');
    clickedButton.classList.remove('label_inactive')
}

const showSeasonBooks = (selected) => {
    let seasons = document.querySelectorAll('.season');
    seasons.forEach((season) => switchBooks(season, selected));  
    /*в forEach передана функция, которая будет работать 
    с каждым season из списка, она будет вызывать Ф.switchBooks и передавать в нее текущий сезон и выбранный*/
}

const switchBooks = (season, selected) => {
    if (season.classList.contains(selected)) {
        season.classList.remove('invisible');

        // завершает работу функции и возвращает пустоту, вместо else
        return;
    }

    season.classList.add('invisible');
}



//Burger handler 
// обратитться на Burger и подвесить обработчик событий


const selectedBurger = () => {
    document.querySelector('.burger').addEventListener('click', () => {
        const nav = document.querySelector('.nav');
        nav.classList.add('nav-opened')
    })


    document.querySelector('.nav-close').addEventListener('click', closeMenu)
    document.querySelectorAll('.nav-item').forEach(navItem => navItem.addEventListener('click', closeMenu))
}

function closeMenu() {
    const nav = document.querySelector('.nav');
    nav.classList.remove('nav-opened')
}


//Функциональность карусели в секции About

function addCarret() {
    const abCarretLeft = document.querySelector(".ab-carret-left"); 
    const abCarretRight = document.querySelector(".ab-carret-right");
    const abCarousel = document.querySelector(".images-items");
    // const carouselButton = document.querySelectorAll(".carousel_3 .carousel-button");
    const abImages = document.querySelectorAll(".ab-image");
    const carouselButtons = document.querySelectorAll(".carousel-button");

    const slide1 = [abImages[0], abImages[1], abImages[2]];
    const slide2 = [abImages[1], abImages[2], abImages[3]];
    const slide3 = [abImages[2], abImages[3], abImages[4]];
    const slides = [slide1, slide2, slide3];

    let index = (slides.length-2); // текущий слайд, от индекса зависит положение активного слайда
   
    

    const activeSlide = (n) => {
        abImages.forEach (abImage => {
            abImage.classList.remove("iteme-active");
        })
        for (slide of slides) {
            slide[n].classList.add("iteme-active");
        }
    
        
    }       

    const activeCariuselButton = n => {
        for(carouselButton of carouselButtons) {
            carouselButton.classList.remove("active");
        } 
        carouselButtons[n].classList.add("active");
    }
    
    const currentSlide = (ind) => {
        activeSlide(ind);
        activeCariuselButton(ind);
    }

    const moveLeft = () => {
        abCarousel.classList.add("transition-left"); // анимация css
        abCarretLeft.removeEventListener ("click", moveLeft); //исключить задвоение классов  transition вправо и влево
        abCarretLeft.removeEventListener ("click", moveRight); //исключить задвоение классов  transition вправо и влево
        
    

        // цикличное переключение по кругу:
        if(index === 0) {  
            index = slides.length - 1;
            currentSlide(index);
        } else {
            index--;
            currentSlide(index);
        }
    }
        

    const moveRight = () => {
        abCarousel.classList.add("transition-right");
        abCarretRight.removeEventListener ("click", moveLeft); //исключить задвоение классов  transition вправо и влево
        abCarretRight.removeEventListener ("click", moveRight); //исключить задвоение классов  transition вправо и влево

        // цикличное переключение по кругу:
        if(index == slides.length - 1) {
            index = 0;
            currentSlide(index);
        } else {
            index++;
            currentSlide(index);
        }

 
    };

    carouselButtons.forEach((dot, indexDot) => {
        dot.addEventListener("click", () => {
            index = indexDot;
            currentSlide(index);
        });
    });


    abCarretLeft.addEventListener ("click", moveLeft);

    abCarretRight.addEventListener ("click", moveRight);


    // const itemeLeft = document.getElementById("iteme-left");
    // const itemeRight = document.getElementById("iteme-right");

    // abCarousel.addEventListener ("animationend", (animationEvent) => {
    //     let changedSlide;
    //     if (animation.animationName === "move-left") {
    //         abCarousel.classList.remove("transition-left"); // разрешить повторное нажатие каретки и убрали одновременное направление влева и вправо
    //         changedSlide = itemeLeft; //////2407
    //         document.querySelector("#iteme-active").innerHTML = itemeLeft.innerHTML;/////2407

    //     } else {
    //         abCarousel.classList.remove("transition-right"); // разрешить повторное нажатие каретки и убрали одновременное направление влева и вправо
    //         changedSlide = itemeRight;////2407
    //         document.querySelector("#iteme-active").innerHTML = itemeLeft.innerHTML;////2407
    //     }
        
        



    //     abCarretLeft.addEventListener ("click", moveLeft); 
    //     abCarretRight.addEventListener ("click", moveRight); 
    // });
}

//    let changedSlide;
//         if (animationEvent.animationName === "move-left") {
//             
//             changedSlide = abCarretLeft;
            
//             document.querySelectorAll("#item-active").innerHTML = abCarretLeft.innerHTML;
//         } else {
//             abCarousel.classList.remove("transition-right"); // разрешить повторное нажатие каретки
//             changedSlide = abCarretRight;
//             document.querySelectorAll("#item-active").innerHTML = abCarretRight.innerHTML;
//         }
  




// let isEnbled = true; /////// задержка анимации, как только анимация закончится - false

    // let currentSlides = index; //////текущий слайд
    
    // function changeCurrentSlides(n) { //////
    //     currentSlides = (n + slides.length-2) % slides.length;
    //     console.log (currentSlides);
    // }
    // console.log (currentSlides);

    // function hideSlides(direction) { ///////
    //     isEnbled = false;
    //     slides[currentSlides].classList.add(direction);
    //     slides[currentSlides].addEventListener("animationend", function() {
    //         this.classList.remove("iteme-active", direction);
    //     });
    // }

    // function showSlides(direction) { ///////
    //      slides[currentSlides].classList.add("next", direction);
    //     slides[currentSlides].addEventListener("animationend", function() {
    //             this.classList.remove("next", direction);
    //             this.classList.add("iteme-active");
    //             isEnbled = true;
    //     });
    // }


    // function nextSlides(n) { //////
    //     hideSlides("to-left");
    //     changeCurrentSlides(n + 1);
    //     showSlides("from-right");
    // }

    // function previousSlides(n) {  ///////
    //     hideSlides("to-right");
    //     changeCurrentSlides(n - 1);
    //     showSlides("from-left");
    // }

    // abCarretLeft.addEventListener("click", function() { /////
    //     if (isEnbled) {
    //         previousSlides(currentSlides);
    //     }
    // })

    // abCarretRight.addEventListener("click", function() { /////
    //     if (isEnbled) {
    //         nextSlides(currentSlides);
    //     }
    // })