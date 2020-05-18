
class Node{
    constructor(data){
        this.data=data;
        this.left=null;
        this.right=null;
    } 
}

class BST{
    constructor(){
        this.root=null;
    }

    isEmpty(){
        if(!this.root){
            return true;
        }else{
            return false;
        }
    
    }
    
    insert(data, node=this.root){
        let n = new Node(data);
        
        if(!this.root){
            this.root=n;
            return this;
        }
        if(data < node.data){
            if(node.left){
                return this.insert(n.data, node.left)
            }else{
                node.left=n;
            }
        }
        if(data > node.data){
            if(node.right){
                return this.insert(n.data, node.right)
            }else{
                node.right=n;
            }
        }
    }
    findMin(node=this.root){
        
        if (!node){
            return;
        }
        let min=node;
        if(!min.left){
            return min;
        }
        return this.findMin(min.left);
    }
    findMax(node=this.root){
        
        if (!node){
            return;
        }
        let max=node;
        if(!max.right){
            return max;
        }
        return this.findMax(max.right);
    }
    traversePreOrder(node=this.root){
        if(!node) return this;
        console.log(node.data);
        this.traversePreOrder(node.left);
        this.traversePreOrder(node.right);
        return this;
    }
    traverseInOrder(node=this.root){
        if(!node) return this;        
        this.traversePreOrder(node.left);
        console.log(node.data);
        this.traversePreOrder(node.right);
        return this;
    }
    traversePostOrder(node=this.root){
        if(!node) return this;        
        this.traversePreOrder(node.left);        
        this.traversePreOrder(node.right);
        console.log(node.data);
        return this;
    }

    findDepth(node=this.root){
        if(!node) return 0;
        var left=this.findDepth(node.left) + 1;
        var right=this.findDepth(node.right) + 1;
        var max=Math.max(right,left);
        return max;
    }



    size(node=this.root){
        if(!node) return 0;
        else{
            return (this.size(node.left) + 1 + this.size(node.right));
        }
    }

    contains(data,node=this.root){
        if(data===node.data){
            return node;
        }
        
        if(data<node.data && node.left){
            return this.contains(data,node.left);
        }
        if(data>node.data && node.left){
            return this.contains(data,node.right);
        }else{
            return null;
        }

    }
    

    findSum(node=this.root, n=0){
        if(!node) return n;

        if(!node.left && !node.right){
            node.data+=n;
            return node.data
        }
        node.data+=this.findSum(node.right,n);
        return this.findSum(node.left, node.data);

    }


    // helper method that calls the  
    // removeNode with a given data 
    remove(data){
        if(!data){
            return;
        }
        // root is re-initialized with 
        // root of a modified tree. 
        this.root=this.removeNode(this.root,data);
    }

    // Method to remove node with a  
    // given data 
    // it recurrs over the tree to find the 
    // data and removes it 

    removeNode(node, key){
        // if the root is null then tree is  
        // empty         
        if(!node){
            return null;
        }
        // if data to be delete is less than  
        // roots data then move to left subtree 
        else if(key<node.data){
            node.left=this.removeNode(node.left,key);
            return node;
        }
        // if data to be delete is greater than  
        // roots data then move to right subtree 
        else if(key>node.data){
            node.right=this.removeNode(node.right,key);
            return node;
        }
        // if data is similar to the root's data  
        // then delete this node 
        else{
            // deleting node with no children 
            if(!node.left && !node.right){
                node=null;
                return node;
            }
            // deleting node with one children
            if(!node.left){
                node=node.right;
                return node;
            }
            else if(!node.right){
                node=node.left;
                return node;
            }

            // Deleting node with two children 
            // minumum node of the rigt subtree 
            // is stored in aux
            
            var aux =  this.findMin(node.right);
            node.data=aux.data;

            node.right=this.removeNode(node.right, aux.data);
            return node;

        }

    }

    validate(node=this.root, min=null, max=null){
        if(max!==null && node.data> max){
            return false;
        }
        if(min!==null && node.data<min){
            return false;
        }

        if(node.left && !this.validate(node.left, min, node.data )){
            return false;
        }
        if(node.right && !this.validate(node.right,node.data,max)){
            return false;
        }
        return true;

    }
    
}

const bst = new BST();

bst.insert(10);
bst.insert(2);
bst.insert(1);
bst.insert(5);
bst.insert(12);
bst.insert(11);
bst.insert(15);


// console.log(bst.findMin());
// console.log(bst.findMax());
// bst.traversePreOrder();
// bst.traverseInOrder();
// bst.traversePostOrder();
// console.log(bst.findDepth());
// console.log(bst.size());
// console.log(bst.contains(15));
// console.log(bst.findSum());

// bst.remove(10);
// bst.traversePreOrder();
console.log(bst.validate());


function remove(value, parent=null) {
    if(value <this.value){
        if(!this.left){
            this.right.remove(value,this)
        }
    }
    else if(value>this.value){
        if(!this.right){
            this.right.remove(value,this);
        }
       
    } else{
        if(!this.left && !this.right){
            this.value=this.right.getMinValue();
            this.right.remove(this.value,this);
        }else if(!parent){
            if(!this.left){
                this.value=this.left.value;
                this.right=this.left.right;
                this.left=this.left.left;
            }else if(!this.right){
                this.value=this.right.value;
                this.left=this.right.left;
                this.right=this.right.right;
            }else{
                this.value=null;							
            }			
            
        }
        else if(parent.left===this){
            parent.left=this.left !==null ? this.left : this.right;
        }
        else if(parent.right===this){
            parent.right=this.left !==null ? this.left : this.right;
        }
    }
    return this;
}