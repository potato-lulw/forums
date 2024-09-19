import { MessageCircle } from 'lucide-react';
import PropTypes from 'prop-types';

const ForumCard = ({ forum }) => {
    return (
        <div className='flex justify-between items-center gap-2 text-myBlue cursor-pointer border-b border-myBg'>
            <div>
                <MessageCircle />
            </div>
            <div className='flex sm:flex-row flex-col sm:justify-between items-start sm:items-center justify-start flex-1 text-myBlue2   py-2'>
                <span className='hover:text-myBlue font-medium text-lg'>{forum.title}</span>
                <div className='flex  gap-2'>
                    <div className='w-10 h-10 bg-myBg rounded-md hidden md:block'> </div>
                    <div className='flex flex-col justify-center leading-4'>
                        <p className='text-sm'>Name of the last messager</p>
                        <p className='text-gray-500 text-sm'>Yesterday 12:00 pm</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

ForumCard.propTypes = {
    forum: PropTypes.shape({
        title: PropTypes.number.isRequired,

    }).isRequired,
};

export default ForumCard;
