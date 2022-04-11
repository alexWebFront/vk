import './posts-items.css';

const PostsItems = (props) => {
    return <>
        <div className="posts__item">
            <p className="post-count">Пикомысль №{props.id}</p>
            {props.postMessage}
        </div>
    </>
}

export default PostsItems;
