class NavbarComponent extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
            <nav class="flex flex-col lg:flex-row items-center justify-between flex-wrap p-6">
                <div class="flex items-center flex-shrink-0 text-white mr-6">
                    <svg width="30px" height="24px" viewBox="0 0 20 16" version="1.1" xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink">
                        <!-- Generator: Sketch 52.5 (67469) - http://www.bohemiancoding.com/sketch -->
                        <title>movie_filter</title>
                        <desc>Created with Sketch.</desc>
                        <g id="Icons" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                            <g id="Two-Tone" transform="translate(-714.000000, -2860.000000)">
                                <g id="Image" transform="translate(100.000000, 2626.000000)">
                                    <g id="Two-Tone-/-Image-/-movie_filter" transform="translate(612.000000, 230.000000)">
                                        <g>
                                            <polygon id="Path" points="0 0 24 0 24 24 0 24"></polygon>
                                            <path
                                                d="M16.63,11.37 L18,12 L16.63,12.63 L16,14 L15.37,12.63 L14,12 L15.37,11.37 L16,10 L5.77,10 L4.01,6.47 L4.01,18 L20.01,18 L20.01,10 L16,10 L16.63,11.37 Z M10.94,14.94 L10,17 L9.06,14.94 L7,14 L9.06,13.06 L10,11 L10.94,13.06 L13,14 L10.94,14.94 Z"
                                                id="🔹-Secondary-Color" fill="#D0D0D0"></path>
                                            <path
                                                d="M10,11 L9.06,13.06 L7,14 L9.06,14.94 L10,17 L10.94,14.94 L13,14 L10.94,13.06 L10,11 Z M18.01,4 L20.01,8 L17.01,8 L15.01,4 L13.01,4 L15.01,8 L12.01,8 L10.01,4 L8.01,4 L10.01,8 L7.01,8 L5.01,4 L4.01,4 C2.91,4 2.02,4.9 2.02,6 L2.01,18 C2.01,19.1 2.91,20 4.01,20 L20.01,20 C21.11,20 22,19.1 22,18 L22,4 L18.01,4 Z M20.01,18 L4.01,18 L4.01,6.47 L5.77,10 L16,10 L15.37,11.37 L14,12 L15.37,12.63 L16,14 L16.63,12.63 L18,12 L16.63,11.37 L16,10 L20.01,10 L20.01,18 Z"
                                                id="🔹-Primary-Color" fill="#1D1D1D"></path>
                                        </g>
                                    </g>
                                </g>
                            </g>
                        </g>
                    </svg>
                    <span class="font-semibold text-2xl tracking-tight text-black ml-2 navtitle">Movie App</span>
                </div>
                <div class="flex justify-center w-full lg:w-1/2 mt-4 lg:mt-0">
                    <div class="w-full">
                        <input
                            class="transition-colors duration-100 ease-in-out bg-gray-300 focus:bg-white focus:outline-0 border border-transparent placeholder-gray-600 rounded-lg py-2 px-4 block w-full appearance-none leading-normal ds-input"
                            type="text"
                            placeholder="Search movies (Press &quot;/&quot; to focus then &quot;Enter&quot; to search)"
                            style="position: relative; vertical-align: top;" id="keyword">
                    </div>
                </div>
            </nav>
        `;
    }
}

customElements.define("navbar-component", NavbarComponent);