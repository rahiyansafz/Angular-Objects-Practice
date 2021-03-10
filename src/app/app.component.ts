import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor() {
    var obj = {}
    var o1 = { a: 1 };
    var o2 = { b: 2 };
    var o3 = { c: 3 };
    obj = Object.assign(o1, o2, o3);
    obj.prototype = { d: 5 };
    console.log(obj);

    var obj1 = {};
    obj1.m = 6;
    obj1.prototype = Object.create(obj.prototype);
    obj1.prototype.constructor = obj1;
    console.log(obj1)

    var o = Object.create({}, { p: { value: 42 } });
    console.log(o)

    var object1 = {};

    object1 = Object.create(object1, {
      property1: {
        value: 42,
        enumerable: true,
        writable: true,
        configurable: false
      },
      property2: {  }
    });

    object1.property3 = 11;
    console.log(object1);
    console.log(Object.getOwnPropertyNames(object1));
    console.log(Object.keys(object1));
    console.log(Object.getOwnPropertyDescriptors(object1));

    this.sum(1, 5);

    var func1 = function() {}
    //console.log(func1);

    let object = {
       someMethod: function() {}
      };

      console.log(object.someMethod.name)

  }


  sum(a, b = 1, c) {
    console.log(a + b + c);
    console.log(arguments);
  }

}
