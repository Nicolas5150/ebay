export default class {
    onCreate(input) {
        this.state = {
            data: input.data,
            activePos: null,
            infiniteScroll: input.infiniteScroll || false,
            lastListItem: null
        };

        this.observer = new IntersectionObserver((entries) => {
            const first = entries[0];
            if (first.isIntersecting && this.state.data.length > 0) {
                this.emit("infinite-scroll-reached", { offset: this.state.data.length });
                this.observer.unobserve(this.state.lastListItem);
            }
        });
    }

    onMount() {
        if (this.input.infiniteScroll && this.input.data.length > 0) {
            this.state.lastListItem = document.getElementById('last-list-item');
            this.observer.observe(this.state.lastListItem);
        }
    }

    onUpdate() {
        if (this.input.infiniteScroll &&
            (this.input.data.length > this.state.data.length || this.input.data.length === 10)) {
            this.state.lastListItem = document.getElementById('last-list-item');
            this.state.lastListItem ? this.observer.observe(this.state.lastListItem) : null;
        }

        this.state.data = this.input.data
    }

    onDestroy() {
        this.observer.unobserve(this.state.lastListItem);
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

    copyToClipBoard(url, event) {
        if (event.type === "click" || event.key === "Enter") {
            event.stopPropagation();
            navigator.clipboard.writeText(url);

            event.target.innerText = 'Copied';
            setTimeout(() => {
                event.target.innerText = "Copy"
            }, 1000);
        }
    }

    newTab(url, event) {
        if (event.type === "click" || event.key === "Enter") {
            event.stopPropagation();
            window.open(url, '_blank');
        }
    }
}