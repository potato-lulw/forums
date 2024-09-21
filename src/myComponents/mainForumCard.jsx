import PropTypes from 'prop-types';
import ForumCard from './forumCard';

const MainForumCard = ({ title, forums, isSubForum }) => {
    return (
        <div className='w-full bg-myBg2 sm:rounded-md rounded-none border-2 border-myBg2 my-2'>
            {/* title div */}
            <div className='w-full bg-myCardBg text-lg p-1 px-2'>{title}</div>
            <div className="flex flex-col w-full p-2">
                {/* Forum cards */}
                {forums.map((forum, index) => (
                    <ForumCard key={index} forum={forum} isSubForum={isSubForum} />
                ))}
            </div>
        </div>
    );
};

// Prop validation
MainForumCard.propTypes = {
    title: PropTypes.string.isRequired,
    isSubForum: PropTypes.bool.isRequired,
    forums: PropTypes.arrayOf(
        PropTypes.shape({
            title: PropTypes.string.isRequired,
        })
    ).isRequired,
};

export default MainForumCard;
