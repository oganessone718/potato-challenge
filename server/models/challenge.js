var mongoose = require("mongoose");

var OSchemaDefinition = {
  test:{
    type: Boolean,
  }
};

var OSchemaOptions = { timestamps: true };

var schema = new mongoose.Schema(OSchemaDefinition, OSchemaOptions);

var ChallengeModel = mongoose.model("challenge", schema);

module.exports = ChallengeModel;