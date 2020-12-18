// ============================================================================
// Implementation Exercise: Singly Linked List
// ============================================================================
//
// -------
// Prompt:
// -------
//
// Implement a Singly Linked List and all of its methods below!
//
// ------------
// Constraints:
// ------------
//
// Make sure the time and space complexity of each is equivalent to those
// in the table provided in the Time and Space Complexity Analysis section
// of your Linked List reading!
//
// -----------
// Let's Code!
// -----------

// TODO: Implement a Linked List Node class here
class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }

}

// TODO: Implement a Singly Linked List class here
class LinkedList {
    constructor() {
        this.head = null
        this.tail = null
        this.length = 0
    }

    // TODO: Implement the addToTail method here
    addToTail(val) {
        const newNode = new Node(val)
        if(this.length === 0){
            this.head = newNode
            this.tail = newNode
        } else {
            this.tail.next = newNode
            this.tail = newNode
        }
        this.length++
        return this
    }
    // TODO: Implement the removeTail method here
    removeTail() {
        if(this.length === 0){
            return undefined
        }
        let oldTail = this.tail
        if(this.length === 1){
            this.head = null
            this.tail = null
            this.length--
            return oldTail
        }
        let current = this.head
        while(current && current.next !== this.tail){
            current = current.next
        }
        this.tail = current
        this.tail.next = null
        this.length--
        return oldTail
    }

    // TODO: Implement the addToHead method here
    addToHead(val) {
        let newNode = new Node (val)
        if(!this.head){
            this.head = newNode
            this.tail = newNode
        } else {
        newNode.next = this.head
        this.head = newNode
        }
        this.length++
        return this
    }
    
    // TODO: Implement the removeHead method here
    removeHead() {
        if(!this.head) return undefined
        let currentHead = this.head
        this.head = currentHead.next
        this.length--
        if(this.length === 0){
            this.tail = null
        }
        return currentHead
    }

    // TODO: Implement the contains method here
    contains(target) {
        let node = this.head
        while(node){
            if(node.value === target) return true
            node = node.next
        }
    return false
    }

    // TODO: Implement the get method here
    get(index) {
        if(index < 0 || index >= this.length) return null
        let counter = 0
        let current = this.head
        while(counter !== index){
            current = current.next
            counter++
        }
        return current
    }

    // TODO: Implement the set method here
    set(index, val) {
       let node= this.get(index) 
       if(node){
           node.value = val
           return true
       }

       return false
    }

    // TODO: Implement the insert method here
    insert(index, val) {
        if(index < 0 || index > this.length) return false
        if(index === 0) {
            if(this.addToHead(val)) return true
        }
            let newNode = new Node(val)
            let prevNode = this.get(index - 1)
            let oldNext = prevNode.next
            prevNode.next = newNode
            newNode.next = oldNext
            this.length++
            return true 
    }

    // TODO: Implement the remove method here
    remove(index) {
        if (index < 0 || index > this.length) return undefined
        if (index === 0) return !!this.removeTail(val)
        if (index === this.length) return !!this.removeTail(val)
        let prevNode = this.get(index - 1)// get prev node
        let nodeToRemove = prevNode.next // node we want to remove
        prevNode.next = nodeToRemove.next // set prev nodes value to removed nodes next
        this.length--
        return nodeToRemove

    }

    // TODO: Implement the size method here
    size() {
        return this.length

    }
}

exports.Node = Node;
exports.LinkedList = LinkedList;
