function calculateScore(crop, userInput) {
  let score = 0;
  let matchedParameters = [];

  if (crop.location.state.includes(userInput.state)) {
    score += 25;
    matchedParameters.push("State matched");
  }

  if (crop.location.district.includes(userInput.district)) {
    score += 15;
    matchedParameters.push("District matched");
  }

  if (crop.soil.soilTypes.includes(userInput.soilType)) {
    score += 20;
    matchedParameters.push("Soil matched");
  }

  if (crop.irrigation.irrigationTypes.includes(userInput.irrigation)) {
    score += 15;
    matchedParameters.push("Irrigation matched");
  }

  if (crop.sowing.sowingMonths.includes(userInput.sowingMonth)) {
    score += 15;
    matchedParameters.push("Sowing month matched");
  }

  score += crop.climateSuitabilityScore || 0;

  return { score, matchedParameters };
}

module.exports = calculateScore;