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
            id="1"
            isDragable="false"
            image="img/banana.png"
            customDragElement={cutomDragElem}
          />
          <Boxable
            targetKey="box"
            label="cheeseburger"
            id="2"
            isDragable="true"
            image="img/surprise.png"
            customDragElement={cutomDragElem}
          />
          <Boxable
            targetKey="box"
            label="orange"
            id="3"
            isDragable="true"
            image="img/orange.png"
            customDragElement={cutomDragElem}
          />
          <Boxable
            targetKey="box"
            label="pickle"
            id="4"
            isDragable="true"
            image="img/pickle.png"
            customDragElement={cutomDragElem}
          />
          <Boxable
            targetKey="box"
            label="gorilla"
            id="5"
            isDragable="true"
            image="img/gorilla.png"
            customDragElement={cutomDragElem}
          />
          <Boxable
            targetKey="box"
            label="puppy"
            id="6"
            isDragable="true"
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
