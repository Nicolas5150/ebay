export default class {
    onCreate() {
        this.state = {
            text: null,
        };
    }
    onMount() {
        const { text } = this.input;
        this.state.text = text;
    }
    // https://markojs.com/docs/events/#emitting-custom-events
    clickHandler(event) {
        event.preventDefault();
        if (event.type === "click" || event.key === "Enter") {
            this.emit("button-click", { clicked: true });
        }
    }
}