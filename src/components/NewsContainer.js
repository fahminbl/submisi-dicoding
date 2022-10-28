import './NewsItem.js';
class NewsContainer extends HTMLElement {
    constructor() {
        super()
    }
    
    renderError(message) {
        this.innerHTML = '';
        this.innerHTML += `<h2>${message}</h2>`;
    }

    set news2(news) {
        this._news2 = news;
        this.implant();
    }

    set news(news) {
        this._news = news;
        this.render();
    }


    implant() {
        this.innerHTML = '';
        this._news2.map(item => {
            const newsItemElement = document.createElement('news-item');
            newsItemElement.classList.add("w-full","p-3","overflow-hidden","rounded","shadow-lg","md:w-1/2","lg:w-1/3")
            newsItemElement.item2 = item;
            this.appendChild(newsItemElement);
        })
    }

    render() {
        this.innerHTML = '';
        this._news.map(item => {
            const newsItemElement = document.createElement('news-item');
            newsItemElement.classList.add("w-full","p-3","overflow-hidden","rounded","shadow-lg","md:w-1/2","lg:w-1/3")
            newsItemElement.item = item;
            this.appendChild(newsItemElement);
        })
    }
}

customElements.define('news-container', NewsContainer);