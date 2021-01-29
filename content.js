/*<!--JAVASCRIPT SYNTAXES-->
    <!--
        <script>
            let arrays = ["Mon", 2, true];
            var arrays -> is a gloabl variable, console won't print error, only makes the value undefined
            ->can use before declaring

        FOR EACH LOOP
            arrays.forEach(function(object, index){
                console.log(`element: ${object}, num: ${index}`, )
            })

        STRING MANIPULATION
            substring(3, 10) -> from index 3 to 9
            substring(3) -> from index 3 to end
            substring(,3) -> from start to 3

        ARRAY MANIPULATION
            pop() take out last element
            push() take in element in last position
            shift(n) take the n number of first elements
            unshift(n, m) put in the n, m number of first elements
            slice(1, 2) take sub array from index 1 to 2
            splice(1, 2) delete 2 elements from index 1 
            splice(1, 2, 'foo') put 2 'foo' from index 1
            filter(function(item){
                return item > 'b';
            }); -> array 'c'
            find(function(item){
                return 'b';
            }); -> element 'b'

        SWITCH STATEMENT
            switch(<expression>){
                case <expression 1>:
                    //Statement(s)
                    break;
                default:
                    //Statement(s)
                    break;
            }
            *switch uses strict statement (type have to match too)
        
        FOR/IN
            //product is an object w multiple properties and methods
            for (const key in product){
                console.log(key + product[key])
            }

        FOR/OF
            //used for iterable objects (array, string,...)
            for (const char of productName){
                letters+=char;
            }

        CONTINUE
            go back to the top of the loop and skip anything below it

        NUMERIC
            **n: multiply to the power of n
            (+stringvalue) turns it into numeric value
            == vs ===: value vs (value + type)

        USE STRICT
            function useStrictExample(){
                'use strict'
                //prevent us from:
                //not declare variable
                //usually variable would just be in global scope
                x = 1;                  
                delete x;               //delete function, argument
                var x ={p1: 10, p1: 10} //define property more than once
                function x(p1, p1)      //duplicatin parameter name
                var x = 010;            //octal numeric literals
                var x = \010;           //escape characters
                var obj = {get x() {return 0}};
                obj.x = 3.14            //get-only property
            }

        ERROR HANDLING
            //a try-catch function that execute anyFunction()
            function throwError(){
                try {
                    anyFunction();
                } catch (error) {
                    console.log(error.message + " error type: " + error.name);
                }
            }

            //anyFunction() used throw to define specific error
            function anyFunction(){
                try { console.log(x)}
                catch(error) {
                    throw {
                        "message": "this is an error",
                        "name": "anyError"
                    };
                }
            }

            //types of errors
            1. ReferenceError (variable not defined)
            2. RangeError
            3. TypeError (wrong type)
            4. URIError (invalid URI)
            5. SyntaxError
            6. EvalError

        TYPEOF vs INSTANCEOF
            //typeof used to check type
            //instanceof use to check what type of object

        OBJECT LITERAL
            //use to ensure variable properties doesn't change
            //also to make use of built-in methods
            //declare attributes
                let first = fir;

              //create object
                let object = {
                    first: fir,
                    greet() {
                        console.log("haha" + this.first);
                    }
                }
                object.greet()

        OBJECT DEFINE PROPERTY
            //we can define properties with this syntax
            Object.defineProperty(Obj, 'prop', descriptor)
            //with the descriptors as:
                1.configurable //can be delete or modified its descriptor
                2.enumerable   //whether can be returned in for/in loop
                3.writable     //whether can be changed
                4.value
                5.getter setter methods:
                get: function(){
                   return this.prop;
               }

                set: function(input){
                    this.prop = input;
                }
            Object.function(var); //set will do the assign and get will return the value

        OBJECT PROPERTY VALUE SHORTHAND
            //define object with key's name same as arguement's name
                function func(var 1, var2){
                    var1,       //means property 1 has name var1 and value var1.value()
                    var2
                }

        OBJECT ASSIGN
            Object.assign(obj1, obj2) //copy obj2 properties to obj1
            return(Object.assign({}, obj1, obj2)) //copy obj1, obj2 properties to empty object
             
        CONSTRUCTOR FUNCTION
            //whenever you create instance of an object, you use the constructor function
            function Obj(prop1, prop2){
                this.prop1 = prop1;
                this.prop2 = prop2;
            }
            let var = new Obj(prop1, prop2); //create a var instance of Obj
         
        OBJECT PROTOTYPE
            //we can add prototype to an Object and all its instance will inherit that
            //when we add prototype to Object, it will have a pointer to the address of the protoype we created
            //and all instances will also point to that prototype address
            //but if we change the prototype, the Object will point to another adress, leaving the old instances still 
            //pointing to the old prototype address
            Obj.prototype.prop = var;

            //we now get the instance's prototype with this syntax
            instance.__prototype__.prop; 
            //we can set instance.prop into different value 
            instance.prop = var2;
            then (instance.__prototype__.prop !=  instance.prop)

        OBJECT INHERITENCE
            //Obj2 will now inherit from Obj1
            Obj2.prototype = Object.create(Obj1.prottype);
            Obj2.prototype.constructor = Obj2;

            //now to put Obj1 types arguement in Obj2 contructor
            function Obj2(prop1, prop2, prop3){
                Obj1.call(this, prop1, prop2, prop3);
                this.realProp = var;
            }

        CLASS INHERITENCE
            //just like object, easier syntax
            class Obj2 extends Obj1 {
                constructor(prop1, prop2, prop3){
                    //call the parent's constructor
                    super(prop1, prop2, prop3);
                    this.realProp = var;

                    //static function since all function in this student class will only
                    //apply on its instances, only static will apply when call the class.staitcFunc
                    static staticFunc(){}
                }
            }

        CHOOSE QUERIES
            //make each queries desired to open in a new page
                let menu = document.querySelectorAll(".pie");
                menu.forEach(function(pie){
                    pies.setAttribute("target", "_blank");
                })

            //interaction with attribute on selected code
                $0.getAttribute("target")
                $0.removeAttribute("target") //no more open in new tab for $0
            
        EVENTLISTENER
                <button id="click-me" onclick="simpleSwitch();">Click Me</button>
                <script>
                console.log("page is loaded");
                let btn = document.querySelector("#click-me");
                btn.addEventListener("click", fuction(e){
                    console.log("Button is clicked");
                });

                let screen = window.screen;
                let angle = screen.orrientation angle;
                let type = screen.orientation.type;
                console.log(`angle: ${angle}, type: ${type}`);
                </script>

        CALL() and APPLY() and BIND()
                const object = {
                    prop1: 'value',
                    prop2: 'value',
                }

                function printProp(var1, var2){
                    console.log(`${this.prop} and ${this.prop2} and ${var1} and ${var2}`)
                }

                printProp(); //calling this function "this" will be undefined
                printProp.call(object, var1, var2) //"this" will now be the object
                printProp.apply(object, [var1, var2]) //"this" will now be the object
                
                //bind() used to create new copy of function and change context to another object
                let func = obj1.inScopeFunc1.bind(obj2); 
                //func is now copy of inScopeFunc1 function property of obj1 Object that apply on obj2 

        SPREAD
                //used to copy String to an Array 
                //copy an array to another (if it copies an object, it will
                //actually copy the pointer to that object)
                let var= "a-string"
                let var2= "another-string"

                let values = [...var]
                console.log(values) //this will print out ["a", "-", "s",...]

                //concatenate var and var2 strings
                values = [...var, ...var2]

                //pass parameters to function/constructors (input with "..." are call rest parameters)
                //when directly assign an object to another instead of just passing 
                //them as each element in string, you can change it's property (not passing a pointer anymore)

        INNERTEXT vs INNERHTML
                //innertext is the text for the tags read as string of character
                //innerHTML is all the text for the tags read as command

        TEMPLATE LITERAL
                //save time from concatinating strings
                //String.raw tag function put before will count any escape character as normal character
                //when pass in string created by object literal, it will only 
                //pass in the normal string that isn't values (${value})
                //you can access and modify the value by addressing them as 
                //${values[i-1]}

                //putting tag function in front of object literal
                //equivalent to writing a function with the name of the tag
            
        VAR vs LET
                //var x makes x global, can access with this.x
                //you can declare many var x in the same scope, it will still point to the same x
                //const array can't be assigned to another array but each element inside can be changed
                var arr = Object.freeze([3,4,5]);      //solution to make all element unchangeable

        DESTRUCTING SYNTAX
                //get values from arrays to multiple varibles

                const [var1, var2, var3] = arr; //with arr being an array with three elements inside
                //can even put ...moreArgs if we dont know exact length of array to fill in
                //can put default value if there is no value in the array for that variable
                //can do the same to assign values from array to object

                var {prop1, prop2} = arr;

        SEARCHING WITHIN STRING
                //var.search("text") to return index
                //var.startWith("text", n) return boolean after search from n to end
                //var.endsWith("text", n) return boolean after search from start to n 
                //var.includes("text") return boolean
                
        TYPES OF FUNCTIONS:
                //Immediately Invoked Function 
                //fired once written, don't polute code
                    (function() { console.log("Hi"); }) ();

                //Closure
                //used to access in-scope variable outside of scope
                    let realFunc = function tempFunc(var){
                        var inScopeVar = 1;
                        return funtion temp2(){
                            console.log(inScopeVar);
                        }
                    }

                    realFunc(); //will now print inScopeVar

                //Arrow Function
                //clean code, "this" using in the function will point to Window object
                //instead of object in the scope
                    let func = (var) => return ++var;
                    console.log(variable); //will print value of variable + 1

                //Callback
                //tell a function what to do after it has done a task
                    function exampleCallback(callback, errorCallback){
                        if(true){
                            errorCallback({
                                name: 'error's name',
                                message: 'error's message'
                            })
                        } else if (true){
                            errorCallback({
                                name: 'error's name2',
                                message: 'error's message2'
                            })
                        } else {
                            callback('Everything is fine')
                        }
                    }

                    exampleCallback((message) => {
                        console.log('Sucess: '+ message)
                    }, (error) => {
                        console.log(error.name + ' ' + error.message)
                    })

                //Promise
                //avoid the callback pyramid (tasks only execute when the previous task is finished)
                    function examplePromise(){
                        return new Promise((resolve, reject) => {                  
                            if(true){
                                reject({
                                    name: 'error's name',
                                    message: 'error's message'
                                })
                            } else if (true){
                                reject({
                                    name: 'error's name2',
                                    message: 'error's message2'
                                })
                            } else {
                                resolve('Everything is fine')
                            }
                       })

                    }

                    examplePromise().then((message) => {
                        console.log('Sucess: '+ message)
                    }).then((message) => {
                        console.log('Sucess: '+ message)
                    }).catch((error) => {
                        console.log(error.name + ' ' + error.message)
                    })    

                //use Promise.all to execute and return all event's result
                //use Promise.allSettled to return both error and result  
                //use Promise.race to get the fastest result

                //Async 
                //await only works in async functions.              

        </script>
    -->

<!--COLLECT USER'S DATA-->
    <!--
        //Local storage API store Javascript information from user
        //then forward to the browser to the next page

        //save data
        localStorage.setItem("(key to later retrieve data)", {(source)});
        localStorage.getItem("(key)")

    -->

<!--CSS Flexbox-->
    <!--
        align-self: 
            //flex-start/end, center, baseline, stretch
            //vertically position itself 

        align-items: 
            //flex-start/end, center, baseline, stretch
            //vertically determines how items as a whole aligned within container

        align-content: 
            //flex-start/end, center, space-between/around, stretch
            //vertically determines the spacing between lines (no effect if only one line)

        justify-content: 
            //flex-start/end, center, space-between/around
            //horizontally position items

        flex-direction: 
            //row, row-reverse, column, column-reverse

        flex-wrap: 
            //wrap, nowrap, wrap-reverse

        flex-flow: 
            //combination of direction and wrap

        order: could be negative
    -->
    */