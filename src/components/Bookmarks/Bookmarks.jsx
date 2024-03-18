import Bookmark from "../Bookmark/Bookmark";
import propTypes from 'prop-types';



const Bookmarks = ({bookmarks}) => {
     
    return (
        <div className="md:w-1/3">
            <h1 className="text-3xl">Bookmarked Blog: {bookmarks.length}</h1>
            {
                bookmarks.map(bookmark=><Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>)
                
            }

            
        </div>  
    );
};
Bookmarks.propTypes={
    bookmark:propTypes.array
}



export default Bookmarks;