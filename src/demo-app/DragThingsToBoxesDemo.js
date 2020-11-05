import React from 'react';
import Boxable from './Boxable';
import Box from './Box';
import './DragThingsToBoxesDemo.css';

export default class DragThingsToBoxesDemo extends React.Component {
  render() {
    // const cutomDragElem = <div class="drag_elem">Drag Me</div>;
    const cutomDragElem = null;

    return (
      <div className="drag_things_to_boxes">
        <h2>Demo: Drag things Into and Between Boxes</h2>
        You can also drag to re-order within boxes. Note &#8759; used as drag
        handles.
        <div className="things_to_drag">
          <br /> <br />
          <Boxable
            targetKey="box"
            label="bananas"
            image="img/banana.png"
            customDragElement={cutomDragElem}
          />
          <Boxable
            targetKey="box"
            label="cheeseburger"
            image="img/surprise.png"
            customDragElement={cutomDragElem}
          />
          <Boxable
            targetKey="box"
            label="orange"
            image="img/orange.png"
            customDragElement={cutomDragElem}
          />
          <Boxable
            targetKey="box"
            label="pickle"
            image="img/pickle.png"
            customDragElement={cutomDragElem}
          />
          <Boxable
            targetKey="box"
            label="gorilla"
            image="img/gorilla.png"
            customDragElement={cutomDragElem}
          />
          <Boxable
            targetKey="box"
            label="puppy"
            image="img/puppy.png"
            customDragElement={cutomDragElem}
          />
        </div>{' '}
        <br /> <br />
        <div className="boxes">
          <Box targetKey="box" name="1" />
          <Box targetKey="box" name="2" />
        </div>
        <div style={{ clear: 'both' }}>&nbsp;</div>
      </div>
    );
  }
}
