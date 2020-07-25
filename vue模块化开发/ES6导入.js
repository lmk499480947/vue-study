import {a,sum} from './ES6导出.js'
console.log(a)
console.log(sum(22,33))

import {b} from './ES6导出.js'
console.log(b)

import {sum1} from './ES6导出.js'
console.log(sum1(33,33))

import {person} from './ES6导出.js'
const p =new person()
p.run()

// import addr from './ES6导出.js'
// // addr
// addr();


//全部导入
import only from './ES6导出.js'
console.log(only.a)
console.log(only.b)

window.a = function(){console.log(1111)}
