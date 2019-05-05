export function getNodeByKeypath (collection, keypath) {
  if (!keypath) {
    return;
  }
  let node = null;
  let newCollection = collection;

  for (let i = 0; i < keypath.length; i++) {
    try {
      node = newCollection[keypath[i]];
      node.selfReference = newCollection[keypath[i]];
      node.hasPrevSibling = newCollection[keypath[i] - 1] !== undefined;
      node.hasNextSibling = newCollection[keypath[i] + 1] !== undefined;
      newCollection = newCollection[keypath[i]].child;
    } catch (exception) {
      node = undefined;
      break;
    }
  }
  return node;
}

const findUppermostKeypath = (collection, keypath) => {
  let node = getNodeByKeypath(collection, keypath);
  while (node.child !== null) {
    keypath.push(node.child.length - 1);
    node = getNodeByKeypath(collection, keypath);
  }
  return keypath;
};

const findLowerNode = ({ collection, requestedIndex, count = 0, keypath = [0] }) => {
  let breakLoop = false;
  let prevNode = null;
  do {
    let node = getNodeByKeypath(collection, keypath);
    if (node) {
      if (node.child != null && prevNode && node.child[0] !== prevNode) {
        keypath = findUppermostKeypath(collection, keypath);
        prevNode = null;
      } else {
        if (count === requestedIndex) {
          node.count = count;
          node.keypath = keypath;
          return node;
        }
        if (node.hasPrevSibling) {
          keypath[keypath.length - 1]--;
          count--;
        } else {
          if (keypath.length > 1) {
            prevNode = node.selfReference;
            keypath.pop();
            count--;
          } else {
            breakLoop = true;
          }
        }
      }
    } else {
      breakLoop = true;
    }
  } while (breakLoop === false);
  return {
    value: undefined,
    count: undefined,
    keypath: undefined
  };
};

const findUpperNode = ({ collection, requestedIndex, count = 0, keypath = [0] }) => {
  let breakLoop = false;
  let prevNode = null;
  do {
    let node = getNodeByKeypath(collection, keypath);
    if (node) {
      if (count === requestedIndex) {
        node.count = count;
        node.keypath = keypath;
        return node;
      }
      if (node.child !== null && node.toggle === false && !prevNode && node.child[node.child.length - 1] !== prevNode) {
        keypath.push(0);
        count++;
        prevNode = null;
      } else {
        prevNode = null;
        if (node.hasNextSibling) {
          keypath[keypath.length - 1]++;
          count++;
        } else {
          if (keypath.length > 1) {
            prevNode = node.selfReference;
            keypath.pop();
            // count++;
          } else {
            breakLoop = true;
          }
        }
      }
    } else {
      breakLoop = true;
    }
  } while (breakLoop === false);
  return {
    value: undefined,
    count: undefined,
    keypath: undefined
  };
};

export const findNode = (function () {
  let keypath = [0];
  let count = 0;
  return function ({ requestedIndex, collection }) {
    let node = null;
    if (requestedIndex < count) {
      node = findLowerNode({ requestedIndex, collection, count, keypath });
      keypath = node.keypath;
      count = node.count;
    } else {
      node = findUpperNode({ requestedIndex, collection, count, keypath });
      keypath = node.keypath;
      count = node.count;
    }
    return node;
  };
})();

export const getTotal = (collection) => {
  let counter = 0;
  let node = null;
  do {
    node = findNode({ requestedIndex: counter, collection });
    counter++;
  } while (node.keypath !== undefined);
  return counter - 1;
};
