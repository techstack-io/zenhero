import React from 'react';
import Bounce from 'react-reveal/Bounce';

class BounceExample extends React.Component {
  render() {
    return (
      <div>
        <Bounce left>
          <h1 className="text-center text-4xl text-gray-800 p-12 lg:p-20">Our mind has eight aspects, or “consciousnesses.”</h1>
        </Bounce>

      </div>
    );
  }
}

export default BounceExample;