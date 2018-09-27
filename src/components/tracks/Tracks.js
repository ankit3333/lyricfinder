import React, { Component } from "react";
import { Consumer } from "../../context";
import Track from "../tracks/Track";

class Tracks extends Component {
  render() {
    return (
      <Consumer>
        {value => {
          const { track_list, heading } = value;

          if (track_list.length === 0) {
            return <h3 className="text-center mt-3">No Tracks Found</h3>;
          } else if (track_list === undefined) {
            return <h3>No Tracks Found</h3>;
          } else {
            return (
              <React.Fragment>
                <h3 className="text-center mb-4">{heading}</h3>
                <div className="row">
                  {track_list.map(item => (
                    <Track key={item.track.track_id} track={item.track} />
                  ))}
                </div>
              </React.Fragment>
            );
          }
        }}
      </Consumer>
    );
  }
}

export default Tracks;
