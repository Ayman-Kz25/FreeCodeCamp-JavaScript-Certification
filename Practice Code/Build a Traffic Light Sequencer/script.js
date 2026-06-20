const config1 = {
  fault: false,
  phases: [
    { color: "green", duration: 5 },
    { color: "yellow", duration: 2 },
    { color: "red", duration: 4 },
  ],
};

const config2 = {
  fault: false,
  phases: [
    { color: "red", duration: 3 },
    { color: "yellow", duration: -2 },
    { color: "green", duration: 6 },
  ],
};

const config3 = {
  fault: true,
  phases: [
    { color: "green", duration: 5 },
    { color: "yellow", duration: 2 },
    { color: "red", duration: 6 },
  ],
};

const config4 = {
  fault: false,
  phases: [],
};

function runSequence(config, cycles) {
  if (config.fault) {
    console.log("Faulted phase!");
    return;
  }

  if (config.phases.length === 0) {
    console.log("No phases found");
    return;
  }

  for (let i = 0; i < cycles; i++) {
    for (const phase of config.phases) {
      const { color, duration } = phase;

      if (duration <= 0) {
        console.log("Invalid phase detected");
      } else {
        console.log(`Switching to ${color} for ${duration} s`);
      }
    }
  }
}

function generateTimeline(config, cycles) {
  const result = [];
  let elapsed = 0;
  for (let i = 0; i < cycles; i++) {
    for (const phase of config.phases) {
      let duration = phase.duration;
      elapsed += duration;
      result.push(elapsed);
    }
  }

  return result;
}

runSequence(config1, 1);
runSequence(config1, 2);
runSequence(config2, 1);
runSequence(config3, 2);
runSequence(config4, 5);
console.log(generateTimeline(config1, 1));
console.log(generateTimeline(config1, 2));
console.log(generateTimeline(config2, 2));
console.log(generateTimeline(config3, 1));
console.log(generateTimeline(config4, 1));
