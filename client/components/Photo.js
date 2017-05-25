import React from 'react';
import { Link } from 'react-router'

const photo = React.createClass({
  render() {
    return (
      <figure className="grid-figure">
        <div className="grid-photo-wrap">
          <Link to={`/view/${this.props.post.code}`}>
            {this.props.post.caption}
          </Link>
        </div>
      </figure>
    )
  }
});

export default photo;
