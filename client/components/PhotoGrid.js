import React from 'react';
import { Link } from 'react-router';
import propTypes from 'prop-types';

const Single = React.createClass({
  render() {
    return (
    <div className="photo-grid">
      <pre>
        {JSON.stringify(this.props.posts, null, ' ')}
      </pre>
    </div>
    )
  }
});

export default Single;
