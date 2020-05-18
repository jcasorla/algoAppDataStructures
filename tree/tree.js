class Node {
    constructor(data){
        this.data=data;
        this.children=[];
    }
    add(data){
        const node = new Node(data);
        this.children.push(node);
    }
    remove(data){
        this.children=this.children.filter(node=>{
            return node.data !=data;
        });
        
    }
}

class Tree {
    constructor(){
        this.root=null;
    }
    traverseBF(fn){
        const arr=[this.root];
        while(arr.length){
            const node = arr.shift();
            
            //ES2015 solution
            arr.push(...node.children);

            //this instead
            // for(let child of node.children){
            //     arr.push(child);
            // }

            //or this
            // for(let i=0; i<node.children.length; i++){
            //     arr.push(node.children[i]);
            // }

            //iterator function which is passed as argument
            fn(node);           
        }

    }

    // traverseDF(fn){
    //     const arr=[this.root];
        
    //     while(arr.length){
    //         const node = arr.shift();
            
    //         //ES2015 solution
    //         arr.unshift(...node.children);            

                      
    //         //iterator function which is passed as argument
    //         fn(node);
                 
    //     }

    // }

    //another way
    traverseDF(callback) {
        (function recurse(currentNode) {
            callback(currentNode); 
            for (var i = 0, length = currentNode.children.length; i < length; i++) {
                recurse(currentNode.children[i]);
            }
        })(this.root);
    }
    
}


const letters = [];
const t = new Tree();
t.root = new Node('a');
t.root.add('b');
t.root.add('d');
t.root.children[0].add('c');

t.traverseDF(node => {
  letters.push(node.data);
});

console.log(letters);
// expect(letters).toEqual(['a', 'b', 'c', 'd']);