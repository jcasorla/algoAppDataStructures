class Node{
    contructor(data){
        this.data=data;       
    }
}

class Tree{
    constructor(){
        this.root=null;
        this.left=null;
        this.right=null;
    }

    maxDepth(node){

        if (!node ){
            return 0
        }        
    
        //Get the depth of the left and right subtree 
        //using recursion.
        const leftDepth = this.maxDepth(node.left)
        const rightDepth = this.maxDepth(node.right)
    
        //Choose the larger one and add the root to it.
        if (leftDepth > rightDepth){
            // return leftDepth + 1;
            leftDepth + 1;
            return "left"
        }
        
        else{
            // return rightDepth + 1;
            // rightDepth + 1;
            // let string1="right: "+ rightDepth; 
            return "right";

        }
        

    }
}

const node= new Node(1);
const t = new Tree();

t.root=node;

t.root.left= new Node(2);
t.root.left.left= new Node(3);
t.root.left.rigth= new Node(2);

t.root.right=new Node(1);
t.root.right.right= new Node(2);
t.root.right.right.right=new Node(3);
t.root.right.right.right.right=new Node(3);
t.root.right.right.right.right.right=new Node(3);

console.log("the max depth is: " + t.maxDepth(t.root));