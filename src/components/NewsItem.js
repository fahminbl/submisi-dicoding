class NewsItem extends HTMLElement {
    constructor() {
        super()
    }

    set item(item) {
        this._item = item;
        this.render()
    }

    renderError(message) {
        this.innerHTML = '';
        this.innerHTML += `<h2>${message}</h2>`;
    }

    render() {
        this.innerHTML = `
        <img alt="media" class="w-full" src=${this._item.multimedia[1].url}>
        <div class="px-6 py-4">
          <div class="mb-2 text-xl font-bold"><a href=${this._item.url} >${this._item.title}</a></div>
          <p class="text-base text-gray-700">${this._item.abstract}</p>
        </div>
        <div class="px-6 pt-4 pb-2"><span class="inline-block px-3 py-1 mb-2 mr-2 text-sm font-semibold text-gray-700 bg-gray-200 rounded-full">#${this._item.section}</span><span class="inline-block px-3 py-1 mb-2 mr-2 text-sm font-semibold text-gray-700 bg-gray-200 rounded-full">#${this._item.subsection}</span>
        </div>
        `
    }
}

customElements.define('news-item', NewsItem);