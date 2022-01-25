class Chain {

  constructor() {
    this.queue = []
    this.lock = false
  }

  eat() {
    this.queue.push(() => Promise.resolve('eat'))
    this.run()
    return this
  }

  sleep(time) {
    this.queue.push(() => new Promise((resolve) => {
      setTimeout(() => {
        resolve('sleep')
      }, time * 1000)
    }))
    this.run()
    return this
  }

  walk() {
    this.queue.push(() => Promise.resolve('walk'))
    this.run()
    return this
  }

  async run () {
    if (this.queue.length && !this.lock) {
      this.lock = true
      const cb = this.queue.shift()
      const res = await cb()
      console.log(res)
      this.lock = false
      this.run()
    }
  }
}

let c =  new Chain()
c.eat('eat').sleep(2).walk('walk').sleep(4).eat('eat')

