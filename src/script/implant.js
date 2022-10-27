import NewsProvider from "../apis/news";
const implant = async () => {
    const newsContainerElement = document.querySelector('news-container');
    newsContainerElement.classList.add('flex', 'flex-row', 'flex-wrap');
    const implantError = (error) => {
        newsContainerElement.renderError(error);
    }

    const implantResults = (results) => {
        newsContainerElement.news2 = results;
    }
    try {
        const results = await NewsProvider.fetchNews();
        implantResults(results);
    } catch (error) {
        implantError(error);
    }


}

export default implant;