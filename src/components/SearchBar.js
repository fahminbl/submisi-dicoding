class SearchBar extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.render();
    }

    set submitEvent(event) {
        this._submitEvent = event;
        this.render();
    }

    get value() {
        return this.querySelector('#searchElement').value
    }

    render() {
        this.innerHTML =
            `
        <div class="flex mt-4 flex-row lg:justify-start justify-between p-4 mx-2">
        <div><p class="text-base mt-2 md:text-3xl md:mt-0 lg:ml-8 font-bold ml-1 rounded-md text-white">Cyber News</p></div>
        <div>
            <form id="submitElement" action="submit">  
            <input id="searchElement" class="p-2 text-white w-36 bg-slate-400/20 lg:ml-4 rounded-md shadow-sm" type="text" name="search" placeholder="Search">
            </form>
        </div>
        <div class="p-2 w-12 text-center text-white md:relative md:right-56 lg:static lg:ml-2 hover:bg-sky-500 hover:text-slate-900 rounded-md bg-slate-500/20">
            <a href="">X</a>
        </div>
    </div>
    `
    this.querySelector('#submitElement').addEventListener('submit', this._submitEvent);
    }
}

customElements.define('search-bar', SearchBar);

