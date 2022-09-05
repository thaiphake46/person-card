const arrImg = [
    [
        './assets/img/resourceDataWeb/layout_2/Anim_1/in41_iv1.jpg',
        './assets/img/resourceDataWeb/layout_2/Anim_1/in41_iv2.jpg',
        './assets/img/resourceDataWeb/layout_2/Anim_1/in41_iv3.jpg',
        './assets/img/resourceDataWeb/layout_2/Anim_1/in41_iv4.jpg'
    ],
    [
        './assets/img/resourceDataWeb/layout_2/Anim_2/in42_iv1.jpg',
        './assets/img/resourceDataWeb/layout_2/Anim_2/in42_iv2.jpg',
        './assets/img/resourceDataWeb/layout_2/Anim_2/in42_iv3.jpg'
    ],
    [
        './assets/img/resourceDataWeb/layout_2/Anim_3/in43_1.jpg',
        './assets/img/resourceDataWeb/layout_2/Anim_3/in43_2.jpg',
        './assets/img/resourceDataWeb/layout_2/Anim_3/in43_3.jpg',
        './assets/img/resourceDataWeb/layout_2/Anim_3/in43_4.jpg'
    ],
    [
        './assets/img/resourceDataWeb/layout_2/Anim_4/in44_iv2.jpg',
        './assets/img/resourceDataWeb/layout_2/Anim_4/in44_iv3.jpg',
        './assets/img/resourceDataWeb/layout_2/Anim_4/in44_iv4.jpg',
        './assets/img/resourceDataWeb/layout_2/Anim_4/in44_iv5.jpg',

    ]
]

/**
 * 
 */

// FUNCTION
// HANDLE NAV BTN
function handleNavBtn() {
    let navBtns = document.querySelectorAll('.nav .nav-btn')
    let contentSections = document.querySelectorAll('.content .content-section')

    navBtns.forEach(function(navBtn, index) {
        let contentSection = contentSections[index]
        navBtn.addEventListener('click', function() {
            document.querySelector('.nav .nav-btn.active').classList.remove('active')
            document.querySelector('.content .content-section.active').classList.remove('active')
            navBtn.classList.add('active')
            contentSection.classList.add('active')
        })
    })
}

handleNavBtn()

// HANDLE ABOUT SLIDE
function aboutSlide() {
    let i = 0
    let j = 0

    let abouts = document.querySelectorAll('.about-section .about-text ul li')
    let imgAbout = document.querySelector('.about-section .about-img img')

    setInterval(function() {
        if(j === arrImg[i].length) {
            j = 0
            ++i
            if(i === arrImg.length) {
                i = 0
            }
            document.querySelector('.about-section .about-text ul li.active').classList.remove('active')
            abouts[i].classList.add('active')
        }
        imgAbout.src = arrImg[i][j]
        ++j
    }, 1500)
}

aboutSlide()