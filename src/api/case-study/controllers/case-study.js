'use strict';

/**
 * case-study controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::case-study.case-study', ({strapi}) => ({
  async findOne(ctx) {
    const { id } = ctx.params;
    const entity = await strapi.db.query('api::case-study.case-study').findOne({
      where: {slug: id},
      populate: {
        components: {
          populate: {
            heroBackground: "*", // Populate the hero background image
            mobileViewBackground: "*",
            card: { // Ensure "card" is correctly populated
              populate: ["icon", "image"], // Populate each card's icon in the Solutions component
            },
            image: "*",
            blogImage: "*"
          }
        }
      }
    });
    const sanitizedEntity = await this.sanitizeOutput(entity)
    return this.transformResponse(sanitizedEntity)
  }
}));
