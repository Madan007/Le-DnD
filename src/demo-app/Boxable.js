import React from 'react';
import { DragContainer } from '../le-dnd';

/*
    Boxable -- a thing you can drag into a Box
*/

export default class Boxable extends React.Component {
  render() {
    return (
      <div className="boxable_component" style={{ display: 'inline-block' }}>
        <DragContainer
          targetKey={this.props.targetKey}
          isDragable={this.props.isDragable}
          dragData={{ label: this.props.label }}
          customDragElement={this.props.customDragElement}
          onDragStart={() => console.log('start')}
          onDrag={() => console.log('dragging')}
          onDragEnd={() => console.log('end')}
          onDrop={(e) => console.log('dropper', e)}
        >
          <img
            id={this.props.id}
            src={this.props.image}
            height="45"
            alt=""
            style={{ marginLeft: 40 }}
          />
        </DragContainer>
      </div>
    );
  }
}
