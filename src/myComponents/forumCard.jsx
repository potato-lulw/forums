import { MessageCircle } from 'lucide-react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const ForumCard = ({ forum, isSubForum }) => {
    const subForums = [
        { title: "Subforum1", },
        { title: "Subforum2", },
        { title: "Subforum3", },
        { title: "Subforum4", },
        { title: "Subforum5", },
    ];
    return (
        <div className='flex justify-between items-center gap-2 text-myBlue cursor-pointer border-b border-myBg'>
            <div className='px-2'>
                <MessageCircle />
            </div>
            <div className='flex sm:flex-row flex-col sm:justify-between items-start sm:items-center justify-start flex-1 text-myBlue2 py-2'>

                <div className="flex flex-col justify-center">
                    <Link to={isSubForum ? `/forums/subforum/${forum.title}` : `/forums/${forum.title}`}>
                        <span className="hover:text-myBlue font-medium text-xl">{forum.title}</span>
                    </Link>

                    {!isSubForum && (
                        <div className="md:grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 mt-2 hidden">
                            {subForums.map((subforum, index) => (
                                <Link
                                    key={index}
                                    to={`/forums/subforum/${subforum.title}`}
                                    className="flex items-center text-sm font-bold hover:text-myBlue"
                                >
                                    <span className="mr-2">
                                        {/* You can use any icon library like FontAwesome or Material Icons */}
                                        <MessageCircle size={10} className='text-myBlue' />
                                    </span>
                                    {subforum.title}
                                </Link>
                            ))}
                        </div>
                    )}
                </div>


                <div className='flex gap-2 w-fit'>
                    <div className='w-10 h-10 bg-myBg rounded-md hidden md:block'> </div>
                    <div className='flex flex-col justify-center leading-4 truncate md:max-w-[200px] max-w-[230px] ml-2'>
                        <p className='text-sm truncate overflow-hidden'>Name of the last messager</p>
                        <p className='text-gray-500 text-sm'>Yesterday 12:00 pm</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

ForumCard.propTypes = {
    forum: PropTypes.shape({
        title: PropTypes.string.isRequired,
    }).isRequired,
    isSubForum: PropTypes.bool,  // Add this prop to differentiate
};


export default ForumCard;
