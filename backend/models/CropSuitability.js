import mongoose from "mongoose";

const cropSuitabilitySchema = new mongoose.Schema(
  {
    cropName: String,
    location: {
      state: [String],
      district: [String],
      agroClimaticZone: [String],
    },

    soil: {
      soilTypes: [String],
      minPH: Number,
      maxPH: Number,
    },

    sowing: {
      season: String,
      sowingMonths: [String],
    },

    harvesting: {
      harvestingStartMonth: String,
      harvestingEndMonth: String,
    },

    irrigation: {
      irrigationTypes: [String],
      irrigationMin: Number,
      irrigationMax: Number,
    },

    fertilizer: {
      recommendedTypes: [String],
    },

    economics: {
      seedCostPerAcre: {
        min: Number,
        max: Number,
      },
      totalCostPerAcre: {
        min: Number,
        max: Number,
      },
      mandiPricePerQuintal: {
        min: Number,
        max: Number,
        maxFluctuation: Number,
      },
      estimatedProfitPerAcre: {
        min: Number,
        max: Number,
      },
    },

    duration: {
      minMonths: Number,
      maxMonths: Number,
    },

    riskLevel: String,
    climateSuitabilityScore: Number,
    cropImage: String,
    suitabilityScore: Number,
  },
  { timestamps: true }
);

cropSuitabilitySchema.index({
  "location.state": 1,
  "location.district": 1,
  "soil.soilTypes": 1,
  "sowing.sowingMonths": 1
});

export default mongoose.model("CropSuitability", cropSuitabilitySchema);