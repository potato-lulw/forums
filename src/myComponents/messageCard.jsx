import PropTypes from "prop-types"



const MessageCard = ({ author, message, likes }) => {
    return (
        <div className="my-1 flex-col flex md:flex-row md:items-stretch h-full">
            {/* Left div */}
            <div className="flex gap-2  px-2 bg-myCardBg p-4 border-t-2 border-myBg2   md:h-auto md:flex-shrink-0">
                <div className="flex items-end gap-2 md:flex-col md:items-center md:justify-center">

                    <div className="md:w-20 md:h-20 h-12 w-12 bg-myBg2 rounded-md"> </div>
                    <div className="text-lg font-medium text-myBlue2">{author}</div>
                </div>
            </div>

            {/* Right div */}
            <div className="bg-myBg2 p-2 flex-1 flex flex-col h-auto">
                <div className="text-xs text-gray-300 border-b-2 border-myBg py-1">Yesterday at 12:00 PM</div>
                <div className="text-sm text-gray-200 p-3">
                    {message} Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, hic unde sed quo rerum aperiam ducimus perspiciatis mollitia, doloremque optio ab laudantium soluta?
                </div>
                <div className="mt-4 bg-myBg2 border-t-2 border-myBg text-sm py-1">{likes} likes</div>
            </div>
        </div>

    );
};

MessageCard.propTypes = {
    author: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired,
    likes: PropTypes.number.isRequired,
};




export default MessageCard