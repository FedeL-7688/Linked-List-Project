import { Node } from "./node.js";
import "./style.css";

class LinkedList {
  constructor() {
    this.head = null;
    this._size = 0;
  }
  append(val) {
    const newNode = new Node(val);
    if (this.head == null) {
      this.prepend(val);
    } else {
      let last = this.head;
      while (last.nextNode != null) last = last.nextNode;
      last.nextNode = newNode;
      this._size++;
    }
    console.log(this._size);
  }
  prepend(val) {
    const newNode = new Node(val, this.head);

    this.head = newNode;

    this._size++;
  }
  size() {
    return this._size;
  }
  returnHead() {
    return this.head.value;
  }
  returnTail() {
    if (this.head == null) {
      return undefined;
    } else {
      let last = this.head;
      while (last.nextNode != null) {
        last = last.nextNode;
        if (last.nextNode == null) {
          return last.value;
        }
      }
    }
  }
  at(index){ 
    let counter = 0
    let actual = this.head
    while (actual!=null){
      if (counter==index){
        return "the value at",index,"is",actual.value
      }
      actual = actual.nextNode;
      counter++
      
    }
  }
    pop(){ 
        let prevEl = this.head
        this.head = prevEl.nextNode
        prevEl.nextNode = undefined


        this._size--
        return prevEl.value
        }
    
   contains(val){
    let actual = this.head
    while (actual.nextNode !== null)
      {
        if (actual.value== val){
          return true
        }
        actual = actual.nextNode
         
      }
      return false  
 }
  findIndex(val){
      let index = 0
      let actual = this.head
      while (actual.nextNode != null){
    
        if (actual.value == val){
          return index
        }
        
        actual = actual.nextNode
        index++
        
      }
      return -1
    }
   toString(){ results = []

    let actual = this.head
    while (actual.nextNode !=null){
      
    }

  }
}

export { LinkedList };
