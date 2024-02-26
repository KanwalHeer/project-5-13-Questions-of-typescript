 /*                 <<<<<<< 13 Questions of typescript >>>>>>>
 //                 __________________________________________
Question # 01:
Write a TypeScript program that declares a variable 'result' that can hold
either a 'string' or a 'number'. Now write a function that takes an argument
of type 'string | number | boolean' and logs its type.
SOLUTION>>>>*/
            let result:string|number|boolean

            function logType(tyPe:string|number|boolean) {
            if (typeof  tyPe === "string") {
                console.log("Type : string")
            }else if (typeof  tyPe === "number") {
                console.log("Type : number")
            }else if (typeof  tyPe === "boolean") {
                console.log("Type : boolean")
            }
            }
            result = "Typescript"
            logType(result)

            result = 100
            logType(result)

            result = (5==5)
            logType(result)           
//                      ********************************

/*QUESTION # 02::
  Write a TypeScript program that creates a function combine that accepts two
  parameters of types boolean and number. It returns a value that can be either
  a boolean or a number. Use a union type to achieve this.
  SOLUTION::*/

        function combine(pra1:boolean , pera2:number): boolean | number {
            if (pra1) {
            return  pera2 * 3
            }else{
                return pra1
            }
        }
        let combineResult1: boolean |number = combine(true,3)
        let combineResult2:boolean |number = combine(false,3)
        console.log(combineResult1)
        console.log(combineResult2)

//                **********************
/*QUESTION # 03:
 Write a TypeScript program that defines a TypeScript interface Car with properties
 make and model of type string. Create a type Bus with properties make and model 
 of type string and an additional property payloadCapacity of type number. Now, 
 create a type Vehicle that represents either a Car or a Truck using a union type. 
SOLUTION::*/
                interface Car1 {
                        make:string,
                        model:string
                }
                type bus1= {
                        make:string,
                        model:string,
                        poli:number
                }

                type truck = Car1 | bus1 

                const car:Car1={make:"vits",model:"44ee"}
                const bus:bus1={make:"cultus",model:"55ff",poli:55}
                console.log(car)
                console.log(bus)

                const trucks:truck[]=[car,bus]
                trucks.forEach(truck => {
                        console.log(`vmake : ${truck.make}`)
                        console.log(`vmodel : ${truck.model}`)
                        if ("poli" in truck) {
                        console.log(`poli : ${truck.poli}`)
                        }
                        
                });
                console.log("----")
//                 *******************************

/*QUEWSTION  # 04
  Write a TypeScript function that takes an argument of type string | number. 
  Inside the function, use a type guard to check whether the argument is a string
  or a number. Then, log the appropriate message accordingly.  
  SOLUTION::*/
             function printElement(element:string|number | any):void {
                        if ( typeof element === "string") {
                                console.log(`The Element is ${element}`)
                        }else if ( typeof element === "number") {
                                console.log(`Th Element is ${element}`)
                        }else{
                                console.log(`The Element is string nor a number`)
                        }
                    }
                    printElement("Kanwal Heer")
                    printElement(4)
                    printElement(false)
//                ********************************

/*QUESTION # 05:
  Write a TypeScript function that accepts a parameter of type number and returns
  a boolean indicating whether the number is odd. Use a type guard to check and 
  ensure the input is a valid number. 
  SOLUTION:*/
        function isoddNumber(num:number):boolean {
            if ( typeof num === "number" && isFinite(num) ) {
                    return num % 2 !== 0
            }else{
                    return false
            }
        } 
        console.log(`is 8 num odd? ${isoddNumber(8)}`)
        console.log(`is 4 num odd? ${isoddNumber(4)}`)
        console.log(`is 9 num odd? ${isoddNumber(9)}`)
        console.log(`is 3 num odd? ${isoddNumber(3)}`)
        console.log(`is 1 num odd? ${isoddNumber(1)}`)
        console.log(`is 2 num odd? ${isoddNumber(2)}`)
//                     ****************************
/*
QUESTION # 06:
Write a TypeScript program that declares an array containing both numbers and
strings. Use type assertions to extract number, string and boolean values from
the array.
SOLUTION:*/
        let mixArray :(number | string | boolean) []=[4,"hello","5",false,6,true]
        console.log(mixArray)
        let numberOnly:number[]= mixArray.filter((item): item is number => typeof item === "number")
        console.log(numberOnly)
        let booleanOnly:boolean[]= mixArray.filter((item): item is boolean => typeof item === "boolean")
        console.log(booleanOnly)
        let stringOnly:string[]= mixArray.filter((item): item is string => typeof item === "string")
        console.log(stringOnly)
//               ********************************
/*
Question # 07:
Write a TypeScript program that declares a variable as type any and uses a type
assertion to explicitly cast it to type string.
SOLUTION :
*/
    let variable: any = 42;
    let stringVariable: string = variable as string;
    console.log(stringVariable);     
/*
 QUESTION # 08:
 Write a TypeScript function that accepts a parameter of type string | string[]
 and returns the length of the input string. It also returns the sum of the
 lengths of all strings in the array. Use type assertions to let TypeScript
 know the parameter type.  
 SOLUTION:
*/
            function allArrays(input: string |string[]):number {
            const strings:string[]=(typeof input === "string"? [input]:input) as string[]
            const totalLength = strings.reduce((length ,str)=> length+str.length,0)
            return totalLength
            }
            const singleString = "hello heeri"
            const stringArray = ["hello","kanwal","heer","ali"]
            const length1 = allArrays(singleString)
            const length2 = allArrays(stringArray)
            console.log(length1)
            console.log(length2)
//                 *********************

/*
 QUESTION # 09:
 Write a TypeScript generic function that accepts an argument of any type and 
 returns the same value. Test the function with various data types.
 SOLUTION:  
*/
        function genericTypes<T>(params1:T):T {
            return params1
        }
        const num:number = 4
        const str:string = "heeri"
        const bol:boolean = true
        const array:number[] = [1,3,5]
        const obj:{key:string}={key:"value"}

        const res1:number = genericTypes(num)
        const res2:string =genericTypes(str)
        const res3:boolean =genericTypes(bol)
        const res4:number[] =genericTypes(array)
        const res5:{} =genericTypes(obj)
        console.log(res1)
        console.log(res2)
        console.log(res3)
        console.log(res4)
        console.log(res5)
//               ***********************
/*
 QUESTION # 10:
 Write a TypeScript generic function that accepts two arguments: an array of 
 any type and two indices. The function should swap the elements at the
 specified indices and return the modified array.
 SOLUTION :
*/
    function swap<T>(arryy:T[]):T[] {
        console.log(arryy)
        return [arryy[2],arryy[1],arryy[0]] 
    }
    const results1:number[]=swap<number>([3,4,5])
    const results2:string[]=swap<string>(["ali","heer","kanwal"])
    const results3:boolean[]=swap<boolean>([true,false,true])
    const results4:{}=swap<{}>([{name:"kanwal heer"},{fname:"ghulam muhammad"},{age:"22"}])
    console.log(results1)
    console.log(results2)
    console.log(results3)
    console.log(results4)
//                        ************************

/*
 QUESTION # 11:
 Write a TypeScript program that creates a TypeScript mapped type called 
 'Optional'. This mapped type should take an object type as a parameter and
 make all its properties optional. Test the mapped type with an example object.
 SOLUTION :
*/
        type optional<T> = {
            [K in keyof T]?: T[K];
        }
        type objType = {
            name:string;
            age :number;
            email:string
        }
        const anObject:objType = {
            name: "kanwal",
            age:22,
            email:"kanwal2gmail.come"
        }
        const optionalObject :optional<objType> = anObject
        console.log(optionalObject)
//         **************************

/*
   QUESTION # 12:
   Write a TypeScript program that defines a mapped type. It takes an object 
   type as a parameter and makes all its properties read-only (immutable). 
   Test the mapped type with an example object.
   SOLUTION :
*/
        type ReadOnly<T> = {
            readonly [K in keyof T]?:T[K]
        }
        type objType2 = {
            name:string;
            age :number;
            email:string
        }
        const anObject2:objType2 = {
            name: "kanwal",
            age:22,
            email:"kanwal2gmail.come"
        }
        const optionalObject2 :ReadOnly<objType2> = anObject2
        console.log("Readonly mapedtyped")
        console.log(optionalObject2)
//                       ****************************
/*
QUESTION # 13::::::::
Write a TypeScript program that creates a conditional type. The program 
takes an array and a type as parameters and returns an array containing
only elements of the specified type. Test the conditional type with an 
array of mixed types and extract only numbers or strings, depending on the
input type parameter.
SOLUTION :
*/
    type FilterArry<T,U> = T extends U ? T:never
    function arrayFilter<T,U extends T> (arr:T[] , type: U ):FilterArry<T,U>[] {
        return arr.filter((item): item is U =>typeof item ===typeof type ) as FilterArry<T,U>[]
    }
    
    let arraysAre = ["hello",6,"two",7]
    let stringArrayA:any[]=arrayFilter(arraysAre,0)
    let numberArrayA:any[]=arrayFilter(arraysAre,"")
    console.log(stringArrayA)
    console.log(numberArrayA)
//                  ************************

