import React, { useState, useEffect, use } from "react";
import { Link, useParams ,useNavigate} from "react-router-dom";
function ViewStory() {
  const { id , tot} = useParams();
  const [story, setStory] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    fetch(`http://localhost:3000/story/${id}`)
      .then((data) => data.json())
      .then((data) => {
        setStory(data);
        console.log(data);
        console.log(story);
      })
      .catch((err) => console.log(err));
  }, [id]);
  if (id > tot || id <= 0) {
    navigate('/');
  }
  return (
    <div>
      {story ? (
        <div className="d-flex justify-content-center align-items-center">
          <Link to={`http://localhost:5173/story/${Number(id)-1}/${tot}`}>
            <i class="bi bi-arrow-left-circle-fill"></i>
          </Link>

          <img src={story.image} alt="story" className="vh-100 r" />
          <Link to={`http://localhost:5173/story/${Number(id)+1}/${tot}`}>
            <i class="bi bi-arrow-right-circle-fill"></i>
          </Link>
        </div>
      ) : (
        <p>Loading</p>
      )}
    </div>
  );
}

export default ViewStory;
