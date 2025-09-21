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
  let vectorResult = [...vectors[0]];

  for (let outIndex = 1; outIndex < vectors.length; outIndex++) {
    if (vectors[outIndex].length !== length) {
      throw new Error("Los vectores deben ser de la misma dimensión");
    }

    for (let inIndex = 0; inIndex < length; inIndex++) {
      vectorResult[inIndex] -= vectors[outIndex][inIndex];
    }
  }

  return vectorResult;
}
function escalarProductVector(escalar, vectors) {
  return vectors.map((vector) => vector.map((element) => element * escalar));
}

function dotProductVector(vector1, vector2) {
  return vector1.reduce((acc, value, index) => {
    return acc + vector2[index] * value;
  }, 0);
}
/**Normal Vector */
function longitudeOfVector(vector) {
  let result = 0;

  for (let i = 0; i < vector.length; i++) {
    result += Math.pow(vector[i], 2);
  }
  return Math.sqrt(result);
}

function distanceVector(vector1, vector2) {
  let result = 0;

  vector1.map(
    (value, index) => (result += Math.pow(value - vector2[index], 2))
  );
  return Math.sqrt(result);
}
export default function operationWithVectors(
  typeOfOperation,
  vectors,
  escalar = 0
) {
  switch (typeOfOperation) {
    case "sum":
      return sumVector(vectors);
    case "substraction":
      return subtractionVector(vectors);
    case "escalar":
      return escalarProductVector(escalar, vectors);
    case "dotProduct":
      return dotProductVector(vectors[0], vectors[1]);
    case "longitudeVector":
      return longitudeOfVector(vectors[0]);
    case "distanceVector":
      return distanceVector(vectors[0], vectors[1]);
  }
}