import { Controller } from "stimulus"

export default class extends Controller {
  static targets = ['button', 'toggleButton']
	static classes = ['primary']

	addClass(){
    this.buttonTarget.classList.add(this.primaryClass)
  }

  toggleClass(){
   this.toggleButtonTarget.classList.toggle(this.primaryClass) 
  }

}
