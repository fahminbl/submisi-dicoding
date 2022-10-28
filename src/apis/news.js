import axios from "axios";

const apiKey = "59br60u7LQrbRufaFjGFKKyPI7iajEnW";
class NewsProvider {
    static async searchNews(keyword) {
        try {
            const { data } = await axios.get(`https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${keyword}&api-key=${apiKey}`);
            if (data) {
                console.log(data);
                console.log(data?.response?.docs);
                return Promise.resolve(data?.response?.docs);
            } else {
                return Promise.reject(`keyword ${keyword} tidak ditemukan, kalahkan adam smasher terlebih dahulu`);
            }
        } catch (error) {
            console.log(error);
        }
    }

    static async fetchNews() {
        try {
            const { data } = await axios.get("https://api.nytimes.com/svc/topstories/v2/home.json?api-key=" + apiKey);
            if (data?.results) {
                console.log(data.results)
                return Promise.resolve(data?.results);
            } else {
                console.log(data)
                return Promise.reject(`aduh sepertinya adam smasher datang menginvasi`);
            }
        } catch (error) {
            console.log(error);
        }
    }
}

export default NewsProvider;