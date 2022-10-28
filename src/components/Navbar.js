class Navbar extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.render()
    }
    render() {
        this.innerHTML = `
        <nav>
            <ul class="flex flex-row border-b border-slate-900/10 backdrop-blur-sm lg:px-8 lg:border-1 justify-between p-4 shadow">
                <div class="font-bold text-2xl text-white ml-1 lg:ml-6 mt-1">
                    <li><a href="" ><span class="bg-sky-400/80 text-slate-900 p-2 rounded-md">NEWS</span> <span class="relative top-2 md:static">Edgerunner<span></a></li>
                </div>
                <div class="flex text-white lg:text-lg text-base cursor-pointer flex-row gap-2 lg:mr-6">
                    <li class="ease-in transition-all duration-150 p-2 hover:bg-slate-400/20 rounded-md hover:text-sky-400"><a target="blank" href='https://www.dicoding.com/'>Home</a></li>
                    <li class="ease-in transition-all duration-150 p-2 hover:bg-slate-400/20 rounded-md hover:text-sky-400"><a target="blank" href='https://github.com/fahminbl'>About</a></li>
                    <li class="ease-in transition-all duration-150 p-2 hover:bg-slate-400/20 rounded-md hover:text-sky-400"><a target="blank" href='https://instagram.com/fahmi.foreach_a2r.true'>Contact</a></li>
                </div>
            </ul>
        </nav>
    `
    }
}

customElements.define('nav-bar', Navbar);