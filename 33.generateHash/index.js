// НЕ ДО КОНЦА!!!!!!!!!!!!!!!!!!!!!!!!!



'use strict';

class hashGenerator{
	constructor(hashLength) {
		this.startSymbol = 48;
		this.finishiSymbol = 126;
		if( !isNaN(parseInt(hashLength)) )  {
			this.hashLength = parseInt(hashLength);
			this.generateHash();
		} else {
			this.hash = false;
		}
	}

	generateHash() {

	}
}

let hash = new hashGenerator(10);
