class SearchBar extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML =
            `
        <div class="flex mt-4 flex-row lg:justify-start justify-between p-4 mx-2">
        <div><p class="text-3xl lg:ml-8 font-bold ml-1 rounded-md text-white">Cyber News</p></div>
        <div>
            <form action="submit">  
            <input class="p-2 bg-slate-400/20 lg:ml-4 rounded-md shadow-sm" type="text" name="search" placeholder="Search" id="">
            </form>
        </div>
    </div>
    `
    }
}

customElements.define('search-bar', SearchBar);

