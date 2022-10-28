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
          <div class="mb-2 text-xl font-bold hover:text-sky-500 ease-in duration-200"><a target="blank"
              href=${this._item.web_url}>${this._item.headline.main}</a></div>
          <p class="text-base text-white">${this._item.abstract}</p>
        </div>
        <div class="px-6 pt-4 pb-2"><span
            class="inline-block px-3 py-1 mb-2 mr-2 text-sm font-semibold cursor-default ease-in duration-200 text-slate-900 bg-sky-500 hover:text-sky-500 hover:bg-slate-400/20 rounded-full">#${this._item.section_name}</span>
        </div>
        `
    }

    implant() {
        this.innerHTML = `
        <img alt="media" class="w-full" src=${this._item2?.multimedia[1]?.url}>
        <div class="px-6 py-4">
          <div class="mb-2 hover:text-sky-500 ease-in duration-200 text-xl font-bold"><a target="blank"
              href=${this._item2.url}>${this._item2?.title}</a></div>
          <p class="text-base text-white">${this._item2?.abstract}</p>
        </div>
        <div class="px-6 pt-4 pb-2"><span
            class="inline-block px-3 py-1 mb-2 mr-2 text-sm font-semibold ease-in duration-200 text-sky-500 cursor-default hover:text-slate-900 hover:bg-sky-500 bg-slate-400/20 rounded-full">#${this._item2?.section}</span><span
            class="inline-block px-3 py-1 mb-2 mr-2 text-sm font-semibold ease-in duration-200 cursor-default hover:text-slate-900 hover:bg-sky-500 text-sky-500 bg-slate-400/20 rounded-full">#${this._item2?.subsection}</span>
        </div>
        `
    }
}

customElements.define('news-item', NewsItem);

