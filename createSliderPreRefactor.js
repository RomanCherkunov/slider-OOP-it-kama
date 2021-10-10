const sliderFactory = {
  createSlider: function () {
    const newSlider = {
      imgArr: [
        './images/1.jpg',
        './images/2.png',
        './images/3.png',
        './images/4.jpg',
      ],
      currentImgIdx: 0,
      // container: document.querySelector('#slider-1'),
      prevBtn: null,
      nextBtn: null,
      slideImg: null,

      init: function (elID) {
        const ctx = this
        const container = document.querySelector(`#${elID}`)
        this.slideImg = container.querySelector('img')
        this.prevBtn = container.querySelector('.button-prev')
        this.nextBtn = container.querySelector('.button-next')

        this.slideImg.src = this.imgArr[this.currentImgIdx]
        this.prevBtn.disabled = true

        this.nextBtn.addEventListener('click', (e) => ctx.nextClick(e))
        this.prevBtn.addEventListener('click', (e) => ctx.prevClick(e))
      },

      nextClick: function (e) {
        this.prevBtn.disabled = false
        this.currentImgIdx++
        this.slideImg.src = this.imgArr[this.currentImgIdx]
        if (this.currentImgIdx == this.imgArr.length - 1) {
          this.nextBtn.disabled = true
        }
      },

      prevClick: function (e) {
        this.nextBtn.disabled = false
        this.currentImgIdx--
        this.slideImg.src = this.imgArr[this.currentImgIdx]
        if (this.currentImgIdx === 0) {
          this.prevBtn.disabled = true
        }
      },
    }
    return newSlider
  },
}
