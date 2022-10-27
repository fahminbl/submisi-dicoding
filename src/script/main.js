import NewsProvider from "../apis/news";

const main = () => {
    const newsContainerElement = document.querySelector('news-container');
    newsContainerElement.classList.add('flex', 'flex-row', 'lg:px-12', 'flex-wrap');

    const searchElement = document.querySelector('search-bar');

    const searchForNews = async (event) => {
        event.preventDefault();
        try {
            const results = await NewsProvider.searchNews(searchElement.value);
            renderResult(results);
        } catch (error) {
            implantError(error);
        }
    }

    const implantError = (error) => {
        newsContainerElement.renderError(error);
    }

    const renderResult = (results) => {
        newsContainerElement.news = results;
    }

    searchElement.submitEvent = searchForNews;
}





export default main;