 class Sample{
        public static addition(x:number,y:number):number
    {
        return x+y
         }
    public static division(x:number,y:number):number
    {
        return x+y

    }
  }
//calling static methods with class  name
let divres=Sample.division(200,5)
console.log(divres)
let addres =Sample.addition(87654,8765)
console.log(addres)
