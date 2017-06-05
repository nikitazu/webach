import * as domain from './domain.js';

export default function Chord(text) {
	this.text = text;
  this.increment = function () {
    this.text = domain.incrementChordValue(this.text);
  };
};
