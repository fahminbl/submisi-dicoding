class NewsItem extends HTMLElement {
    constructor() {
        super()
    }

    set item(item) {
        this._item = item;
        this.render();
    }

    set item2(item) {
        this._item2 = item;
        this.implant();
    }

    renderError(message) {
        this.innerHTML = '';
        this.innerHTML += `<h2>${message}</h2>`;
    }

    render() {
        this.innerHTML = `
        <img alt="media" class="w-full" src=${`https://static01.nyt.com/${this._item?.multimedia[1]?.url}`}>
        <div class="px-6 py-4">
        <div class="mb-2 text-xl font-bold"><a href=${this._item.web_url} >${this._item.headline.main}</a></div>
            <p class="text-base text-gray-700">${this._item.abstract}</p>
        </div>
        <div class="px-6 pt-4 pb-2"><span class="inline-block px-3 py-1 mb-2 mr-2 text-sm font-semibold text-gray-700 bg-gray-200 rounded-full">#${this._item.section_name}</span>
        </div>
        `
    }

    implant() {
        this.innerHTML = `
        <img alt="media" class="w-full" src=${this._item2?.multimedia[1]?.url}>
        <div class="px-6 py-4">
          <div class="mb-2 text-xl font-bold"><button>${this._item2?.title}</button></div>
          <p class="text-base text-gray-700">${this._item2?.abstract}</p>
        </div>
        <div class="px-6 pt-4 pb-2"><span class="inline-block px-3 py-1 mb-2 mr-2 text-sm font-semibold text-gray-700 bg-gray-200 rounded-full">#${this._item2?.section}</span><span class="inline-block px-3 py-1 mb-2 mr-2 text-sm font-semibold text-gray-700 bg-gray-200 rounded-full">#${this._item2?.subsection}</span>
        </div>
        `
    }
}

customElements.define('news-item', NewsItem);

