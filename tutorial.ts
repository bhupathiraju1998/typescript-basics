let id:number = 5;
let comapny:string='venu';
let publish:boolean = true;

let arr:any[]= [1,'2']
let arrone:number[] = [1,2];
let arrtwo:string[] = ["gopal","varma"]

let x:any = false || 'asdf'
console.log(x)

const conconatevalue = (a:string,b:string) :string => {
 return 'a'
}//we are returning string so before arrow we wrote :string if we donot return we write void
conconatevalue('a','b')



//for creating custom type
type IdFieldType = string | number
//for obj we use interface
interface UserObj{
    id?:string;
    name:string;
    age:number;
    greet(message:string|number):void;
    salary:IdFieldType
}

const User:UserObj ={
    salary:'250000',
    name:'adsf',
    age:23,
    greet:function(message){
    }
}


//new use case where different interface are required iintersection with obj

interface BusinessPartner{
    name:string
}
interface UserIdentity{
    id:number
}
type BusinessIntersectionUser = BusinessPartner & UserIdentity;
const BusinessUser:BusinessIntersectionUser = {
    name:'gopal',
    id:60277
}
const validateUser = (bussUser:BusinessIntersectionUser) => {
    console.log(bussUser.name)
}
validateUser(BusinessUser)

//enums if we want a specific type of type then only it can executed
enum LoginError{
    Unauthorized ='unauthorized',
    NoUser='nouser'
}

const printErrMsg = (error:LoginError)=>{
    if(error==LoginError.Unauthorized){
        console.log("unauthorized")
    }else if(error==LoginError.NoUser){
        console.log("Nouser")
    }
}
printErrMsg(LoginError.Unauthorized)

//generics
//we create storage class  we can pass interface to class with diff datatypes we passs <T> which is a genric type
class StorageCOntainer<T>{
    private contents:T[];

    constructor(){
        this.contents=[];
    }

    addItem(item:T):void{
        this.contents.push(item)
    }

    getItem(idx:number):T | undefined{
        return this.contents[idx]
    }

}

const usernames = new StorageCOntainer<string>();
usernames.addItem("venu")

//the main use is we can also use number and create a instance as below
const userNumber = new StorageCOntainer<number>();

//readonly if there is object in few key need to have access to modify we use read only
interface Employee{
     name:string;
    readonly id:number;
}

const employee : Employee = {
    name:'varma',
    id:123
}

//employee.id=123