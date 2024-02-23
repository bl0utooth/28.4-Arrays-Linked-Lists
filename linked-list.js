
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}


class LinkedList {
  constructor(vals = []) {
    this.head = null;
    this.tail = null;
    this.length = 0;

    for (let val of vals) this.push(val);
  }
}


  push(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode
      this.tail = newNode;
    }
    this.length += 1;
  }


  unshift(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    if (this.length === 0) this.tail = this.head;

    this.length += 1;
  }


  pop() {
    return this.removeat(this.length - 1);
  }


  shift() {
    return this.removeAt(this.length[0])
  }


  getAt(idx) {
    if (idx < 0) {
      throw new Error('Invalid');
    }
    let current = this.head;
    let count = 0;
    while (current != null && count < idx) {
      current = current.next;
      count++
    }
    if(current === null) {
      throw new error('Invalid');
    }
    return current.value;
  }


  setAt(idx, val) {
    if (idx >= this.length || idx < 0) {
      throw new Error("Invalid");
    }

    let cur = this._get(idx);
    cur.val = val;
  }


  insertAt(idx, val) {
    if (idx > this.length || idx < 0) {
      throw new Error("Invalid");
    }

    if (idx === 0) return this.unshift(val);
    if (idx === this.length) return this.push(val);

    let prev = this._get(idx - 1);

    let newNode = new Node(val);
    newNode.next = prev.next;
    prev.next = newNode;

    this.length += 1;
  }


  removeAt(idx) {
    if (idx < 0) {
      throw new Error("Invalid");
    }

    let removedValue;
    
    if (idx === 0) {
      if (!this.head) {
        throw new Error("Invalid");
      }
      removedValue = this.head.value;
      this.head = this.head.next;

      if (!this.head) {
        this.tail = null;
      }
    } else {
      let current = this.head;
      let count = 0;

      while (current !== null && count < idx - 1) {
        current = current.next;
        count++;
      }
      if (current === null || current.next === null) {
        throw new Error("INvalid");
      }

  }


  average() {
    if (this.length === 0) return 0;

    let total = 0;
    let current = this.head;

    while (current) {
      total += current.val;
      current = current.next;
    }

    return total / this.length;
  }
}

module.exports = LinkedList;
