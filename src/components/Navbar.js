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
                    <li><span class="bg-sky-400/80 text-slate-900 p-2 rounded-md">NEWS</span> <span class="relative top-2 md:static">Edgerunner<span></li>
                </div>
                <div class="flex text-white lg:text-lg text-base cursor-pointer flex-row gap-2 lg:mr-6">
                    <li class="p-2 hover:bg-slate-400/20 rounded-md hover:text-sky-400"><a href='#'>Home</a></li>
                    <li class="p-2 hover:bg-slate-400/20 rounded-md hover:text-sky-400"><a href='#'>About</a></li>
                    <li class="p-2 hover:bg-slate-400/20 rounded-md hover:text-sky-400"><a href='#'>Contact</a></li>
                </div>
            </ul>
        </nav>
    `
    }
}

customElements.define('nav-bar', Navbar);