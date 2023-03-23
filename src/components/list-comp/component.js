export default class {
    onCreate() {
        this.state = {
            data: [],
            activePos: null
        };
    }
    onMount() {
        this.state.data = this.input.data
    }
    onUpdate() {
        this.state.data = this.input.data
    }
    setActivePos(idx, event) {
        event.stopPropagation();
        if (event.type === "click" || event.key === "Enter") {
            if (idx === null || this.state.activePos === idx) {
                this.state.activePos = null;
            } else {
                event.target.scrollIntoView({ 
                    behavior: "smooth", 
                    block: "center", 
                    inline: "nearest" 
                });
                this.state.activePos = idx;
            }
        }
    }
    newTab(url, event) {
        if (event.type === "click" || event.key === "Enter") {
            event.stopPropagation();
            window.open(url, '_blank');
        }
    }
}