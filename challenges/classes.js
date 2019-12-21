// 1. Copy and paste your prototype in here and refactor into class syntax.
class CuboidMaker {
    constructor(length, width, height)
    this.length = attributes.length;
    this.width = attributes.width;
    this.height = attributes.height;
  
    this.volume = function() {
      return this.length * this.width * this.height;
    };
  
    this.surfaceArea = function() {
      return 2 * (this.length * this.width + this.length * this.height + this.width * this.height);
    };
};

    class cuboid extends CuboidMaker({
        constructor(property){
        this.length = property.length 
        this.width = property.width
        this.height = property.height
        }
      })

// Test your volume and surfaceArea methods by uncommenting the logs below:
 console.log(cuboid.volume()); // 100
 console.log(cuboid.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.