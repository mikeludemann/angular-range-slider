import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';

@Component({
	encapsulation: ViewEncapsulation.None,
	selector: 'range-slider',
	templateUrl: './range-slider.component.html',
	styleUrls: ['./range-slider.component.css']
})
export class RangeSliderComponent implements OnInit {

	@Input() ngStyle: { [key: string]: string; }

	@Input() name: string;
	@Input() id: string;
	@Input() min: string;
	@Input() max: string;
	@Input() step: string;

	constructor() { }

	ngOnInit() {
	}

	onSearchChange(searchValue: string): void { 
		console.log(searchValue);
	}

}
