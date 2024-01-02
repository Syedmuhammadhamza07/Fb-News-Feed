import FbImageLibrary from "react-fb-image-grid";
import CustomBtn from "../CustomBtn";
import "./index.css";
import globe from "./globe.png";

function FbPost({post}) {
  return (
    <div>
      <div className="fb-post-div">
        <div className="post-info">
          <h3>
          {post.title} - {post.category}
          </h3>
          <div className="sponsored-div">
            <div>Sponsored . </div>
            <img src={globe} width="12px" />
          </div>
          <p>{post.description}</p>
        </div>
      <div style={{ width: "100%" }}>
          <FbImageLibrary images={post.images} />
      </div>
      <div>
      <div className="btn-div">
          <CustomBtn text="Like" className="like-btn" />
          <CustomBtn text="Comment" className="comment-btn" />
          <CustomBtn text="Share" className="share-btn" />
        </div>
      </div>
      </div>

      
    </div>
  );
}

export default FbPost;
