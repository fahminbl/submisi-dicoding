// newscard harus dipanggil dengan menggunakan nested custom element, yang di export ke NewsContainer
// axios, apiKey digunakan di NewsContainer untuk fetch data disana, baru data tadi di setter ke element ini

import './NewsCard.js'
import axios from "axios";
const apiKey = 'e4b183d16835445685af8dd3c996337e';

class NewsCard extends HTMLElement {
    constructor() {
        super()
    }



    async connectedCallback() {
        try {
            this.loading();
            this.getData = await axios.get(`https://api.nytimes.com/svc/topstories/v2/home.json?api-key=${apiKey}`);
            this.innerHTML = '';
            this.render();
        } catch (err) {
            console.log(err)
        }
    }

    render() {
        this.innerHTML = '';

        
    }
}

customElements.define('news-card',NewsCard);


{/* <div className="w-full md:w-1/2 lg:w-1/3 p-3 rounded overflow-hidden shadow-lg">
      <img
        alt="media"
        className="w-full"
        src={item.photo}
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2"><a target="blank" href={item.url}>{item.title}</a></div>
        <p className="text-gray-700 text-base">
          {item.abstract}
        </p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          #{item.section}
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          #{item.subsection}
        </span>
      </div>
    </div> */}