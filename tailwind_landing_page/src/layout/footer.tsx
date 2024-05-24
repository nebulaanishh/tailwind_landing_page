import Logo from '../components/logo';


function Footer() {

    const data = [
        {
            label: "Getting Started",
            list: [
                "Installation",
                "Editor Setup",
                "Using with Preprocessors",
                "Optimizing for Production",
                "Browser Support",
                "Upgrade Guide",
            ],
        },
        {
            label: "Core Concepts",
            list: [
                "Utility-First Fundamentals",
                "Handling Hover, Focus, and Other States",
                "Responsive Design",
                "Dark Mode",
                "Reusing Styles",
                "Adding Custom Styles",
                "Functions & Directives",
            ],
        },
        {
            label: "Customization",
            list: [
                "Configuration",
                "Content Configuration",
                "Theme Configuration",
                "Customizing Screens",
                "Customizing Colors",
                "Customizing Spacing",
                "Plugins",
                "Presets",
            ],
        },
        {
            label: "Community",
            list: ["GitHub", "Discord", "Twitter", "YouTube"],
        },
    ];

    return (
        <section>
            <div className='flex  mt-24 mb-10 p-6 space-x-16 text-slate-400 justify-center align-center border-solid border-b border-white w-3/5 mx-auto'>
                
                {data.map((element) => (
                    <div>
                        <h1 className='text-white font-bold'> {element.label} </h1>
                        <ul>

                            {element.list.map((list_element) => (
                                <li className='pt-2 hover:text-white'> {list_element} </li>
                            ))}
                        </ul>
                    </div>

                ))}


            </div>
                <div className='w-3/5 mx-auto pb-28'>
                    <Logo />
                </div>

        </section>
    )
}

export default Footer