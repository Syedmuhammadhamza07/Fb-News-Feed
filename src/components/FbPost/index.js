import FbImageLibrary from "react-fb-image-grid";
import CustomBtn from "../CustomBtn";
import "./index.css";
import globe from "./globe.png";
import profile from "./post-image.png";
import care from "./care.png"
import sad from "./sad.png"
import love from "./love.png"

function FbPost({post}) {
  return (
    <div>
      <div className="fb-post-div">
        <div className="post-info">
          <div className="profile-div">
            <div className="profile-img-div">
              <img src={profile} className="profile-img" />
            </div>
            <div>
              <h3 className="post-title">
                {post.title} - {post.category}
              </h3>
              <div className="sponsored-div">
                <div>Sponsored . </div>
                <img src={globe} width="12px" />
              </div>
            </div>
          </div>
          <p className="description">{post.description}</p>
        </div>
        <div style={{ width: "100%" }}>
          <FbImageLibrary images={post.images} />
        </div>
        <div>
          <div className="emoji-div">
            <div className="emoji">
              <img src={sad} className="emoji-img"/>
              <img src={love} className="emoji-img"/>
              <img src={care} className="emoji-img"/>
            </div>
            <div className="userName">
              <p>S. M. Hamza and 1.5K others</p>
              <p>8 Comments</p>
              <p>30 Shares</p>
            </div>
          </div>
          <div className="btn-div">
            <CustomBtn text="Like" className="like-btn" />
            <CustomBtn text="Comment" className="comment-btn" />
            <CustomBtn text="Share" className="share-btn" />
          </div>

          <div className="tablet-btn-div">
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
