import { Controller } from "stimulus";

export default class extends Controller {
	static targets = ['prev', 'current', 'operation', 'number', 'equal']
	
	connect(){
		
	}

	operation(){
		switch(this.operationTarget.innerHTML) {
			case 'AC':
				this.currentTarget.innerHTML = 0
				this.prevTarget.innerHTML = 0
				break;
			case '+':
				this.currentTarget.innerHTML = this.prevTarget.innerHTML + this.currentTarget.innerHTML
			case '-':
				this.currentTarget.innerHTML = this.prevTarget.innerHTML - this.currentTarget.innerHTML
			case '/':
				this.currentTarget.innerHTML = this.prevTarget.innerHTML / this.currentTarget.innerHTML
		}
	}

	number(){
		this.currentTarget.innerHTML = this.numberTarget.innerHTML
	}
}