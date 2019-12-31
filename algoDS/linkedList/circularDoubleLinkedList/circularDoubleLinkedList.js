import circularDoubleLLNode from './circularDoubleLLNode';
export default class circularDoubleLL {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }
    // functions to be implemented 
    add(element) {
        let newNode = new circularDoubleLLNode(element);
        if(head === null && tail === null) {
            head = newNode;
            tail = newNode;
        } else {
            newNode.next = this.tail.next;
            newNode.prev = this.tail;
            this.tail.next = newNode;
            this.tail = newNode;

        }
        this.size++;
    }
    isEmpty() {
        return this.size < 1;
    }
    size_Of_List(){
        return this.size;
    }
    // insertAt(element, location) 
    // removeFrom(location) 
    // removeElement(element) 
  
    // Helper Methods 
    // isEmpty 
    // size_Of_List 
    // PrintList
}
