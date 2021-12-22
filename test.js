// 1,4

// 两个先入先出实现先入后出
class Queue{
  constructor(){
    this.stack1 = [];
    this.stack2 = [];
  }

  enQueue = (fn)=>{
    stack1.push(fn)
    
  }
  deQueue = (fn)=>{
    if (this.stack1.getSize() || this.stack2.getSize()){
      throw Error('')
    }else{
      this.stack2.pop();
    }
  }
  getQueue = ()=>[
    
  ]

}

//  链式调用 异步执行
class Task {
  constructor(next,b) {
    this.queue = [];
    this.next =next
    
  }
  add(fn, context, …args) { 
    this.queue.push(fn)
    return new Task(this.next,b)
  }
  run() {
    this.queue.forEach((f,index)=>{
      return new Promise((resolve,reject)=>{
        if(index){
        return();
        }
      })
    })
    
  }
  stop() {
    
  }
}


