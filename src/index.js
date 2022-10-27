import 'regenerator-runtime';
import "./input.css";
import "./components/Navbar.js";
import "./components/SearchBar.js";
import news from './apis/news.js'
import './components/NewsContainer.js'

const renderResult = (results) => {
    const newsContainerElement = document.querySelector('news-container');
    newsContainerElement.classList.add('flex','flex-row','flex-wrap')
    newsContainerElement.news = results;
}

document.addEventListener(
    'DOMContentLoaded', renderResult(news))