import ForumCard from '@/myComponents/forumCard';
import Threads from '@/myComponents/threads';
import { useParams } from 'react-router-dom';

const Forums = () => {
    const { title } = useParams();

    // Fetch forum details using the title parameter
    const subForums = [
        { title: "Subforum 1", },
        { title: "Subforum 2", },
        { title: "Subforum 3", },
        { title: "Subforum 4", },
        { title: "Subforum 5", },
    ]


    const threads = [
        { title: "Thread 1", },
        { title: "Thread 2", },
        { title: "Thread 3", },
        { title: "Thread 4", },
        { title: "Thread 5", },
        { title: "Thread 6", },
        { title: "Thread 7", },
        { title: "Thread 8", },
        { title: "Thread 9", },
        { title: "Thread 10", },
        { title: "Thread 11", },

    ]
    return (
        <div className='max-w-[1200px] mx-auto mt-4'>

            <h1 className='text-2xl font-semibold'>{title}</h1>

            {/*Sub forums */}
            <div className="flex flex-col w-full p-2 bg-myBg2 mt-2 rounded-none md:rounded-md">
                {subForums.map((forum, index) => (
                    <ForumCard key={index} forum={forum} />
                ))}
            </div>

            <div>
                {/*Threads */}
                <div className='bg-myCardBg mt-4 md:rounded-md rounded-none text-right px-2 text-gray-300 cursor-pointer'> Filter</div>
                {threads.map((thread, index) => (
                    <div key={index}>

                        <Threads title={thread.title} />
                    </div>

                ))}
            </div>

        </div>
    );
};

export default Forums;
