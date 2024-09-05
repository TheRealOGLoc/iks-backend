'use strict';

/**
 * blog controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::blog.blog', ({strapi}) => ({
  async findOne(ctx) {
    const { id } = ctx.params;
    const entity = await strapi.db.query('api::blog.blog').findOne({
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
