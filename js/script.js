// TASK 01
class Circle {
    constructor (radius) {
        this.radius = radius;
    }
    get showRadius () {
        return this.radius;
    }
    set showRadius(num) {
         this.radius = num;
    }
    get diametr () {
        return this.radius * 2;
    }
    squere () {
        return Math.round(Math.PI * Math.pow(this.radius, 2));
    }
    lenght () {
        return Math.round(2 * Math.PI * this.radius);
    }
}

const myCircle = new Circle (16);

console.log(myCircle.radius);
myCircle.radius = 20;
console.log(myCircle.diametr);
console.log(myCircle.squere());
console.log(myCircle.lenght());

//  TASK 02

class Marker {
    constructor (color, number) {
        this.color = color;
        this.number = number;
    }
    get markerProp () {
        return this.color, this.number;
    }
    set markerProp (newProp) {
        [this.color, this.number] = [...newProp];
    }
    toPrint (text) {
        for (let i = 0; i < text.lenght; i++) {
            if (this.number !=0) {
                if (text [i] == '') {
                    this.number += 0.5;
                }
                this.number -= 0.5;
            } else {
                console.log('Маркер закінчився');
            }
        }
    }
}

class RefMarker extends Marker {
    refueling(number) {
        if (number > 100) {
            number = 100;
        } else {
             this.number += number;
        }
    }
}

let marker = new RefMarker (2);
console.log(marker.refueling (31));

const text = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat. `;

console.log(marker.toPrint(1));


// TASK 03

class Employe {
    constructor (name, age, salary) {
        this.name = name;
        this.age = age;
        this.salary = salary;
    }
}

const bankEmploye = [
    new Employe ('Ivan', 25, 400),
    new Employe ('Tanya', 22, 400),
    new Employe ('Katya', 28, 300),
    new Employe ('Vova', 30, 500),
];

class EmptTable {
    constructor (arr) {
        this.arr = arr;
    }
    getHtml() {
        
    }
}