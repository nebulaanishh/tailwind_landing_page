import Card from "../components/Card"

function Cards(){
    const personData = [

    {
        profileImage: "https://tailwindcss.com/_next/static/media/adam.f69b0b90.jpg",
        name: "Ryan Florence",
        position: "Remix & React Training",
        review: "I feel like an idiot for not using Tailwind CSS until now."
    },
    {
        profileImage: "https://tailwindcss.com/_next/static/media/adam.f69b0b90.jpg",
        name: "Ryan Florence",
        position: "Remix & React Training",
        review: "I feel like an idiot for not using Tailwind CSS until now."
    },
    {
        profileImage: "https://tailwindcss.com/_next/static/media/adam.f69b0b90.jpg",
        name: "Ryan Florence",
        position: "Remix & React Training",
        review: "I feel like an idiot for not using Tailwind CSS until now."
    },
    {
        profileImage: "https://tailwindcss.com/_next/static/media/adam.f69b0b90.jpg",
        name: "Ryan Florence",
        position: "Remix & React Training",
        review: "I feel like an idiot for not using Tailwind CSS until now."
    },
    {
        profileImage: "https://tailwindcss.com/_next/static/media/adam.f69b0b90.jpg",
        name: "Ryan Florence",
        position: "Remix & React Training",
        review: "I feel like an idiot for not using Tailwind CSS until now."
    },
    {
        profileImage: "https://tailwindcss.com/_next/static/media/adam.f69b0b90.jpg",
        name: "Ryan Florence",
        position: "Remix & React Training",
        review: "I feel like an idiot for not using Tailwind CSS until now."
    },
    {
        profileImage: "https://tailwindcss.com/_next/static/media/adam.f69b0b90.jpg",
        name: "Ryan Florence",
        position: "Remix & React Training",
        review: "I feel like an idiot for not using Tailwind CSS until now."
    },
    {
        profileImage: "https://tailwindcss.com/_next/static/media/adam.f69b0b90.jpg",
        name: "Ryan Florence",
        position: "Remix & React Training",
        review: "I feel like an idiot for not using Tailwind CSS until now."
    },


]
    return (

        <div className="grid grid-cols-3 gap-10 w-3/5 mx-auto mt-[200px]">
            {
                personData.map( (element, index) => (
                    <Card profileData={element} key={index}/>
                ))
            }
        </div>
    )
}


export default Cards