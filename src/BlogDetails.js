import { useParams } from "react-router-dom";
import UseFetch from "./UseFetch";

const BlogDetails = () => {
    const {id} = useParams();
    const{data:blog, isLoading, error} = UseFetch('http://localhost:8000/blogs/' + id);
    return ( 
        <div className="blog-details">
            {isLoading && <div>Loading .... </div>}
            {error && <div> Error fetching the data</div>}
            {blog && 
            (
                <article>
                    <h2>{blog.title}</h2>
                    <p>Written by {blog.author}</p>
                    <div>{blog.body}</div>
                </article>
            )
            }
        </div>
     );
}
 
export default BlogDetails; 