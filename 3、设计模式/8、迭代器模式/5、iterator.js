class Tree {
  constructor(left, value, right) {
    this.left = left;
    this.value = value;
    this.right = right;
  }
}

function make(array) {
  if (array.length === 1) return new Tree(null, array[0], null);
  return new Tree(make(array[0]), array[1], make(array[2]));
}

let tree = make([[['D'], 'B', ['E']], 'A', [['F'], 'C', ['G']]]);
console.log(tree);

/**
 * 先序遍历
 */
function* leftOrder(tree) {
  if (tree) {
    yield tree.value;
    yield* leftOrder(tree.left);
    yield* leftOrder(tree.right);
  }
}

/**
 * 中序遍历：深度优先
 */
function* inOrder(tree) {
  if (tree) {
    yield* inOrder(tree.left);
    yield tree.value;
    yield* inOrder(tree.right);
  }
}

/**
 * 后序遍历
 */
function* rightOrder(tree) {
  if (tree) {
    yield tree.value;
    yield* rightOrder(tree.left);
    yield* rightOrder(tree.right);
  }
}

let result = [];
for (let node of leftOrder(tree)) {
  result.push(node);
}

console.log(result);
