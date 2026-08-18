
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
console.log(test.toString())
test.insertAt(0,77,88,99)
test.removeAt(4)
test.removeAt(10)
console.log(test.toString())

console.log("linkedList length is: ",test.size())
