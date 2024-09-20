import PropTypes from "prop-types";

const Threads = ({ title }) => {
    const tags = [
        { color: "#0007cf", text: "Tournament", textColor: "white" },
        { color: "#ebbb00", text: "Resource", textColor: "black" },
        { color: "#2f5bde", text: "Project", textColor: "white" },
        { color: "#b6b6b6", text: "Metagame", textColor: "black" },
        { color: "#ce0000", text: "Announcement", textColor: "white" },
        { color: "#bbf7b6", text: "★", textColor: "black" },
    ];

    const getRandomTag = () => {
        return tags[Math.floor(Math.random() * tags.length)];
    };

    const randomTag = getRandomTag();

    return (
        <div className="rounded-none bg-myBg2 p-2 flex gap-2 items-center border-b-2 border-myCardBg py-3 justify-between">
            <div className="flex items-center justify-between w-full md:pr-10">
                <div className="flex items-center space-x-2">
                    <div className='w-10 h-10 bg-myBg rounded-md  md:block'></div>
                    <div className="">
                        <div className="flex space-x-3 items-center">
                            <span className={`text-xs font-semibold px-2 py-1 rounded-sm `} style={{ backgroundColor: randomTag.color, color: randomTag.textColor }}>{randomTag.text}</span>
                            <h2 className="text-base text-myBlue2">{title}</h2>
                        </div>
                        <p className="text-xs text-gray-400">Creator - 12 Sept 2023</p>
                        <div className="md:hidden block text-xs text-gray-400">Replies 16 - Yesterday 12:00</div>
                    </div>

                </div>
                <div className="text-sm  gap-5 text-gray-300 hidden md:flex">
                    <div>
                        <div>Replies:</div>
                        <div>Views:</div>
                    </div>
                    <div>
                        <div>13</div>
                        <div>2k</div>
                    </div>
                </div>
            </div>


            <div className="hidden md:block">
                <div className='flex gap-2 w-fit'>
                    <div className='flex flex-col justify-center leading-4 truncate md:w-[200px] w-[100px] ml-2'>
                        <p className='text-myBlue2 text-sm'>Yesterday 12:00 pm</p>
                        <p className='text-xs truncate overflow-hidden text-gray-300'>Name of the last messager brotherman</p>
                    </div>
                    <div className='w-10 h-10 bg-myBg rounded-md hidden md:block'> </div>
                </div>
            </div>
        </div>
    );
};

Threads.propTypes = {
    title: PropTypes.string.isRequired,
};

export default Threads;
