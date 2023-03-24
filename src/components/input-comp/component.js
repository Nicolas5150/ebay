export default class {
    onCreate(input) {
        this.state = {
            type: input?.type?? "text",
            hidden: input.hidden?? false,
            labelText:  input.labelText?? "label",
            id: null,
            placeholder: input.placeholder?? "",
            value: input.value?? "",
        };
    }
    
    onUpdate() {
        this.state.value = this.input.value;
        this.state.placeholder = this.input.placeholder;
    }

    // https://markojs.com/docs/events/#emitting-custom-events
    inputHandler(event) {
        event.preventDefault();
        this.emit("input-change", { value: event.target.value });
    }
}