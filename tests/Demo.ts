class Demo{
    public addition(a:number,b:number):number
    {
        return a+b
    }
     public multiplication(a:number,b:number):number
    {
        return a*b
    }
}
//create reference object to call non static method
let obj = new Demo()
let addres1=obj.addition(44656,546)
console.log(addres)
let mulres =obj.multiplication(6656,88)
console.log(mulres)
//tsx tests/filename.ts
