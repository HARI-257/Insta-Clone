import { useEffect, useState } from "react";
import React from "react";
import { useNavigate } from "react-router-dom";

function Stories() {
  const [stories, setStoeries] = useState([]);
  const navigate = useNavigate();
  let tot = 0;
  useEffect(() => {
    fetch("http://localhost:3000/story")
      .then((data) => data.json())
      .then((data) => setStoeries(data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="story d-flex">
      <div className="d-none">{(tot = stories.length)}</div>
      {stories.length > 0 ? (
        stories.map((story) => (
          <div
            key={story}
            className="mx-1"
            onClick={() => {
              navigate(`/story/${story.id}/${tot}`);
            }}
          >
            <div className="gradient-border">
              <img
                className="story-dp rounded-circle "
                src={story.user.profile_pic}
                alt="dp"
              />
            </div>
            <p className="text-truncate" style={{ width: "50px" }}>
              {story.user.username}
            </p>
          </div>
        ))
      ) : (
        <p>Loading Stories</p>
      )}
    </div>
  );
}

export default Stories;
