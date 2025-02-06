export default class GoalModel {
  #id;
  #text;
  #source;
  #date;
  #isDone;

  constructor(id, text, source, date, isDone) {
    this.#id = id;

    this.#text = text;
    this.#source = source;
    this.#date = date;
    this.#isDone = isDone;
  }

  getId() {
    return this.#id;
  }

  getText() {
    return this.#text;
  }

  getSource() {
    return this.#source;
  }

  getDate() {
    return this.#date;
  }

  getIsDone() {
    return this.#isDone;
  }

  setId(value) {
    return (this.#id = value);
  }

  setText(value) {
    return (this.#text = value);
  }

  setSource(value) {
    return (this.#source = value);
  }

  setDate(value) {
    return (this.#date = value);
  }

  setIsDone(value) {
    return (this.#isDone = value);
  }
}
