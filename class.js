//declaring class
class employee {
    //initializing an object
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    //declaring methode
    methods() {
        document.write(this.id + " " + this.name);
    }
}
var el1=new employee(39,"ram");
var el2=new employee(64,"raju");
el1.methods();
el2.methods();