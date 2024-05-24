

function Hero2() {


    return (
        <div className="text-center">

            <h1 className="mt-[200px] text-slate-900 text-4xl tracking-tight font-extrabold sm:text-5xl dark:text-white">"Best Practices" don't actually work.</h1>

            <p className="mt-6 max-w-3xl mx-auto text-lg dark:text-slate-400">I’ve written <a href="https://adamwathan.me/css-utility-classes-and-separation-of-concerns/" className="text-sky-500 font-semibold dark:text-sky-400">a few thousand words</a> on why traditional “semantic class names” are the reason CSS is hard to maintain, but the truth is you’re never going to believe me until you actually try it. If you can suppress the urge to retch long enough to give it a chance, I really think you’ll wonder how you ever worked with CSS any other way.</p>

            <div className="text-slate-400 mx-auto flex  justify-center mt-12 space-x-4">
                <img className="rounded-full h-[56px]" src="https://tailwindcss.com/_next/static/media/adam.f69b0b90.jpg" alt="" />
                <div>
                    <p className="font-semibold text-white">Adam Wathan</p>
                    <p>Creator of Tailwind CSS</p>
                </div>
            </div>
        </div>
                
            
    )
}

export default Hero2