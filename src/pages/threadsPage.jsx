import MessageCard from "@/myComponents/messageCard";
import PageChanger from "@/myComponents/pageChanger";
import { useLocation, useParams } from "react-router-dom"


const ThreadsPage = () => {

    const { title } = useParams();
    // const location = useLocation();

    const messages = [
        {
            "author": "Alice",
            "message": "Life is beautiful, isn’t it?",
            "likes": 356
        },
        {
            "author": "David",
            "message": "This is a random message.",
            "likes": 48
        },
        {
            "author": "John",
            "message": "Who’s ready for the weekend?",
            "likes": 217
        },
        {
            "author": "Sarah",
            "message": "Great to see everyone here!",
            "likes": 123
        },
        {
            "author": "Laura",
            "message": "Hello! How are you?",
            "likes": 274
        },
        {
            "author": "Mike",
            "message": "Just finished a workout session.",
            "likes": 19
        },
        {
            "author": "Emma",
            "message": "Random thoughts for the day.",
            "likes": 450
        }
    ]

    return (
        <div className="max-w-[1200px] mx-auto mt-4">
            <div className="flex gap-2 justify-start items-center px-2 md:px-0">
                <div className="tag px-2 py-1 bg-[#ce0000] text-white rounded-md">Announcement</div>
                <h1 className="text-xl ">{title}</h1>
            </div>
            <div>
                <PageChanger />
            </div>


            <div>
                {
                    messages.map((_message, index) => (<MessageCard key={index} author={_message.author} likes={_message.likes} message={_message.message} />))
                }

            </div>

            <div>
                <PageChanger />
            </div>
        </div>
    )
}

export default ThreadsPage