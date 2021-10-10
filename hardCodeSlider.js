const slideImg = document.getElementById('slide-img')
const prevBtn = document.querySelector('.button-prev')
const nextBtn = document.querySelector('.button-next')

const imgArr = ["./images/1.jpg", "./images/2.png", "./images/3.png", "./images/4.jpg"]

let currentImgIdx = 0

slideImg.src = imgArr[currentImgIdx]

nextBtn.addEventListener('click', nextClick)
prevBtn.addEventListener('click', prevClick)

function nextClick(e) {
    prevBtn.disabled = false
    currentImgIdx++
    slideImg.src = imgArr[currentImgIdx]
    if(currentImgIdx == imgArr.length -1) {
        nextBtn.disabled = true
    } 
}

function prevClick(e) {
    nextBtn.disabled = false
    currentImgIdx--
    slideImg.src = imgArr[currentImgIdx]
    if(currentImgIdx === 0) {
        prevBtn.disabled = true
    } 

}