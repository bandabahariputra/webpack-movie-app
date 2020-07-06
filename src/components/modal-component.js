class ModalComponent extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
            <div class="modal opacity-0 pointer-events-none fixed w-full h-full top-0 left-0 flex items-center justify-center">
                <div class="modal-overlay absolute w-full h-full bg-gray-900 opacity-50"></div>

                <div
                    class="modal-container bg-white w-11/12 sm:w-11/12 md:w-4/5 lg:w-4/5 mx-auto rounded shadow-lg z-50 overflow-y-auto">

                    <!-- Add margin if you want to see some of the overlay behind the modal-->
                    <div class="modal-content py-4 text-left px-6">
                        <!--Title-->
                        <div class="flex justify-end items-center pb-3">
                            <div class="modal-close cursor-pointer z-50">
                                <svg class="fill-current text-black" xmlns="http://www.w3.org/2000/svg" width="18" height="18"
                                    viewBox="0 0 18 18">
                                    <path
                                        d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z">
                                    </path>
                                </svg>
                            </div>
                        </div>

                        <!--Body-->
                        <div class="flex md:flex-col lg:flex-row">
                            <div
                                class="flex-initial min-w-1/4 hidden lg:flex text-gray-700 text-center bg-gray-600 p-1 rounded-md">
                                <img src="" class="rounded-md" id="modal-poster">
                            </div>
                            <div class="flex-initial md:w-full lg:w-2/3 text-gray-700 p-1 ml-4">
                                <p class="font-semibold text-xl mb-2" id="modal-title"></p>
                                <hr>
                                <div class="flex my-2">
                                    <div class="flex-none mr-2 font-medium">Rating :</div>
                                    <div class="flex-initial" id="modal-rating"></div>
                                </div>
                                <div class="flex my-2">
                                    <div class="flex-none mr-2 font-medium">Year :</div>
                                    <div class="flex-initial" id="modal-year"></div>
                                </div>
                                <div class="flex my-2">
                                    <div class="flex-none mr-2 font-medium">Released :</div>
                                    <div class="flex-initial" id="modal-released"></div>
                                </div>
                                <div class="flex my-2">
                                    <div class="flex-none mr-2 font-medium">Genres :</div>
                                    <div class="flex-initial" id="modal-genres"></div>
                                </div>
                                <div class="flex my-2">
                                    <div class="flex-none mr-2 font-medium">Writer :</div>
                                    <div class="flex-initial" id="modal-writer"></div>
                                </div>
                                <div class="flex my-2">
                                    <div class="flex-none mr-2 font-medium">Actors :</div>
                                    <div class="flex-initial" id="modal-actors"></div>
                                </div>
                                <div class="flex flex-col my-2">
                                    <div class="flex-none mr-2 font-medium">Plots :</div>
                                    <div class="flex-initial" id="modal-plot"></div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        `;
    }
}

customElements.define("modal-component", ModalComponent);