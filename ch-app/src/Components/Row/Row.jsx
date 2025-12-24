import React from 'react';
import classes from './row.module.css';

const Row = () => {
  return (
    <div className={classes.row_section}>
      <h3 className={classes.row_title} style={{ color:'red' }}>
        <span className={classes.bullet} style={{ backgroundColor: 'green' }}></span>
        title
      </h3>

      <div className={classes.video_grid}>

          <div  className={classes.video_card_wrapper}>

            <div 
              className={classes.video_card} 
              style={{ borderColor:'green'}}
            >
              <div className={classes.thumbnail_container}>
                <img src='https://www.youtube.com/shorts/Q4BuU5prBdk' alt='' />
                <div className={classes.play_btn}>
                  <div className={classes.play_icon}>▶</div>
                </div>
              </div>
            </div>

            <div className={classes.video_meta}>
              <h4 className={classes.video_name}>title</h4>
              <p className={classes.video_desc}>description</p>
            </div>
          </div>

      </div>
    </div>
  );
};

export default Row;