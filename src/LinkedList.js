import {Node} from './node.js'
import './style.css'


class LinkedList {

    constructor(){
        this.head = null
        this.tail = null

    }
    append(val) {
        const newNode = new Node(val)
        this.push(newNode)
    }
    prepend(val) {
        this.unshift(val)}  
    size(){
        return list.length
    }
    head(){
        return list.length > 0 ? list[0] : undefined
    }
    tail(){
        return list[list.length-1]?list[list.length-1]:undefined
    }
    at(index){
        return list[index]?list[index]:undefined
    }
    pop(){
        return list.pop()
    }
    contains(val){
        return list.includes(val)

    }
    findIndex(val){
        return list.indexOf(val)
    }
    toString(){

    }
}

export {LinkedList}