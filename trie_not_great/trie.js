class Node{
    constructor(chr, value){
        this.chr=chr;
        this.value=value;
        this.next=[];
    }
}

class Trie{
    constructor(){
        this.root= new Node("A", null);
    }

    insert(word,value){
        let node=this.root;

        for(var i =1; i<word.length; i++){
            
            let curchar=word[i];
            
            
            if(curchar===word[word.length-1]){
                let child=new Node(curchar,value);
                node.next.push(child);
            }
            else{                
                let child=new Node(curchar);
                node.next.push(child);                
            }
            
            
            
            
        }

    }

    get(word){

        let node=this.root;

        let i=0;
        while(node.next){
            node=node.next;
            i++;
            
        }
        return node;

    }
}

const t = new Trie();
t.insert("ANDREW", "awesome");
// t.insert("ANDY","amazing");
// t.insert("ANT", "what");
console.log(t.get("ANDY"));
// console.log(t.get("ANDREW"));
// console.log(t.get("ANT"));

