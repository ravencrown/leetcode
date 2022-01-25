/**
 * JS实现一个带并发限制的异步调度器Scheduler，保证同事运行的任务最多有两个。完善下面的
 * 代码中的Scheduler类，使得一下程序能正确输出
 * @author nico
 */

class Scheduler {
  constructor() {
    // 入栈，出栈,length长度最大是2，发现暂存区任务还有的话，
    this.list = [] 
  }
  add(promiseCreator) {
    // do something
  }
}

const timeout = (time) => new Promise(resolve => {
  setTimeout(resolve, time)
})

const scheduler = new Scheduler()
const addTask = (time, order) => {
  scheduler.add(() => timeout(time)).then(() => console.log(order))
}

// () => timeout(time)).then(() => console.log(order)

addTask(1000, '1')
addTask(500, '2')
addTask(300, '3')
addTask(400, '4')

// output 2,3,1,4
// 一开始，1、2两个任务进入队列
// 500ms 时，2完成，输出2，任务3进队
// 800ms 时，3完成，输出3，任务4进队
// 1000ms 时，1完成，输出1


/**
 * 解法1
 */

 class Scheduler1 {
	constructor(count) {
		this.count = 2
		this.queue = []
		this.run = []
	}

	add(task) {
		this.queue.push(task)
		return this.schedule()
	}

	schedule() {
		if (this.run.length < this.count && this.queue.length) {
		  	const task = this.queue.shift()
		  	const promise = task().then(() => {
		  		this.run.splice(this.run.indexOf(promise), 1)
		  	})
		  	this.run.push(promise)
		  	return promise
		} else {
		  	return Promise.race(this.run).then(() => this.schedule())
		}
	}
}