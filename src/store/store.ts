
export class Store{
  private reducers : {[key : string] : Function};
  private state : {[key:string] : any};
  private subscribers : Function[];
  constructor(reducers = {}, initalState={}) {
    this.state = initalState
    this.reducers = reducers
    this.subscribers = []
  }

  get value(){
    return this.state
  }

  subscribe(func){
    this.subscribers = [...this.subscribers, func];
    this.notify()
  }

  dispatch(action : any){
    this.state = this.reduce(this.state, action)
    console.log("state : ", this.state);
  }

  private reduce(state, action) {
    console.log("Initial State : ", state);
    var newState = {};
    for(let prop in this.reducers){
     newState[prop] = this.reducers[prop](state[prop], action)
    }
    return newState;
  }

  private notify() {
    this.subscribers.forEach(func => func(this.value))
  }
}
