

class cirQueue{
    constructor(cap){
        this.head=0;
        this.tail=0;
        this.cap=cap;
        this.arr=[];
        for(var i=0; i<this.cap; i++){
            this.arr.push(null);
        }

    }

    enqueue(val){
        // console.log((this.tail+1) % this.cap);
        if(!val ||this.head ==(this.tail+1) % this.cap){
            return false;
        }
        console.log((this.tail+1) % this.cap);
        if(!this.arr[this.tail]){
            
            this.tail=(this.tail+1) % this.cap;                   
        }
        this.arr[this.tail]=val;
        return this;   

    }

    dequeue(){
        if(!this.arr[this.head]){
            return false;
        }
        this.arr[this.head] =null;

        if(this.arr[(this.head+1)%this.cap] !=null){
            this.arr[(this.head+1)%this.cap];
            return this;
        }
    }
}

const cir = new cirQueue(5);
console.log(cir.enqueue(5));
console.log(cir.enqueue(3));
// cir.enqueue(5);
// cir.enqueue(3);
console.log(cir.arr);
