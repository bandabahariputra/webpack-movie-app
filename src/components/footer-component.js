class FooterComponent extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
            <div class="p-4 text-center text-gray-700 text-sm flex flex-col lg:flex-row justify-between">
                <p class="py-1">Powered by <a href="http://www.omdbapi.com/" target="_blank" class="font-medium">OMDb
                        API</a>.</p>
                <p class="py-1">Made with &hearts; by <a href="https://bandabahariputra.now.sh/" target="_blank"
                        class="font-medium">Banda Bahari Putra</a>.</p>
            </div>
        `;
    }
}

customElements.define("footer-component", FooterComponent);