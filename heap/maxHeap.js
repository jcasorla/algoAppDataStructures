class MaxHeap{
    constructor(){
        this.heap = [null];
    }
    print(){
		return this.heap;
    }

    insert(num){
        this.heap.push(num);
		if (this.heap.length > 2) {
			let idx = this.heap.length - 1;
			while (this.heap[idx] > this.heap[Math.floor(idx/2)]) {
				if (idx >= 1) {
					[this.heap[Math.floor(idx/2)], this.heap[idx]] = [this.heap[idx], this.heap[Math.floor(idx/2)]];
					if (Math.floor(idx/2) > 1) {
						idx = Math.floor(idx/2);
					} else {
						break;
					};
				};
			};
		};
    }

    remove(){
        let smallest = this.heap[1];
		if (this.heap.length > 2) {
			this.heap[1] = this.heap[this.heap.length - 1];
			this.heap.splice(this.heap.length - 1);
			if (this.heap.length == 3) {
				if (this.heap[1] < this.heap[2]) {
					[this.heap[1], this.heap[2]] = [this.heap[2], this.heap[1]];
				};
				return smallest;
			};
			let i = 1;
			let left = 2 * i;
			let right = 2 * i + 1;
			while (this.heap[i] <= this.heap[left] || this.heap[i] <= this.heap[right]) {
				if (this.heap[left] > this.heap[right]) {
					[this.heap[i], this.heap[left]] = [this.heap[left], this.heap[i]];
					i = 2 * i
				} else {
					[this.heap[i], this.heap[right]] = [this.heap[right], this.heap[i]];
					i = 2 * i + 1;
				};
				left = 2 * i;
				right = 2 * i + 1;
				if (this.heap[left] == undefined || this.heap[right] == undefined) {
					break;
				};
			};
		} else if (this.heap.length == 2) {
			this.heap.splice(1, 1);
		} else {
			return null;
		};
		return smallest;

    }
    sort() {
		let result =[]
		while (this.heap.length > 1) {
			result.push(this.remove());
		};
		result.unshift(null);
		this.heap=result;
		return result;
		
	};
    
}

const heap = new MaxHeap();

heap.insert(1);
heap.insert(2);
heap.insert(3);
heap.insert(4);
heap.insert(5);
heap.insert(6);
heap.remove();
heap.remove();
console.log(heap.sort()); //[null, 4, 3, 2, 1]
console.log(heap.print()); //[null, 4, 3, 2, 1]