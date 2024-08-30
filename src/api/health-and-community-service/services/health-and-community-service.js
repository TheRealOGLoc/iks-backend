'use strict';

/**
 * health-and-community-service service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::health-and-community-service.health-and-community-service');
