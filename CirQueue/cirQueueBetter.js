class CircularQueue {
  constructor(size) {
    
    this.queue = [];
    this.read = 0;
    this.write = 0;
    this.max = size - 1;
    this.count=0;

    while (size > 0) {
      this.queue.push(null);
      size--;
    }
  }
  checkEmpty(){
    var count=0;
    for(let i=0;i<=this.max;i++){
      if(this.queue[i]==null){
        count++;
      }
    }
    if(count==this.max+1){
      return true;
    }
    return false;
  }
  checkFull(){
    var count=0;
    for(let i=0;i<=this.max;i++){
      if(this.queue[i]==null){
        count++;
      }
    }
    if(count>0) {
      return false;
    }
    return true;
   }
  
   print() {
    return this.queue;
   }

   enqueue(item) {
    if(!this.checkFull()){
       this.queue[this.write]=item;
       this.write=(this.write+1)%(this.max+1);
    }else{
      return false
    }
  } 
  
   dequeue() {
    if(!this.checkEmpty()){
       let val=this.queue[this.read];
       this.queue[this.read]=null;
       this.read=(this.read+1)%(this.max+1);
       return val;
     }
    else return null;
  }
}

const cirq = new CircularQueue(5);
cirq.enqueue(3);
cirq.enqueue(4);
cirq.enqueue(1);
cirq.enqueue(5);
cirq.enqueue(2);

console.log(cirq.enqueue(6)); //returns false as queue is full
console.log(cirq.print()); // [3, 4, 1, 5, 2]
console.log(cirq.dequeue()); //3
console.log(cirq.dequeue()); //4
console.log(cirq.print()); //[null, null, 1, 5, 2]