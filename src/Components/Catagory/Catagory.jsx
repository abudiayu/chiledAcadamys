import React, { useRef } from 'react';
import classes from './catagory.module.css';
function Catagory() {
  const scrollRef = useRef(null);
  
  const scroll = (direction) => {    
    const { current } = scrollRef;
    const scrollAmount = 300;
    if (direction === 'left') {
      current.scrollLeft -= scrollAmount;
    } else {
      current.scrollLeft += scrollAmount;
    }
  };
  const videoData = [
    { id: 1, title: "Learning ABCs", desc: "Kids education", thumb: "https://via.placeholder.com/300x180/FFD700" },
    { id: 2, title: "Animal Songs", desc: "Sing along", thumb: "https://via.placeholder.com/300x180/FF69B4" },
    { id: 3, title: "Cartoon Time", desc: "Funny stories", thumb: "https://via.placeholder.com/300x180/00BFFF" },
    { id: 4, title: "Mushroom House", desc: "Nature kids", thumb: "https://via.placeholder.com/300x180/32CD32" },
  ];

  return (
    <div className={classes.catagory_wrapper}>
      <div className={classes.slider_container}>
        <button className={classes.arrow_btn} onClick={() => scroll('left')}>‹</button>        
        <div className={classes.scroll_area} ref={scrollRef}>
          {videoData.map((video) => (
            <div key={video.id} className={classes.video_card}>
              <div className={classes.thumbnail_box}>
                <img src={video.thumb} alt={video.title} />
                <div className={classes.play_icon}></div>
              </div>
              <div className={classes.video_info}>
                <h4>{video.title}</h4>
                <p>{video.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <button className={classes.arrow_btn} onClick={() => scroll('right')}>›</button>
      </div>

      <div className={classes.category_labels}>
        <div className={classes.label_item}><span>🔴</span> ANIMATION</div>
        <div className={classes.label_item}><span>🔴</span> SONG</div>
        <div className={classes.label_item}><span>🔴</span> LEARNING CORNER</div>
      </div>
    </div>
  );
}

export default Catagory;