export class Employee{
    //declare properties
    readonly empid:number
    readonly ename :string
    readonly  eaddress:string
    private esalary:number
    static company = 'Qedge'
    
    //to initilize values for properties we need constructor
    constructor(id:number,empname:string,address:string,salary:number)
    {
        this.empid=id
        this.ename= empname
        this.eaddress = address
        this.esalary =salary
    }
//method to perform action
public  empInfo()
{
    console.log(`Employee id ${this.empid} name ${this.ename} address${this.eaddress} salary ${this.esalary}`)
}
public static companyname()
{
    console.log(Employee.company)
}
}
let emp = new Employee(100,'Akhi','Hyd',8000)
//console.log(emp.empInfo())
console.log(emp.eaddress)
//console.log(Employee.company)
Employee.companyname()