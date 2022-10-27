// lihat instruksi di NewsCard
import './NewsItem.js'
class NewsContainer extends HTMLElement {
    constructor() {
        super()
    }
    
    renderError(message) {
        this.innerHTML = '';
        this.innerHTML += `<h2>${message}</h2>`;
    }

    set news(news) {
        this._news = news;
        this.render()
    }

    render() {
        this.innerHTML = '';
        this._news.forEach(item => {
            const newsItemElement = document.createElement('news-item');
            newsItemElement.classList.add("w-full","p-3","overflow-hidden","rounded","shadow-lg","md:w-1/2","lg:w-1/3")
            newsItemElement.item = item;
            this.appendChild(newsItemElement);
        })
    }
}

customElements.define('news-container', NewsContainer);