---
title: JS常用的求交集/并集/差集的方法
date: 2021-11-21
tags:
 - 数组处理
categories: 
 - 前端基础
---

# JS常用的求交集、并集、差集的方法

<img   title="交集" src="https://gitee.com/GiteeFXJ/picstore/raw/master/pics/20220107210521.png"/> 
<img  title="并集" src="https://gitee.com/GiteeFXJ/picstore/raw/master/pics/20220107210803.png"/>
<img  title="差集" src="https://gitee.com/GiteeFXJ/picstore/raw/master/pics/20220107210911.png"/> 
<img  title="补集" src="https://gitee.com/GiteeFXJ/picstore/raw/master/pics/20220114113515.png"/>



## 普通数组

> 示例数组

```js
let a = [1, 2, 3];
let b = [4, 3, 2];
```

### 一、并集(A∪B)

```js
let union  = new Set([...a, ...b]);
let union1 = Array.from(new Set(a.concat(b)))
// Set {1, 2, 3, 4}

//先b筛选a中没有的，再连接数组
let union2 = a.concat(b.filter(val => !a.includes(val)));
let union3 = a.concat(b.filter(val=> a.indexOf(val) === -1));

//考虑NaN（数组中含NaN）

let a1 = [1, 2, 3, NaN];
let b1 = [2, 4, 5, NaN];
let aHasNaN = a.some(val => isNaN(val));
let bHasNaN = b.some(val => isNaN(val));

let union4 = a.concat(b.filter(val=> a.indexOf(val) === -1 && !isNaN(val)))
             .concat(!aHasNaN & bHasNaN ? [NaN] : []);

// [1, 2, 3, NaN, 4, 5]
```



### 二、交集（*A*∩B）

```js
// 交集
let intersection1  = new Set([...a].filter(val => b.has(val)));
// set {2, 3}  返回两数组都有的元素
let intersection2 = a.filter(val => b.includes(val));
let intersection3 = a.filter(val=> b.indexOf(val) > -1);


// 考虑NaN（数组中含NaN）
let a = [1, 2, 3, NaN];
let b = [2, 4, 5, NaN];
let aHasNaN = a.some(v => isNaN(v));
let bHasNaN = b.some(v => isNaN(v));
let intersection4 = a.filter(v=> b.indexOf(v) > -1)
                    .concat(aHasNaN & bHasNaN ? [NaN] : []);

// [2, NaN]

```



### 三、差集(A-B)

```js
// 差集（a 相对于 b 的差集） 属于a不属于b的元素
let difference1  = new Set([...a].filter(val => !b.has(val)));
// Set {1} 返回a中，b没有的元素

 
//返回a与b数组区别的集合（交集取反） 
let a = [1, 2, 3];
let b = [2, 4, 5];
let difference = a.concat(b)
                  .filter(v => !a.includes(v) || !b.includes(v));

console.log(difference)// [1,3,4,5]

  
let aSet = new Set(a);
let bSet = new Set(b)
//  
let difference = Array.from(new Set(a.concat(b).filter(v => !aSet.has(v) || !bSet.has(v))));
console.log(difference) // [1,3,4,5]



// 考虑NaN（数组中含NaN）
let a = [1, 2, 3, NaN];
let b = [2, 4, 5];
let aHasNaN = a.some(v=> isNaN(v));
let bHasNaN = b.some(v=> isNaN(v));
//  
let difference = a.filter(v => b.indexOf(v) === -1 && !isNaN(v))
                  .concat(b.filter(v=> a.indexOf(v) === -1 && !isNaN(v))).concat(aHasNaN ^ bHasNaN ? [NaN] : []);

console.log(difference) // [1, 3, 4, 5, NaN]

```



```js
//set转为数组
let c = Array.from(difference )
let d = [...difference ]

//去重
let res1 = [...new Set(a)]
let res2 = Array.from(new Set(a));
```





## 对象数组

> 示例数组

```js
let a=[
    {id:'01',name:'product01'},
    {id:'02',name:'product02'},
    {id:'03',name:'product03'},
    {id:'04',name:'product04'},
    {id:'05',name:'product05'}
    ];
let b=[
    {id:'03',name:'product03'},
    {id:'06',name:'product06'},
    {id:'07',name:'product07'},
    {id:'08',name:'product08'},

];
var obj={};
var arr=a.concat(b);
```



### 一、并集（A∪B）

```js
// 每次遍历将还未出现的项进行收集
arr.reduce(function(pre,cur){
    if(!obj.hasOwnProperty(cur.id)){
        pre.push(cur);
    }
    obj[cur.id]=true;
    return pre;
},[])

```





### 二、交集（*A*∩B）



```js
let aids = a.map(item => item.id) //[01,02,03]
 
let union  = b.filter(function(item){
      return aids.indexOf(item.id)!==-1 // 返回相同的元素
  })


// 交集：定义一个对象，通过其属性值是否出现多次判断交集
arr.reduce(function(pre,cur){
    obj.hasOwnProperty(cur.id)?pre.push(cur):obj[cur.id]=true;
    return pre;
},[]);

```

### 三、差集(A-B)

```js
//找出a数组中，b数组没有的对象
let res =  a.filter(item=> { 
    return b.every(item1 =>{ 
        return item.id !== item1.id 
    })        
})
```



### 四、补集

```js
//补集:a中每一项都不在b中
//A是S的一个子集，由S中所有不属于A的元素组成的集合，叫做子集A在S中的绝对补集。
//购物车一组商品，选中和未选中分为两组,拆单用
let test=a.reduce(function(pre,cur){    
    if(b.every(item=>item.id!==cur.id)){       
        pre.push({name:cur.name})
    }    
    return pre;
},[])
```



