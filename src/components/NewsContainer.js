// lihat instruksi di NewsCard

class NewsContainer extends HTMLElement {
    constructor() {
        super()
    }

    connectedCallback() {
        this.render()
    }

    render() {
        this.innerHTML = `
        div className="w-full px-4 md:px-0 md:mt-8 mb-16 text-gray-800 leading-normal">
          <div className="flex flex-row ml-2 flex-wrap ">
          </div>
          </div>`
    }
}

customElements.define('news-container', NewsContainer);