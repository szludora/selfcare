import goalList from "../models/goalList.json"

export default class GoalsModel{
    #list = []

    constructor(){
        this.#list = goalList.goals
    }

    getList(){
        return this.#list
    }

    setList(list){
        this.#list = list
    }

    pushToList(element){
        //this.#list.push(element)
        this.#list = [...this.#list, element]
    }

    changeElement(index, value){
        this.#list[index] = value
    }

    changeElementStatus(index){
        let prev = this.#list[index].isDone;

        this.#list[index].isDone = !prev;
    }

    getDoneList(){
        let count = 0;

        this.#list.forEach(element => {
            if(element.isDone) {
                count++
            } 
        });

        return count

    }
}