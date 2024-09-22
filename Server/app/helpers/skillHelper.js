const Skill = require('../models/Skills');

// Fetch all skills available to the character's class and level
const getAvailableSkills = async (classType, level) => {
  try {
    const skills = await Skill.find({
      classType, // Match the classType (e.g., 'Demon Hunter')
      requiredLevel: { $lte: level } // Match skills that unlock at or before the character's level
    });
    return skills;
  } catch (error) {
    console.error('Error fetching skills:', error);
    throw error;
  }
};

module.exports = {
  getAvailableSkills,
};
