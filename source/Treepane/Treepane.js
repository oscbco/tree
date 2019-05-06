import React from 'react';
import { FixedSizeList as List } from 'react-window';
import AutoSizer from 'react-virtualized-auto-sizer';

import { findNode, getNodeByKeypath, getTotal } from '../getFlattenedArrayItem/';
import css from './_Treepane.scss';

export default function Treepane ({ collection, setCollection, onToggle }) {
  const handleToggle = (keypath) => {
    onToggle(keypath);
  };

  const getTreeLines = (keypath, node) => {
    const partialKeypath = [];
    if (!keypath) {
      return null;
    }
    return keypath.map((elem, key) => {
      partialKeypath.push(elem);
      const partialNode = getNodeByKeypath(collection, partialKeypath);
      if (partialKeypath.length === keypath.length) {
        return (
          <React.Fragment key={key}>
            {partialNode.hasNextSibling ? <div className={css.midl}>&nbsp;</div> : <div className={css.last}>&nbsp;</div>}
            {partialNode.child ? <div className={css.toggle} onClick={handleToggle.bind(this, [...keypath])}>{node.toggle ? '+' : '-'}</div> : null}
          </React.Fragment>
        );
      } else {
        return partialNode.hasNextSibling ? <div key={key} className={css.line}>&nbsp;</div> : <div key={key} className={css.none}>&nbsp;</div>;
      }
    });
  };

  const Row = ({ index, style }) => {
    const node = findNode({ requestedIndex: index, collection });
    return (
      <div style={style} className={css.node}>
        {getTreeLines(node.keypath, node)}<div className={css.nodeText}>{node.value}</div>
      </div>
    );
  };

  return (
    <React.Fragment>
      <AutoSizer>
        {({ height, width }) => (
          <div className={css.treepanel}>
            <List
              itemCount={getTotal(collection)}
              itemSize={20}
              height={height}
              width={width}>
              {Row}
            </List>
          </div>
        )}
      </AutoSizer>

    </React.Fragment>
  );
}
