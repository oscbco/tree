import React from 'react';
import { findNode, getNodeByKeypath, getTotal } from '../getFlattenedArrayItem/';
import css from './_Treepane.scss';

export default function Treepane ({ collection, setCollection, onToggle }) {
  const handleToggle = (node) => {
    onToggle(node.keypath);
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
          <React.Fragment>
            {partialNode.hasNextSibling ? <div className={css.midl}>&nbsp;</div> : <div key={key} className={css.last}>&nbsp;</div>}
            {partialNode.child ? <div className={css.toggle} onClick={handleToggle.bind(this, node)}>-</div> : null}
          </React.Fragment>
        );
      } else {
        return partialNode.hasNextSibling ? <div className={css.line}>&nbsp;</div> : <div key={key} className={css.none}>&nbsp;</div>;
      }
    });
  };

  const printTree = () => {
    let counter = 0;
    let node = null;
    let nodes = [];
    do {
      node = findNode({ requestedIndex: counter, collection });
      counter++;
      nodes.push(<div className={css.node}>{getTreeLines(node.keypath, node)}{node.value}</div>);
    } while (node.keypath !== undefined);
    return nodes;
  };

  return (
    <React.Fragment>
      { getTotal(collection) } items
      <div className={css.treepanel}>
        { printTree() }
        <div className={css.rootNode}>/</div>
        <div className={css.node}><div className={css.midl}>&nbsp;</div><div className={css.toggle}>-</div>sbin</div>
        <div className={css.node}><div className={css.line}>&nbsp;</div><div className={css.midl}>&nbsp;</div><div className={css.toggle}>-</div>usr</div>
        <div className={css.node}><div className={css.line}>&nbsp;</div><div className={css.line}>&nbsp;</div><div className={css.last}>&nbsp;</div><div className={css.toggle}>-</div>local</div>
        <div className={css.node}><div className={css.line}>&nbsp;</div><div className={css.line}>&nbsp;</div><div className={css.none}>&nbsp;</div><div className={css.last}>&nbsp;</div>www</div>
        <div className={css.node}><div className={css.line}>&nbsp;</div><div className={css.last}>&nbsp;</div>temp</div><div className={css.node}><div className={css.last}>&nbsp;</div><div className={css.toggle}>+</div>proc</div>
      </div>
    </React.Fragment>
  );
}
