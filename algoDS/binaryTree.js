import TreeNode from './TreeNode'
export default class BinaryTree {
    constructor(tree = []) {
        this.tree = tree;
    }
    inOrder(root) {
        if(root === null) return;
        inOrder(root.left);
        //printValObj.appendString(root.val);
        inOrder(root.right);
    }
    preOrder(root) {
        if(root === null) return;
        //printValObj.appendString(root.val);
        preOrder(root.left_ptr);
        postOrder(root.right_ptr);
    }          
    postOrder(root) {
        if(root === null) return;
        postOrder(root.left_ptr);
        postOrder(root.right_ptr);
        //printValObj.appendString(root.val);
    }
    
}