

export default function Card({profileData}) {

    return (
        <div className="bg-slate-800 text-white p-4 rounded-xl">

            <div className="flex space-x-4">
                <img className="h-[56px] rounded-full" src={profileData.profileImage} alt="" />

                <div>
                    <p> {profileData.name} </p>
                    <p className="text-slate-400"> {profileData.position} </p>
                </div>

            </div>
            <p className="mt-6 text-center text-sm px-4"> {profileData.review} </p>
        </div>
    )
}