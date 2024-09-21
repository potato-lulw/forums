import ForumCard from '@/myComponents/forumCard';
import Threads from '@/myComponents/threads';
import { Link, useParams } from 'react-router-dom';

const Forums = () => {
    const { title } = useParams();

    // Fetch forum details using the title parameter
    const subForums = [
        { title: "Subforum1", },
        { title: "Subforum2", },
        { title: "Subforum3", },
        { title: "Subforum4", },
        { title: "Subforum5", },
    ];

    const threads = [
        { title: "Thread1", },
        { title: "Thread2", },
        { title: "Thread3", },
        { title: "Thread4", },
        { title: "Thread5", },
        { title: "Thread6", },
        { title: "Thread7", },
        { title: "Thread8", },
        { title: "Thread9", },
        { title: "Thread10", },
        { title: "Thread11", },
    ];

    return (
        <div className='max-w-[1200px] mx-auto mt-4'>
            <h1 className='text-2xl font-semibold'>{title}</h1>

            {/* Sub forums */}
            <div className="flex flex-col w-full p-2 bg-myBg2 mt-2 rounded-none md:rounded-md">
                {subForums.map((forum, index) => (
                    <Link
                        to={`/forums/subforum/${forum.title}`}
                        key={index}
                        onClick={() => console.log('Navigating to:', `/forums/subforum/${forum.title}`)}
                    >
                        <ForumCard forum={forum} isSubForum={true} /> {/* Pass isSubForum=true */}
                    </Link>
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

export default Forums