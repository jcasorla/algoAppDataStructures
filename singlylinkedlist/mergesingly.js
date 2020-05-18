var SinglyLinkedList = require('./singly');

var sll = new SinglyLinkedList();
sll.insert(6, "head");
sll.insert(5, 6);
sll.insert(3, 5);
sll.insert(1, 3);
sll.insert(8, 1);
sll.insert(7, 8);
sll.insert(2, 7);
sll.insert(4, 2);

function mergeSortLinkedList(sll) {
    if(sll.nodeCount() <2){
        return sll;
    }
    var left = new SinglyLinkedList();
    var right = new SinglyLinkedList();
    var currentLeftNode = left.head;
    var currentRightNode = right.head;
    var currentListNode= sll.head;

    for(var i=0; i<sll.nodeCount(); i++){
        if(i < (sll.nodeCount())/2){
            //push to the left
            left.insert(currentListNode.next.element, currentLeftNode.element);
            currentLeftNode=currentLeftNode.next;
        }else{
            //push to the right
            right.insert(currentListNode.next.element, currentRightNode.element);
            currentRightNode=currentRightNode.next;
        }
        currentListNode = currentListNode.next;
    }
    return mergeLinkedLists(mergeLinkedLists(left), mergeLinkedLists(right));

}

function mergeLinkedLists(left, right) {
    var output = new SinglyLinkedList();
    var currentOutput = output.head;

    //case 1
    while(left.nodeCount() > 0 && right.nodeCount()>0){
        if(left.head.next.element <= right.head.next.element){
            output.insert(left.head.next.element, currentOutput.element);
            left.remove(left.head.next.element);
            currentOutput = currentOutput.next;
        }else{
            output.insert(right.head.next.element, currentOutput.element);
        }
        
    }

    while(left.nodeCount() > 0){
        //do something

    }

    while(right.nodeCount() > 0){
        //do something

    }

    return output;
}

var answer = mergeSortLinkedList(sll);
answer.display();
// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8

