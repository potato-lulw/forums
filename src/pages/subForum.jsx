import Threads from '@/myComponents/threads';
import { useParams } from 'react-router-dom';

const SubForum = () => {
    const { subForumTitle } = useParams();

    const subForumThreads = [
        { title: "SubThread1" },
        { title: "SubThread2" },
        { title: "SubThread3" },
        { title: "SubThread4" },
        { title: "SubThread5" },
        { title: "SubThread6" },
        { title: "SubThread7" },
        { title: "SubThread8" },
        { title: "SubThread9" },
        { title: "SubThread10" },
        { title: "SubThread11" },
        { title: "SubThread12" },
        { title: "SubThread13" },
        { title: "SubThread14" },
        { title: "SubThread15" },
        { title: "SubThread16" },
        { title: "SubThread17" },
        { title: "SubThread18" },
    ]

    return (
        <div className='mx-auto max-w-[1200px]'>
            <h1 className='mt-4 text-lg font-semibold px-2 md:px-0'>{subForumTitle}</h1>
            {
                subForumThreads.length === 0 &&
                <p>No threads in this subforum.</p>
            }

            <div className='bg-myCardBg mt-4 md:rounded-md rounded-none text-right px-2 text-gray-300 cursor-pointer'> Filter</div>
            {subForumThreads.map((thread, index) => (
                <div key={index}>
                    <Threads title={thread.title} />
                </div>
            ))}

        </div>
    );
};

export default SubForum;
