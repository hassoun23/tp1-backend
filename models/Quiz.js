export class Quiz {
	constructor(questions) {
		this.questions = questions;
		this.score = 0;
		this.questionIndex = 0;
	}

	getCurrentQuestion() {
		return this.questions[this.questionIndex];
	}

	validateAndContinue(answer) {
		if (answer === 'Genial') {
			this.score = this.score + 10;
		} else if (answer === 'Mas o menos') {
			this.score = this.score + 5;
		} else if (answer === 'No me gustó') {
			this.score = this.score + 3;
		} else if (answer === 'Es dinámico') {
			this.score = this.score + 3;
		} else if (answer === 'Mantiene la atención y el interés') {
			this.score = this.score + 3;
		} else if (answer === 'Explica de mala forma') {
			this.score = this.score + 3;
		} else if (answer === 'No se entiende cuando explica') {
			this.score = this.score + 2;
		} else if (answer === 'Brindar más ejemplos y casos') {
			this.score = this.score + 2;
		} else if (answer === 'Explicar más lento y de manera clara') {
			this.score = this.score + 2;
		} else if (answer === 'Ninguna de las anteriores') {
			this.score = this.score + 1;
		}

		this.questionIndex++;
	}

	isEnded() {
		return this.questions.length === this.questionIndex;
	}
}
