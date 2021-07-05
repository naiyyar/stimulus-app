import { Controller } from "stimulus"

export default class extends Controller {
	static targets = ["source"]
	static values = {index: Number}

	initialize(){
		console.log('initialize called')
	}
  
  connect() {
  	console.log('connect called')
  	if(document.queryCommandSupported('copy')){
  		this.element.classList.add('clipboard--supported')
  	}
  }

  copy(){
  	this.sourceTarget.select();
  	document.execCommand('copy');
  }

}
