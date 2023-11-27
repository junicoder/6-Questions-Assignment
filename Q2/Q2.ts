//Exercise 2: Calculate the volume of a cube.
function calculateCubeVolume(sideLength: number): number {
  return Math.pow(sideLength, 3);
}

const cubeVolume = calculateCubeVolume(4);
console.log("Volume of the cube:", cubeVolume);
