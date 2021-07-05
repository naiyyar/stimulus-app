import { Controller } from 'stimulus'

export default class extends Controller {

	static targets = ["slide"]
	static values = { index: Number}

	initialize(){
		// this.showCurrentSlide()
	}

	previous(){
		this.indexValue--
		this.showCurrentSlide()
	}

	next(){
		this.indexValue++
		this.showCurrentSlide()
	}

	showCurrentSlide(){
		console.log(this.slideTarget)
		this.slideTargets.forEach((elem, index) => {
			elem.classList.remove('current')
			if(parseInt(elem.dataset.index) == index){
				elem.classList.add('current')
			}
		});
	}

}