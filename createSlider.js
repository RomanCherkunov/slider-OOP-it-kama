function Slider() {

  this.prevBtn = null;
  this.nextBtn = null;
  this.slideImg = null;

  this._logic = new SliderLogic()

  this.init = function(elID) {
    const ctx = this
    const container = document.querySelector(`#${elID}`)
    container.innerHTML = `<button class="button button-prev"><</button>
                             <img id="slide-img" class="picture" src="" alt="img">
                            <button class="button button-next">></button>`
    this.slideImg = container.querySelector('img')
    this.prevBtn = container.querySelector('.button-prev')
    this.nextBtn = container.querySelector('.button-next')

    this.slideImg.src = this._logic.imgArr[this._logic.currentImgIdx]
    this.prevBtn.disabled = true

    this.nextBtn.addEventListener('click', (e) => ctx.nextClick(e))
    this.prevBtn.addEventListener('click', (e) => ctx.prevClick(e))
  };

  this.nextClick = function(e) {
    this.prevBtn.disabled = false
    this._logic.currentImgIdx++
    this.slideImg.src = this._logic.imgArr[this._logic.currentImgIdx]
    if (this._logic.currentImgIdx == this._logic.imgArr.length - 1) {
      this.nextBtn.disabled = true
    }
  };

  this.prevClick = function(e) {
    this.nextBtn.disabled = false
    this._logic.currentImgIdx--
    this.slideImg.src = this._logic.imgArr[this._logic.currentImgIdx]
    if (this._logic.currentImgIdx === 0) {
      this.prevBtn.disabled = true
    }
  };
}

