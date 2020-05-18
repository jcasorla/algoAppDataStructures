

function Node(element){
    this.element=element;
    this.next=null;
}

function SLL(){
    this.head= new Node("head");
}

SLL.prototype.find= function(element){
    var currentNode=this.head;

    while(currentNode.element !==element ){
        currentNode=currentNode.next;
    }

    return currentNode;
}

SLL.prototype.insert = function(newElement, element){
    var newNode= new Node(newElement);
    var current = this.find(element);    
    newNode.next=current.next;
    current.next=newNode; 
    
}

SLL.prototype.display = function(){
    var currentNode=this.head;
    while(currentNode.next !==null){
        console.log(currentNode.next.element);
        currentNode=currentNode.next
    }
}

// var cities= new SLL();
// cities.insert("LA", "head");
// cities.insert("SF", "LA");
// cities.insert("Seattle", "SF");
// cities.display();

SLL.prototype.findPrevious= function(element){
    var currentNode=this.head;
    
    while(currentNode.next !=null && currentNode.next.element!==element){
        currentNode=currentNode.next;
    }

    return currentNode;
}

SLL.prototype.remove = function(element){
    var previousNode=this.findPrevious(element);
    previousNode.next=previousNode.next.next;
} 

var basketballTeams = new SLL();
basketballTeams.insert("Lakers", "head");
basketballTeams.insert("Blazers", "Lakers");
basketballTeams.insert("Celtics", "Blazers");
basketballTeams.insert("Kings", "Celtics");
basketballTeams.display();
console.log("Removing Celtics");
basketballTeams.remove("Celtics");
basketballTeams.display();