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
  tail() {
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
  // at(index){
  // }
  // pop(){
  //     return list.pop()
  // }
  // contains(val){
  //     return list.includes(val)

  // }
  // findIndex(val){
  //     return list.indexOf(val)
  // }
  // toString(){

  // }
}

export { LinkedList };
