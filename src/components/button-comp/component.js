export default class {
    onCreate(input) {
        this.state = {
            text: input?.text ?? 'Button',
        };
    }
    // https://markojs.com/docs/events/#emitting-custom-events
    clickHandler(event) {
        event.preventDefault();
        if (event.type === "click" || event.key === "Enter") {
            this.emit("button-click", { clicked: true });
        }
    }
}