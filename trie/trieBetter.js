class TrieNode{
    constructor(letter=''){
        this.val=letter;
        this.children={};
        this.completesString=false;
    }
}

class Trie{
    constructor(){
        this.rootNode=new TrieNode();
    }

    insert(word){
        let node= this.rootNode;

        for(let i=0; i < word.length; i++){
            let currentLetter=word[i]

            if(node.children[currentLetter]){
                node = node.children[currentLetter];
            }else{
                let newNode = new TrieNode(currentLetter);
                node.children[currentLetter] = newNode;
                node = newNode;
            }
        }
        node.completesString = true;

    }

    find(word){
        let node= this.rootNode;

        for(let i=0; i<word.length; i++){
            let currentLetter=word[i]

            if(node.children[currentLetter]){
                node=node.children[currentLetter];
            }else{
                return false;
            }
        }
        return true;
    }

    remove(word){
        let node = this.rootNode;
        let suffixes = [];

        //for case where no part of 'word' can be removed  from trie
        for(let i = 0; i < word.length; i++){
            let currentLetter= word[i];
            if(node.children[currentLetter]){
                node = node.children[currentLetter];
                suffixes.unshift(node);

                if(i===word.length && Object.keys(node.children).length){
                    throw new Error('suffixes in trie depend on: ' + word);
                }
            }
        }

        //for case where some parts of 'word' can be removed from trie

        for(let j = 1; j < suffixes.length; j++){
            let parent =  suffixes[j];
            let child =  word[suffixes.length-j];
            delete parent.children[child];
            
            if(parent.completesString || Object.keys(parent.children).length){
                return 'some suffixes of: '+ word +' removed from trie';
            }
        }

        //for case where all parts of 'word' can be removed from trie
        delete this.rootNode.children[word[0]];
        return 'removed: ' + word +': no other ' + word[0] +'-words remain';

    }  

    traverseBF(fn){
        const arr=[this.rootNode];
        let values;
        while(arr.length){
            const node = arr.shift();
           
            values = Object.values(node.children);
        
            for(let i=0; i<values.length; i++){       
                arr.push(values[i]);
            }           

            //iterator function which is passed as argument
            fn(node);           
        }

    }

    traverseDF(callback) {
        (function recurse(currentNode) {
            callback(currentNode); 
            let values = Object.values(currentNode.children);
            for (var i = 0, length = values.length; i < length; i++) {
                recurse(values[i]);
            }
        })(this.rootNode);
    }
}

const trie = new Trie();
trie.insert('string');
trie.insert('strong');
trie.insert('strey');
trie.insert('trie');
console.log(trie.find('max')); //returns false
console.log(trie.find('strong')); //returns true
console.log(trie.remove('strey')); //some suffixes of "${word}" removed from trie
console.log(trie.find('strong')); //returns true
console.log(trie.find('string')); //returns true
console.log(trie.remove('trie')); //all removed

const letters = [];
const letters2 = [];
trie.traverseBF(node => {
    letters.push(node.val);    
});

trie.traverseDF(node => {
    letters2.push(node.val);    
});



  for(val of letters){
      console.log(val);
  }

console.log('count: ' + letters.length);

for(val of letters2){
    console.log(val);
}

console.log('count: ' + letters2.length);