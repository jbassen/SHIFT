class FunctionGenerator {
  constructor() {
    this.rewrites = []
  }
  register(fun) {
    this.rewrites.push(fun)
  }
  generate() {
    return new this.rewrites[Math.floor(Math.random() * this.rewrites.length)]()
  }
}

export let TopLevel = new FunctionGenerator()
let AtoA = new FunctionGenerator()
let AtoBool = new FunctionGenerator()
let AtoAtoA = new FunctionGenerator()
let AtoAtoBool = new FunctionGenerator()

class FunctionType {
  encode() {
    throw 'You need to implement'
  }
  execute() {
    throw 'You need to implement'
  }
  getProblem() {
    throw 'You need to implement'
  }
}

class MapFun extends FunctionType {
  constructor() {
    super()
    this.func = AtoA.generate()
  }
  encode(lst) {
    return 'map( lambda x: ' + this.func.encode('x') + ' , [' + lst + '] )'
  }
  execute(lst) {
    return 'map( ' + this.func.execute(lst) + ' )'
  }
  getProblem() {
    return 'write a single recursive function named "fun" that takes a list, and for each element' + this.func.getProblem()
  }
}
TopLevel.register(MapFun)

class ReduceFun extends FunctionType {
  constructor() {
    super()
    this.func = AtoAtoA.generate()
  }
  encode(lst) {
    return 'reduce( lambda (x,y): ' + this.func.encode('x','y') + ' , [' + lst + '] )'
  }
  execute(lst) {
    return 'reduce( ' + this.func.execute(lst) + ' )'
  }
  getProblem() {
    return 'write a single recursive function named "fun" that takes a list, ' + this.func.getProblem() + ' each element in the list'
  }
}
TopLevel.register(ReduceFun)

class OperateAwithX extends FunctionType {
  constructor() {
    super()
    this.number = Math.random()
    this.operators = ['*', '+', '-', '%']
    this.operator = this.operators[Math.floor(Math.random() * this.operators.length)]
  }
  encode(x) {
    return x + this.operator + this.number
  }
  execute(x) {
    return this.number + this.operator + x
  }
  getProblem() {
    let operation = ''
    switch(this.operator) {
      case '*':
        operation = ', multiplies '
      case '+':
        operation = ', adds '
      case '-':
        operation = ', subtracts '
      case '%':
        operation = ', gets the remainder mod '
    }
    return operation + this.number + ', '
  }
}
AtoA.register(OperateAwithX)

class SquareA extends FunctionType {
  constructor() {
    super()
  }
  encode(x) {
    return x + '^2'
  }
  execute(x) {
    return x + '^' + '2'
  }
  getProblem() {
    return ', squares it '
  }
}
AtoA.register(SquareA)

class CompareA extends FunctionType {
  constructor() {
    super()
    this.number = Math.random()
    this.operators = ['===', '<==', '>==', '>', '<']
    this.operator = this.operators[Math.floor(Math.random() * this.operators.length)]
  }
  encode(x) {
    return x + this.operator + this.number
  }
  execute(x) {
    return this.number + this.operator + x
  }
  getProblem() {
    return this.operator + this.number
  }
}
AtoBool.register(CompareA)
AtoA.register(CompareA)

class OperateAwithA extends FunctionType {
  constructor() {
    super()
    this.operators = ['*', '+', '-', '%']
    this.operator = this.operators[Math.floor(Math.random() * this.operators.length)]
  }
  encode(x,y) {
    return x + this.operator + y
  }
  execute(x, y) {
    return x + this.operator + y
  }
  getProblem(x, y) {
    let operation = ''
    switch(this.operator) {
      case '*':
        operation = 'and returns the product of '
      case '+':
        operation = 'and returns the sum of '
      case '-':
        operation = 'and subtracts from zero and sums '
    }
    return operation + this.number + ', '
    return 'apply ' + this.operator + ' to the values'
  }
}
AtoAtoA.register(OperateAwithA)

class CompareAtoA extends FunctionType {
  constructor() {
    super()
    this.number = Math.random()
    this.operators = ['===', '<==', '>==', '>', '<']
    this.operator = this.operators[Math.floor(Math.random() * this.operators.length)]
  }
  encode(x,y) {
    return x + this.operator + y
  }
  execute(x,y) {
    return x + this.operator + y
  }
  getProblem() {
    return this.operator + this.number
  }
}
AtoAtoBool.register(CompareAtoA)
AtoAtoA.register(CompareAtoA)
