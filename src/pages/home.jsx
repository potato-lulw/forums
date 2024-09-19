import MainForumCard from "@/myComponents/mainForumCard"


const Home = () => {

    const mainForums = [
        { title: "Dummy Title 1" },
        { title: "Dummy Title 2" },
        { title: "Dummy Title 3" },
        { title: "Dummy Title 4" },
    ]

    const forums = [
        { title: "Dummy forum 0", },
        { title: "Dummy forum 1", },
        { title: "Dummy forum 2", },
        { title: "Dummy forum 3", },
    ]
    return (
        <div className="max-w-[1200px] mx-auto mt-2 p-0 md:px-5 lg:p-0">
            Home
            <div className="flex justify-between gap-2 flex-col md:flex-row ">

                <div className="w-full">

                    {
                        mainForums.map((forum, index) => (
                            <MainForumCard key={index} title={forum.title} forums={forums} />
                        ))
                    }
                </div>

                <div className="flex flex-col gap-2 mt-2 md:w-[30%] w-full ">
                    {/* Staff Online */}
                    <div className="rounded-md bg-myBg2 p-2 ">
                        <h2 className="text-myBlue font-medium text-lg mb-2">Staff Online</h2>
                        <div className='flex gap-2'>
                            <div className='w-10 h-10 bg-myBg rounded-md'> </div>
                            <div className='flex flex-col justify-center leading-4'>
                                <p>Staff Name</p>
                                <p className='text-gray-500 text-sm'>Status</p>
                            </div>
                        </div>
                    </div>

                    {/* Members Online */}
                    <div className="rounded-md bg-myBg2 p-2 ">
                        <h2 className="text-myBlue font-medium text-lg mb-2">Members Online</h2>
                        <div className='flex gap-2 text-myBlue2 text-sm'>
                            name1, name2, name3, name4, name5, name6, name7
                        </div>
                        <div className="bg-myBg text-sm text-gray-300 mt-4 p-1">
                            Total: 1000 (400 members, 600 guests)
                        </div>
                    </div>

                    {/* Trending Content */}
                    <div className="rounded-md bg-myBg2 p-2 ">
                        <h2 className="text-myBlue font-medium text-lg mb-2">Staff Online</h2>
                        <div className='flex gap-2 mb-2'>
                            <div className='w-10 h-10 bg-myBg rounded-md'> </div>
                            <div className='flex flex-col justify-center leading-6'>
                                <p>Content Title</p>
                                <p className='text-gray-500 text-sm'>TPP - December 12</p>
                                <p className='text-gray-500 text-sm'>Replies: 12k</p>
                            </div>
                        </div>
                        <div className='flex gap-2 mb-2'>
                            <div className='w-10 h-10 bg-myBg rounded-md'> </div>
                            <div className='flex flex-col justify-center leading-6'>
                                <p>Content Title</p>
                                <p className='text-gray-500 text-sm'>TPP - December 12</p>
                                <p className='text-gray-500 text-sm'>Replies: 12k</p>
                            </div>
                        </div>
                        <div className='flex gap-2 mb-2'>
                            <div className='w-10 h-10 bg-myBg rounded-md'> </div>
                            <div className='flex flex-col justify-center leading-6'>
                                <p>Content Title</p>
                                <p className='text-gray-500 text-sm'>TPP - December 12</p>
                                <p className='text-gray-500 text-sm'>Replies: 12k</p>
                            </div>
                        </div>
                        <div className='flex gap-2 mb-2'>
                            <div className='w-10 h-10 bg-myBg rounded-md'> </div>
                            <div className='flex flex-col justify-center leading-6'>
                                <p>Content Title</p>
                                <p className='text-gray-500 text-sm'>TPP - December 12</p>
                                <p className='text-gray-500 text-sm'>Replies: 12k</p>
                            </div>
                        </div>
                        <div className='flex gap-2 mb-2'>
                            <div className='w-10 h-10 bg-myBg rounded-md'> </div>
                            <div className='flex flex-col justify-center leading-6'>
                                <p>Content Title</p>
                                <p className='text-gray-500 text-sm'>TPP - December 12</p>
                                <p className='text-gray-500 text-sm'>Replies: 12k</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default Home