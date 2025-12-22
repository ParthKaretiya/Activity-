class students {
    constructor(name){
    this.name = name 
    }

    showName(){
        console.log("name :", this.name)
    }
}
    class person extends students{
        constructor(name , roll ){
            super(name)
            this.roll = roll 
        }
        ShowRoll() {
        console.log("roll no:",this.roll)
    } 
    }
    


let s1 = new person("Parth",101)
s1.showName();    
s1.ShowRoll();

