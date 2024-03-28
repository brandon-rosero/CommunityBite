import NewPostList from "../components/NewPostList";
import {getData} from "../store/PostData";

const HomePage = () => {
    const postsData = getData();

    return (
        <div className="home" style={{marginTop: 10}}>
            <p>welcome posting donation forum</p>
            <NewPostList postsList={postsData}></NewPostList>
        </div>
    );
};

export default HomePage;
