const Node = require("./linked-list-models");
module.exports = class LinkedList{
    constructor(){
        this.equalsFn = require("./util");
        this.count = 0;
        this.head = undefined;
    }
    push(element){
        const node = new Node(element);
        let current;
        if(this.head == null){
            this.head = node;
        }
        else{
            current = this.head;
            while(current.next <= this.count){
                current = current.next;
            }
            current.next = node;
            current.next = this.head
        }
        this.count++;
    }
    getElementAt(index){
        if(index>= 0 && index <=this.count){
            let node = this.head;
            for(let i = 0; i < index && node != null; i++){
                node = node.next;
            }
            return node;
        }
        return undefined;
    }
    insert(element, index){
        if(index >= 0 && index <= this.count){
            const node = new Node(element);
            if(index === 0){
                const current = this.head;
                node.next = current;
                this.head = node;
            }
            else{
                const previous = this.getElementAt(index - 1);
                node.next = previous.next;
                previous.next = node;
            }
            this.count++;
            return true;
        }
        return false;
    }
    removeBack() {
        if (this.isEmpty()) {
            return undefined;
        }
    
        if (this.count === 1) {
            const removedElement = this.head.element;
            this.head = undefined;
            this.count--;
            return removedElement;
        }
    
        let current = this.head;
        let previous = undefined;
        while (current.next != null) {
            previous = current;
            current = current.next;
        }
    
        const removedElement = current.element;
        previous.next = undefined;
        this.count--;
        return removedElement;
    }
    removeFront() {
        if (this.isEmpty()) {
            return undefined;
        }
    
        const removedElement = this.head.element;
        this.head = this.head.next;
        this.count--;
        return removedElement;
    }
    removeAt(index) {
        if (index >= 0 && index < this.count) {
            if (index === 0) {
                return this.removeFront();
            }
    
            const previous = this.getElementAt(index - 1);
            const current = previous.next;
            previous.next = current.next;
            this.count--;
            return current.element;
        }
    
        return undefined;
    }   
    isEmpty() {
        return this.count === 0;
    }    
}