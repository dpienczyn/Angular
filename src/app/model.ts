export class Model{
	user;
	items;

	constructor(){
		this.user = "Adam";
		this.items = [new TodoItem("Kupic kwitay", false),
		new TodoItem("Iść do sklepu", false)]
	}
}

export class TodoItem{
	action;
	done;

	constructor(action, done){
		this.action = action;
		this.done = done;
	}
}