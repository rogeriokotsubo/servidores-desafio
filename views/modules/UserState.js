export default class UserState {
    #state
    constructor (_state){
        this.#state = _state;
    };

    get state() {
        return this.#state;
    }
    set state(_state) {
        this.#state=_state;        
    }
}