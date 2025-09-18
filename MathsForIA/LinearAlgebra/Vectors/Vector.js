/**sum of Vectors */

function sumVector(vectors) {
  if (vectors.length === 0) return [];

  const length = vectors[0].length;
  let vectorResult = new Array(length).fill(0);

  for (let outIndex = 0; outIndex < vectors.length; outIndex++) {
    for (let inIndex = 0; inIndex < length; inIndex++) {
      if (vectors[outIndex][inIndex] === undefined) {
        throw new Error("Todos los vectores deben tener la misma dimensión");
      }
      vectorResult[inIndex] += vectors[outIndex][inIndex];
    }
  }

  return vectorResult;
}

function subtractionVector(vectors) {
  if (vectors.length === 0) return [];

  const length = vectors[0].length;
  let vectorResult = new Array(length).fill(0);

  for (let outIndex = 0; outIndex < vectors.length; outIndex++) {
    for (let inIndex = 0; inIndex < length; inIndex++) {
      if (vectors[outIndex][inIndex] === undefined) {
        throw new Error("Todos los vectores deben tener la misma dimensión");
      }
      vectorResult[inIndex] -= vectors[outIndex][inIndex];
    }
  }

  return vectorResult;
}
function escalarProductVector(escalar, ...vectors) {
  let vectorResult = [];
}

function dotProductVector(vector1, vector2) {}
/**Normal Vector */
function longitudeOfVector(vector1, vector2) {}

function distanceVector(vector1, vector2) {}

function operationWithVectors(operation, vectors) {

}

console.log(
  operationWithVectors("subtraction", [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
);
