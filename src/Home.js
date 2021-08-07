import BlogList from "./BlogList";
import UseFetch from "./UseFetch";
const Home = () => {
    const{data : blogs, isLoading, error} = UseFetch('http://localhost:8000/blogs');
    return ( 
        <div className="home">
            {isLoading && <div> Loading ...</div>}
            {error && <div>Could not fetch the data</div>}
           {blogs && <BlogList blogs = {blogs}/>}
        </div>
     );
}
 
export default Home;