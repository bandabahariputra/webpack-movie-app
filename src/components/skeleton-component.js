class SkeletonComponent extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
            <div class="w-full flex flex-wrap">
                <div class="w-1/2 sm:w-1/2 md:w-1/3 lg:w-1/5 mb-4 p-4 flex justify-center">
                    <a href=""
                        class="flex flex-col relative w-full bg-white overflow-hidden card translate-3d-none-after relative w-full bg-white overflow-hidden card translate-3d-none-after rounded border border-gray-300">
                        <div class="relative group text-primary-500" style="padding-top: 70%">
                            <div class="absolute top-0 left-0 h-full w-full"><span
                                    class="skeleton-box group-hover:scale-110 transition-transform transform-center block h-full"></span>
                            </div>
                        </div>
                    </a>
                </div>
                <div class="w-1/2 sm:w-1/2 md:w-1/3 lg:w-1/5 mb-4 p-4 flex justify-center">
                    <a href=""
                        class="flex flex-col relative w-full bg-white overflow-hidden card translate-3d-none-after relative w-full bg-white overflow-hidden card translate-3d-none-after rounded border border-gray-300">
                        <div class="relative group text-primary-500" style="padding-top: 70%">
                            <div class="absolute top-0 left-0 h-full w-full"><span
                                    class="skeleton-box group-hover:scale-110 transition-transform transform-center block h-full"></span>
                            </div>
                        </div>
                    </a>
                </div>
                <div class="w-1/2 sm:w-1/2 md:w-1/3 lg:w-1/5 mb-4 p-4 flex justify-center">
                    <a href=""
                        class="flex flex-col relative w-full bg-white overflow-hidden card translate-3d-none-after relative w-full bg-white overflow-hidden card translate-3d-none-after rounded border border-gray-300">
                        <div class="relative group text-primary-500" style="padding-top: 70%">
                            <div class="absolute top-0 left-0 h-full w-full"><span
                                    class="skeleton-box group-hover:scale-110 transition-transform transform-center block h-full"></span>
                            </div>
                        </div>
                    </a>
                </div>
                <div class="w-1/2 sm:w-1/2 md:w-1/3 lg:w-1/5 mb-4 p-4 flex justify-center">
                    <a href=""
                        class="flex flex-col relative w-full bg-white overflow-hidden card translate-3d-none-after relative w-full bg-white overflow-hidden card translate-3d-none-after rounded border border-gray-300">
                        <div class="relative group text-primary-500" style="padding-top: 70%">
                            <div class="absolute top-0 left-0 h-full w-full"><span
                                    class="skeleton-box group-hover:scale-110 transition-transform transform-center block h-full"></span>
                            </div>
                        </div>
                    </a>
                </div>
                <div class="w-1/2 sm:w-1/2 md:w-1/3 lg:w-1/5 mb-4 p-4 flex justify-center">
                    <a href=""
                        class="flex flex-col relative w-full bg-white overflow-hidden card translate-3d-none-after relative w-full bg-white overflow-hidden card translate-3d-none-after rounded border border-gray-300">
                        <div class="relative group text-primary-500" style="padding-top: 70%">
                            <div class="absolute top-0 left-0 h-full w-full"><span
                                    class="skeleton-box group-hover:scale-110 transition-transform transform-center block h-full"></span>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        `;
    }
}

customElements.define("skeleton-component", SkeletonComponent);