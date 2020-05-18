
class Node{
    constructor(data, next=null, prev=null){
        this.data=data;
        this.next=next;
        this.prev=prev;
        
    }
}

class DLL{
    constructor(){
        this.head=null;
        this.tail=null;

    }
    addFront(data){
        
        if(!this.head){
            this.head = new Node(data);
            return;
        }
        this.head.prev=new Node(data, this.head);
        this.head=this.head.prev;

    }
    setTail(){
        let runner=this.head;

        while(runner.next){
            runner=runner.next;
        }
        this.tail=runner;
    }
    addBack(data){
        if(!this.tail){
            this.tail=new Node(data);
        }
        this.tail.next=new Node(data,null,this.tail);
        this.tail=this.tail.next;
    }
    printForward(){
        if(!this.head){
            console.log("DLL is empty");
        }
        let runner=this.head;

        while(runner){
            console.log(runner.data);
            runner=runner.next;
        }
    }

    printBackward(){
        if(!this.tail){
            console.log("DLL is empty");
        }
        let runner=this.tail;
        while(runner){
            console.log(runner.data);
            runner=runner.prev;
        }
    }

    findMidpoint(){
        let front=this.head;
        let back=this.tail;

        while(front || back){
            if(front===back.prev){
                return front;
            }
            if(front===back){
                return front;
            }
            front=front.next;
            back=back.prev;
        }
        return null;
    }
    isPalin(){
        let front=this.head;
        let back=this.tail;
        
        while(front || back){
            if(front.data!==back.data){
                return false;
            }
            front=front.next;
            back=back.prev;

        }
        return true;
    }
	
	isPalinBetter(){
		let front=this.head;
        let back=this.tail;
        
        //not needed in while: back.next!==front
        while(front.prev!== back && front!==back){
            // console.log("front: "+front.data);
            // console.log("back: "+ back.data);
            
            if(front.data!==back.data){
                return false;
            }
            front=front.next;
            back=back.prev;

        }
        return true;
		
	}
    removeBack(){
        let back=this.tail;
        let tmp=this.tail;
        back=back.prev;
        this.tail=back;
        back.next=null;
        return tmp;
    }

    removeFront(){
        let front=this.head;
        let tmp=this.head;
        front=front.next;
        this.head=front;
        front.prev=null;
        return tmp;
    }

    removeKLast(n){
        let back =  this.tail;

        for(var i=0; i<n; i++){
            back=back.prev;
        }
        let tmp = back
        let back2=back.prev;
        back2.next=back2.next.next;
        back2.next.prev=back2.next.prev.prev;
        back=null;
        return tmp;

    }
    printKLast(n){
        let back =  this.tail;

        for(var i=0; i<n; i++){
            back=back.prev;
        }
     
        return back;

    }

    reverseData(){
        let back =  this.tail;
        let front = this.head;
        let tmp1, tmp2;

        while(front!==back && front.prev!==back){           
           
            tmp1=front.data;
            tmp2=back.data;
            back.data=tmp1;
            front.data=tmp2;
            front=front.next;
            back=back.prev;
        }
    }

    reverse(){
        let tmp=null;
        let node=this.head;

        while(node){
            node.prev=node.next;
            node.next=tmp;
            tmp=node;
            node=node.prev;
        }
        this.tail=this.head;
        this.head=tmp;
    }
    setCircle(){
        this.tail.next=this.head.next;
    }
    isCircle(){
        if(this.tail.next!=null){
            return true;
        }
        return false;
    }
    breakCircle(){
        this.tail.next=null;
    }
    orginCircle(){
        return this.tail.next;
    }


}


const dll = new DLL();

dll.addFront('a');
dll.addFront('b');
dll.addFront('c');
dll.addFront('b');
dll.addFront('a');
dll.setTail();
// dll.addBack(5);
// dll.printForward();
console.log("*****************")

// console.log(dll.findMidpoint().data);
console.log(dll.isPalinBetter());
// console.log("removed node " + dll.removeBack().data);
// console.log("removed node " + dll.removeFront().data);
// console.log("removed k from last: " + dll.removeKLast(1).data);
// dll.printBackward();
// dll.reverse();
// dll.printForward();
// dll.setCircle();
// console.log(dll.isCircle());
// console.log(dll.orginCircle().data);
// dll.breakCircle();
// console.log(dll.isCircle());






