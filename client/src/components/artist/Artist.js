import React from 'react';
import './ArtistList.css';

export default function Artist(props) {
  return (
    <div id={props.artist.name} className="Artist">
      <img onClick={props.onChange} alt={props.artist.name} src={props.artist.img_url}/>
      <h3 onClick={props.onChange}>{props.artist.name.toUpperCase()}</h3>
      <span><input className="favebutton" type="button" value="Add to Favorites"/></span>
    </div>
  )
}
