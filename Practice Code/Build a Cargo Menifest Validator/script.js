function normalizeUnits(manifest) {
  const copy = { ...manifest };

  if (copy.unit === "lb") {
    copy.weight = copy.weight * 0.45;
    copy.unit = "kg";
  }

  return copy;
}

function validateManifest(manifest) {
  const errors = {};

  //containerId
  if (!("containerId" in manifest)) {
    errors.containerId = "Missing";
  } else if (
    !Number.isInteger(manifest.containerId) ||
    manifest.containerId <= 0
  ) {
    errors.containerId = "Invalid";
  }

  //destination
  if (!("destination" in manifest)) {
    errors.destination = "Missing";
  } else if (
    typeof manifest.destination !== "string" ||
    manifest.destination.trim() === ""
  ) {
    errors.destination = "Invalid";
  }

  //weight
  if (!("weight" in manifest)) {
    errors.weight = "Missing";
  } else if (
    typeof manifest.weight !== "number" ||
    Number.isNaN(manifest.weight) ||
    manifest.weight <= 0
  ) {
    errors.weight = "Invalid";
  }

  //unit
  if (!("unit" in manifest)) {
    errors.unit = "Missing";
  } else if (manifest.unit !== "kg" && manifest.unit !== "lb") {
    errors.unit = "Invalid";
  }

  //hazmat
  if (!("hazmat" in manifest)) {
    errors.hazmat = "Missing";
  } else if (typeof manifest.hazmat !== "boolean") {
    errors.hazmat = "Invalid";
  }

  return errors;
}

function processManifest(manifest) {
  const validationResult = validateManifest(manifest);

  if (Object.keys(validationResult).length === 0) {
    console.log(`Validation success: ${manifest.containerId}`);

    const normalized = normalizeUnits(manifest);

    console.log(`Total weight: ${normalized.weight} kg`);
  } else {
    console.log(`Validation error: ${manifest.containerId}`);
    console.log(validationResult);
  }
}

// console.log(
//   normalizeUnits({
//     containerId: 68,
//     destination: "Salinas",
//     weight: 101,
//     unit: "lb",
//     hazmat: true,
//   }),
// );

// console.log(
//   validateManifest({
//     containerId: 1,
//     destination: "Santa Cruz",
//     weight: 304,
//     unit: "kg",
//     hazmat: false,
//   }),
// );

// console.log(validateManifest({}));

// console.log(
//   validateManifest({
//     containerId: null,
//     destination: "Santa Cruz",
//     weight: 304,
//     unit: "kg",
//     hazmat: false,
//   }),
// );

// console.log(
//   validateManifest({
//     containerId: 0,
//     destination: 405,
//     weight: -84,
//     unit: "pounds",
//     hazmat: "no",
//   }),
// );

// console.log(validateManifest({containerId: -2}));

// console.log(validateManifest({containerId: 3.50}));

// console.log(validateManifest({destination: "  "}));

// console.log(validateManifest({weight: NaN}));

// processManifest({
//   containerId: 55,
//   destination: "Carmel",
//   weight: 400,
//   unit: "lb",
//   hazmat: false,
// });

processManifest({ containerId: -88, destination: "Soledad", weight: NaN });

// console.log(processManifest({ destination: "Watsonville", hazmat: true }));
