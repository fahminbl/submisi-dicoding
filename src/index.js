import 'regenerator-runtime';
import "./input.css";
import "./components/Navbar.js";
import "./components/SearchBar.js";
import './components/NewsContainer.js'
// main adalah fungsi utama aplikasi ini, yaitu mencari berita sesuai dengan keyword kita
import main from './script/main.js'
// implant adalah fungsi untuk fetch data ketika terload
import implant from './script/implant.js'

document.addEventListener('DOMContentLoaded', implant);

document.addEventListener('DOMContentLoaded', main);



