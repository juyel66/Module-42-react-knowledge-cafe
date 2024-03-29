import propTypes from 'prop-types';



const Bookmark = ({bookmark}) => {
    const {title} = bookmark;

    return (
        <div>
            <h1 className='text-3xl'>{title}</h1>
            
        </div>
    );
};


Bookmark.propTypes = {
    bookmark: propTypes.object
}

export default Bookmark;