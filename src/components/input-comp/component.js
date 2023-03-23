export default class {
    onCreate() {
        this.state = {
            type: "text",
            hidden: false,
            labelText: "",
            id: null,
            placeholder: "",
            value: ""
        };
    }
    onMount() {
        this.state = Object.assign(this.state, this.input)
    }
    onUpdate() {
        this.state.value = this.input.value;
    }
    // https://markojs.com/docs/events/#emitting-custom-events
    inputHandler(event) {
        event.preventDefault();
        this.emit("input-change", { value: event.target.value });
    }
}