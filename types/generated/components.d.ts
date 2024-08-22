import type { Schema, Attribute } from '@strapi/strapi';

export interface HomepageElementsHero extends Schema.Component {
  collectionName: 'components_homepage_elements_heroes';
  info: {
    displayName: 'Hero';
  };
  attributes: {
    title: Attribute.String;
    subtitle: Attribute.String;
    description: Attribute.Text;
    buttonText: Attribute.String;
    buttonUrl: Attribute.String;
    heroBackground: Attribute.Media<'images'>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'homepage-elements.hero': HomepageElementsHero;
    }
  }
}
