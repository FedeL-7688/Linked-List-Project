
import {LinkedList} from './LinkedList.js'


let test = new LinkedList
console.log("hi",test.size())
test.append(2)
test.size()
test.prepend(1)
test.size()
test.append(3)
test.size()
test.append(5)
test.prepend(0)
test.append(56)
test.prepend(45)
console.log("hi",test.size())
console.log("this is the head value", test.returnHead())
console.log("this is the tail value: ", test.returnTail())
console.log(test.at(6))
console.log("popped",test.pop())
console.log("popped",test.pop())
console.log("contains? ",test.contains(45))
console.log("index of val:", test.findIndex(1))
console.log(test.toString())
console.log(test.insertAt(0,77,88))
console.log(test.toString())
