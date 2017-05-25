import React from 'react';
import { Link } from 'react-router';
import propTypes from 'prop-types';
import Photo from './Photo';

const PhotoGrid = React.createClass({
  render() {
    return (
    <div className="photo-grid">
      {this.props.posts.map((post, i) => <Photo {...this.props} key={i} i={i} post={post} />)}
    </div>
    )
  }
});

export default PhotoGrid;
