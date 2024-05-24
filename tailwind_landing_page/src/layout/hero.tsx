

function Hero() {

    return (
        <div className="">
            <h1 className="mt-[150px] text-slate-900 font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-center dark:text-white">Rapidly build modern websites <br />without ever leaving your HTML.</h1>
            <p className="mt-6 text-lg text-slate-600 text-center max-w-3xl mx-auto dark:text-slate-400">A utility-first CSS framework packed with classes like <code className="font-mono font-medium text-sky-500 dark:text-sky-400"> flex, </code><code className="font-mono font-medium text-sky-500 dark:text-sky-400">pt-4, </code><code className="font-mono font-medium text-sky-500 dark:text-sky-400">text-center</code> and <code className="font-mono font-medium text-sky-500 dark:text-sky-400">rotate-90</code> that can be composed to build any design, directly in your markup.</p>

            <div className="flex items-center">
                <button className="px-4 py-2 bg-sky-500 hover:bg-sky-400 text-white rounded-xl mx-2">Get Started</button>
                <div className="flex space-x-6 rounded-xl align-middle p-2 bg-slate-800">
                    <svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="flex-none text-slate-300 dark:text-slate-400" aria-hidden="true"><path d="m19 19-3.5-3.5"></path><circle cx="11" cy="11" r="6"></circle></svg>


                    <input className="bg-transparent " placeholder="Quick Search..." />
                    <p className="text-gray-200">Ctrl K</p>
                </div>
            </div>
        </div>
    )
}

export default Hero