// matchcard.js
import './matchcard.css';
import React from 'react';
import PropTypes from 'prop-types';
const MatchCard = ( props ) => {
  let {Name,age,abouts,InstaID} = props;

  return (
  <div class="card5">
      <div class="card5-border-top">
      </div>
      <div class="img">
      </div>
      <span>{Name}</span>
      <p class="job">{age}</p>
      <p class="job">{abouts}</p>
      <h6>Instagram ID : {InstaID}</h6>
      <button>
      <a 
  href={`https://www.instagram.com/${InstaID}`} 
  target="_blank" 
  rel="noopener noreferrer" 
  style={{ textDecoration: 'none' }}
>
  Instagram ID
</a>

</button>
  </div>
  );
};

export default MatchCard;
