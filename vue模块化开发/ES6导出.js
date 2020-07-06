// 导出方式1
let a = 1000;
function sum(a,b){
	return a+b
}
export{
	a,sum
}

//导出方式2
export let b =1345

//导出方式3 函数/类
export function sum1(a,b){
	return a+b
}
export class person{
	run(){
		console.log('run')
	}
}
//导出方式4
// export default 常量
// const address = '北京市'
// export default address

// export default function(){
// 	console.log('重庆市')
// }

export default {
	a,b,sum,sum1
}