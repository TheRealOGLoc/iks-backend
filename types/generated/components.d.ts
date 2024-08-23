import type { Schema, Attribute } from '@strapi/strapi';

export interface HomepageElementsWhyUs extends Schema.Component {
  collectionName: 'components_homepage_elements_whyuses';
  info: {
    displayName: 'WhyUs';
    description: '';
  };
  attributes: {
    titleLeftPart: Attribute.String;
    titleRightPart: Attribute.String;
    card: Attribute.Component<'homepage-elements.why-us-card', true>;
  };
}

export interface HomepageElementsWhyUsCard extends Schema.Component {
  collectionName: 'components_homepage_elements_why_us_cards';
  info: {
    displayName: 'WhyUsCard';
  };
  attributes: {
    icon: Attribute.Media<'images'>;
    description: Attribute.Text;
    title: Attribute.String;
  };
}

export interface HomepageElementsSolutions extends Schema.Component {
  collectionName: 'components_homepage_elements_solutions';
  info: {
    displayName: 'Solutions';
    description: '';
  };
  attributes: {
    titleLeftPart: Attribute.String;
    titleRightPart: Attribute.String;
    description: Attribute.Text;
    card: Attribute.Component<'homepage-elements.solution-card', true>;
  };
}

export interface HomepageElementsSolutionCard extends Schema.Component {
  collectionName: 'components_homepage_elements_solution_cards';
  info: {
    displayName: 'SolutionCard';
  };
  attributes: {
    icon: Attribute.Media<'images'>;
    description: Attribute.Text;
  };
}

export interface HomepageElementsServices extends Schema.Component {
  collectionName: 'components_homepage_elements_services';
  info: {
    displayName: 'Services';
    description: '';
  };
  attributes: {
    titleLeftPart: Attribute.String;
    titleRightPart: Attribute.String;
    description: Attribute.Text;
    card: Attribute.Component<'homepage-elements.service-card', true>;
  };
}

export interface HomepageElementsServiceCard extends Schema.Component {
  collectionName: 'components_homepage_elements_service_cards';
  info: {
    displayName: 'ServiceCard';
    description: '';
  };
  attributes: {
    icon: Attribute.Media<'images'>;
    title: Attribute.String;
    description: Attribute.Text;
    buttonText: Attribute.String & Attribute.DefaultTo<'Explore More'>;
  };
}

export interface HomepageElementsNumbers extends Schema.Component {
  collectionName: 'components_homepage_elements_numbers';
  info: {
    displayName: 'Numbers';
    description: '';
  };
  attributes: {
    titleLeftPart: Attribute.String;
    titleRightPart: Attribute.String;
    card: Attribute.Component<'homepage-elements.number-card', true>;
  };
}

export interface HomepageElementsNumberCard extends Schema.Component {
  collectionName: 'components_homepage_elements_number_cards';
  info: {
    displayName: 'NumberCard';
    description: '';
  };
  attributes: {
    number: Attribute.Integer;
    description: Attribute.Text;
    plusSign: Attribute.Boolean & Attribute.DefaultTo<false>;
    title: Attribute.String;
  };
}

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

export interface HomepageElementsClients extends Schema.Component {
  collectionName: 'components_homepage_elements_clients';
  info: {
    displayName: 'Clients';
    description: '';
  };
  attributes: {
    titleLeftPart: Attribute.String;
    titleRightPart: Attribute.String;
    description: Attribute.Text;
    firstRow: Attribute.Media<'images', true>;
    secondRow: Attribute.Media<'images', true>;
  };
}

export interface HomepageElementsCaseStudyCard extends Schema.Component {
  collectionName: 'components_homepage_elements_case_study_cards';
  info: {
    displayName: 'CaseStudyCard';
  };
  attributes: {
    image: Attribute.Media<'images', true>;
  };
}

export interface HomepageElementsCaseStudies extends Schema.Component {
  collectionName: 'components_homepage_elements_case_studies';
  info: {
    displayName: 'CaseStudies';
    description: '';
  };
  attributes: {
    titleLeftPart: Attribute.String;
    titleRightPart: Attribute.String;
    description: Attribute.Text;
    buttonText: Attribute.String;
    card: Attribute.Component<'homepage-elements.case-study-card'>;
  };
}

export interface GlobalElementsTransformBusiness extends Schema.Component {
  collectionName: 'components_global_elements_transform_businesses';
  info: {
    displayName: 'TransformBusiness';
    description: '';
  };
  attributes: {
    titleLeftPart: Attribute.String & Attribute.DefaultTo<'Ready to'>;
    titleRightPart: Attribute.String &
      Attribute.DefaultTo<'Transform Your Business?'>;
    description: Attribute.Text &
      Attribute.DefaultTo<"Ready to Transform Your Business? Don't wait; take the first step towards achieving your business goals. Contact us today to discuss how we can help you achieve lasting success.">;
    buttonTextTouch: Attribute.String & Attribute.DefaultTo<'Get in Touch'>;
    buttonTextExplore: Attribute.String & Attribute.DefaultTo<'Explore More'>;
    image: Attribute.Media<'images'>;
  };
}

export interface GlobalElementsFooter extends Schema.Component {
  collectionName: 'components_global_elements_footers';
  info: {
    displayName: 'Footer';
    description: '';
  };
  attributes: {
    companyName: Attribute.String & Attribute.DefaultTo<'Infinikey Solutions'>;
    companyDescription: Attribute.Text &
      Attribute.DefaultTo<'We bring the years, global experience, and stamina to guide our clients through new and often disruptive realities.'>;
    emailPlaceHolder: Attribute.String &
      Attribute.DefaultTo<'Enter your email'>;
    buttonText: Attribute.String & Attribute.DefaultTo<'Subscribe'>;
    menuLabel: Attribute.String & Attribute.DefaultTo<'Menu'>;
    menuHome: Attribute.String & Attribute.DefaultTo<'Home'>;
    menuCaseStudies: Attribute.String & Attribute.DefaultTo<'Case studies'>;
    menuFeatures: Attribute.String & Attribute.DefaultTo<'Features'>;
    menuDownloads: Attribute.String & Attribute.DefaultTo<'Downloads'>;
    menuBlogs: Attribute.String & Attribute.DefaultTo<'Blogs'>;
    companyLabel: Attribute.String & Attribute.DefaultTo<'Company'>;
    companyAbout: Attribute.String & Attribute.DefaultTo<'About'>;
    companyContactUs: Attribute.String & Attribute.DefaultTo<'Contact us'>;
    companyCareers: Attribute.String & Attribute.DefaultTo<'Careers'>;
    companyHelpCenter: Attribute.String & Attribute.DefaultTo<'Help Center'>;
    companySupport: Attribute.String & Attribute.DefaultTo<'Support'>;
    locationLabel: Attribute.String & Attribute.DefaultTo<'Location'>;
    locationAddress: Attribute.Text &
      Attribute.DefaultTo<'SYDNEY, AUSTRALIA Level 14, 32 Smith Road\u2028Paramatta NSW 2150'>;
    phoneLabel: Attribute.String & Attribute.DefaultTo<'Phone'>;
    phoneNumber: Attribute.String & Attribute.DefaultTo<'02 9139 8874'>;
    mailLabel: Attribute.String & Attribute.DefaultTo<'Mail'>;
    mailAddress: Attribute.String &
      Attribute.DefaultTo<'info@infinikeysolutions.com.au'>;
  };
}

export interface GlobalElementsAlign extends Schema.Component {
  collectionName: 'components_homepage_elements_aligns';
  info: {
    displayName: 'Align';
    description: '';
  };
  attributes: {
    titleLeftPart: Attribute.String;
    titleRightPart: Attribute.String;
    description: Attribute.Text;
  };
}

export interface BlogsElementsLeaveReply extends Schema.Component {
  collectionName: 'components_blogs_elements_leave_replies';
  info: {
    displayName: 'LeaveReply';
  };
  attributes: {
    title: Attribute.String & Attribute.DefaultTo<'Leave a Reply'>;
    subtitle: Attribute.String &
      Attribute.DefaultTo<'Your email address will not be published. Required fields are marked *'>;
    nameLabel: Attribute.String & Attribute.DefaultTo<'Name'>;
    emailLabel: Attribute.String & Attribute.DefaultTo<'Email'>;
    websiteLabel: Attribute.String & Attribute.DefaultTo<'Website'>;
    commentLabel: Attribute.String & Attribute.DefaultTo<'Comment *'>;
    buttonText: Attribute.String & Attribute.DefaultTo<'Send message'>;
  };
}

export interface BlogsElementsLatestPosts extends Schema.Component {
  collectionName: 'components_blogs_elements_latest_posts';
  info: {
    displayName: 'LatestPosts';
  };
  attributes: {
    title: Attribute.String & Attribute.DefaultTo<'Latest posts'>;
    numberOfLastePost: Attribute.Integer &
      Attribute.SetMinMax<
        {
          min: 1;
          max: 3;
        },
        number
      > &
      Attribute.DefaultTo<3>;
  };
}

export interface BlogsElementsBlogContent extends Schema.Component {
  collectionName: 'components_blogs_elements_blog_contents';
  info: {
    displayName: 'BlogContent';
    description: '';
  };
  attributes: {
    postTime: Attribute.Date & Attribute.Required;
    title: Attribute.String & Attribute.Required;
    blogImage: Attribute.Media<'images'>;
    readTime: Attribute.Integer & Attribute.DefaultTo<5>;
    content: Attribute.Blocks;
    showSubscribeCard: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<true>;
  };
}

export interface BlogsElementsBanner extends Schema.Component {
  collectionName: 'components_blogs_elements_banners';
  info: {
    displayName: 'Banner';
  };
  attributes: {
    title: Attribute.String & Attribute.DefaultTo<'Blogs'>;
    description: Attribute.String &
      Attribute.DefaultTo<'Our take on everything that makes a business thrive or struggle.'>;
    searchPlaceholder: Attribute.String & Attribute.DefaultTo<'Search'>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'homepage-elements.why-us': HomepageElementsWhyUs;
      'homepage-elements.why-us-card': HomepageElementsWhyUsCard;
      'homepage-elements.solutions': HomepageElementsSolutions;
      'homepage-elements.solution-card': HomepageElementsSolutionCard;
      'homepage-elements.services': HomepageElementsServices;
      'homepage-elements.service-card': HomepageElementsServiceCard;
      'homepage-elements.numbers': HomepageElementsNumbers;
      'homepage-elements.number-card': HomepageElementsNumberCard;
      'homepage-elements.hero': HomepageElementsHero;
      'homepage-elements.clients': HomepageElementsClients;
      'homepage-elements.case-study-card': HomepageElementsCaseStudyCard;
      'homepage-elements.case-studies': HomepageElementsCaseStudies;
      'global-elements.transform-business': GlobalElementsTransformBusiness;
      'global-elements.footer': GlobalElementsFooter;
      'global-elements.align': GlobalElementsAlign;
      'blogs-elements.leave-reply': BlogsElementsLeaveReply;
      'blogs-elements.latest-posts': BlogsElementsLatestPosts;
      'blogs-elements.blog-content': BlogsElementsBlogContent;
      'blogs-elements.banner': BlogsElementsBanner;
    }
  }
}
