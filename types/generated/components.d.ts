import type { Schema, Attribute } from '@strapi/strapi';

export interface TestimonialsElementsTestimonials extends Schema.Component {
  collectionName: 'components_testimonials_elements_testimonials';
  info: {
    displayName: 'Testimonials';
  };
  attributes: {
    card: Attribute.Component<'testimonials-elements.testimonials-card', true>;
  };
}

export interface TestimonialsElementsTestimonialsCard extends Schema.Component {
  collectionName: 'components_testimonials_elements_testimonials_cards';
  info: {
    displayName: 'TestimonialsCard';
  };
  attributes: {
    name: Attribute.String;
    titleAndCompanyName: Attribute.String;
    comment: Attribute.Text;
  };
}

export interface TestimonialsElementsHero extends Schema.Component {
  collectionName: 'components_testimonials_elements_heroes';
  info: {
    displayName: 'Hero';
    description: '';
  };
  attributes: {
    heroBackground: Attribute.Media<'images'> & Attribute.Required;
    description: Attribute.Text;
    buttonText: Attribute.String;
    title: Attribute.String;
    mobileViewDescription: Attribute.Text;
    mobileViewBackground: Attribute.Media<'images'> & Attribute.Required;
  };
}

export interface TeamElementsMembers extends Schema.Component {
  collectionName: 'components_team_elements_members';
  info: {
    displayName: 'Members';
  };
  attributes: {
    card: Attribute.Component<'team-elements.member-card', true> &
      Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      >;
  };
}

export interface TeamElementsMemberCard extends Schema.Component {
  collectionName: 'components_team_elements_member_cards';
  info: {
    displayName: 'MemberCard';
  };
  attributes: {
    name: Attribute.String;
    jobTitle: Attribute.String;
    description: Attribute.Text;
    image: Attribute.Media<'images'>;
  };
}

export interface TeamElementsHero extends Schema.Component {
  collectionName: 'components_team_elements_heroes';
  info: {
    displayName: 'Hero';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
    buttonText: Attribute.String;
    heroBackground: Attribute.Media<'images'> & Attribute.Required;
    mobileViewBackground: Attribute.Media<'images'> & Attribute.Required;
    mobileViewDescription: Attribute.Text;
  };
}

export interface ServicesElementsWhysChooseUsCard extends Schema.Component {
  collectionName: 'components_services_elements_whys_choose_us_cards';
  info: {
    displayName: 'WhysChooseUsCard';
  };
  attributes: {
    icon: Attribute.Media<'images'>;
    title: Attribute.String;
    description: Attribute.Text;
  };
}

export interface ServicesElementsWhyChooseUs extends Schema.Component {
  collectionName: 'components_services_elements_why_chooseuses';
  info: {
    displayName: 'WhyChooseUs';
  };
  attributes: {
    titleLeftPart: Attribute.String;
    titleRightPart: Attribute.String;
    card: Attribute.Component<'services-elements.whys-choose-us-card', true>;
  };
}

export interface ServicesElementsServiceModules extends Schema.Component {
  collectionName: 'components_services_elements_service_modules';
  info: {
    displayName: 'ServiceModules';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
  };
}

export interface ServicesElementsServiceIndustries extends Schema.Component {
  collectionName: 'components_services_elements_service_industries';
  info: {
    displayName: 'ServiceIndustries';
    description: '';
  };
  attributes: {
    titleLeftPart: Attribute.String;
    titleRightPart: Attribute.String;
    description: Attribute.Text;
    buttonText: Attribute.String;
    card: Attribute.Component<'services-elements.industry-card', true>;
  };
}

export interface ServicesElementsServiceCategory extends Schema.Component {
  collectionName: 'components_services_elements_service_categories';
  info: {
    displayName: 'ServiceCategory';
    description: '';
  };
  attributes: {
    titleLeftPart: Attribute.String;
    description: Attribute.Text;
    buttonText: Attribute.String;
    modules: Attribute.Component<'services-elements.service-modules', true>;
    titleRightPart: Attribute.String;
    buttonUrl: Attribute.String;
    mobileViewImage: Attribute.Media<'images'>;
  };
}

export interface ServicesElementsIndustryCard extends Schema.Component {
  collectionName: 'components_services_elements_industry_cards';
  info: {
    displayName: 'IndustryCard';
    description: '';
  };
  attributes: {
    image: Attribute.Media<'images'>;
    title: Attribute.String;
    description: Attribute.Text;
  };
}

export interface ServicesElementsHero extends Schema.Component {
  collectionName: 'components_services_elements_heroes';
  info: {
    displayName: 'Hero';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    heroBackground: Attribute.Media<'images'> & Attribute.Required;
    description: Attribute.Text;
    buttonText: Attribute.String;
    mobileViewBackground: Attribute.Media<'images'> & Attribute.Required;
    mobileViewDescription: Attribute.Text;
  };
}

export interface ServiceSectorElementsWhyChooseUs extends Schema.Component {
  collectionName: 'components_industry_sector_elements_why_chooseuses';
  info: {
    displayName: 'WhyChooseUs';
    description: '';
  };
  attributes: {
    titleLeftPart: Attribute.String;
    titleRightPart: Attribute.String;
    card: Attribute.Component<
      'service-sector-elements.why-choose-us-card',
      true
    > &
      Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      >;
  };
}

export interface ServiceSectorElementsWhyChooseUsCard extends Schema.Component {
  collectionName: 'components_industry_sector_elements_why_choose_us_cards';
  info: {
    displayName: 'WhyChooseUsCard';
    description: '';
  };
  attributes: {
    icon: Attribute.Media<'images'>;
    title: Attribute.String;
    description: Attribute.Text;
  };
}

export interface ServiceSectorElementsServices extends Schema.Component {
  collectionName: 'components_industry_sector_elements_services';
  info: {
    displayName: 'Services';
    description: '';
  };
  attributes: {
    titleLeftPart: Attribute.String;
    titleRightPart: Attribute.String;
    card: Attribute.Component<'service-sector-elements.service-card', true> &
      Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      >;
    description: Attribute.Text;
  };
}

export interface ServiceSectorElementsServiceCard extends Schema.Component {
  collectionName: 'components_industry_sector_elements_service_cards';
  info: {
    displayName: 'ServiceCard';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    descriptionOne: Attribute.Text;
    descriptionTwo: Attribute.Text;
    descriptionThree: Attribute.Text;
  };
}

export interface ServiceSectorElementsOurProcess extends Schema.Component {
  collectionName: 'components_service_sector_elements_our_processes';
  info: {
    displayName: 'OurProcess';
    description: '';
  };
  attributes: {
    titleLeftPart: Attribute.String;
    titleRightPart: Attribute.String;
    card: Attribute.Component<'service-sector-elements.our-process-card', true>;
  };
}

export interface ServiceSectorElementsOurProcessCard extends Schema.Component {
  collectionName: 'components_service_sector_elements_our_process_cards';
  info: {
    displayName: 'OurProcessCard';
  };
  attributes: {
    title: Attribute.String;
    icon: Attribute.Media<'images'>;
    description: Attribute.Text;
  };
}

export interface ServiceSectorElementsOurApproach extends Schema.Component {
  collectionName: 'components_industry_sector_elements_our_approaches';
  info: {
    displayName: 'OurApproach';
    description: '';
  };
  attributes: {
    titleLeftPart: Attribute.String;
    titleRightPart: Attribute.String;
    description: Attribute.Text;
    card: Attribute.Component<
      'service-sector-elements.our-approach-card',
      true
    >;
  };
}

export interface ServiceSectorElementsOurApproachCard extends Schema.Component {
  collectionName: 'components_industry_sector_elements_our_approach_cards';
  info: {
    displayName: 'OurApproachCard';
    description: '';
  };
  attributes: {
    icon: Attribute.Media<'images'> & Attribute.Required;
    title: Attribute.String;
    description: Attribute.Text;
  };
}

export interface ServiceSectorElementsHero extends Schema.Component {
  collectionName: 'components_industry_sector_elements_heroes';
  info: {
    displayName: 'Hero';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
    buttonText: Attribute.String;
    heroBackground: Attribute.Media<'images'> & Attribute.Required;
    mobileViewBackground: Attribute.Media<'images'> & Attribute.Required;
    mobileViewDescription: Attribute.Text;
  };
}

export interface PrivacyPolicyElementsPrivacyPolicyContent
  extends Schema.Component {
  collectionName: 'components_privacy_policy_elements_privacy_policy_contents';
  info: {
    displayName: 'PrivacyPolicyContent';
    description: '';
  };
  attributes: {
    content: Attribute.Blocks;
    title: Attribute.String;
  };
}

export interface PrivacyPolicyElementsHero extends Schema.Component {
  collectionName: 'components_privacy_policy_elements_heroes';
  info: {
    displayName: 'Hero';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
    mobileViewDescription: Attribute.Text;
    heroBackground: Attribute.Media<'images'> & Attribute.Required;
    mobileViewBackground: Attribute.Media<'images'> & Attribute.Required;
  };
}

export interface IndustrySectorElementsPainPoint extends Schema.Component {
  collectionName: 'components_industry_sector_elements_pain_points';
  info: {
    displayName: 'OurApproach';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    card: Attribute.Component<'industry-sector-elements.pain-point-card', true>;
    description: Attribute.Text;
  };
}

export interface IndustrySectorElementsPainPointCard extends Schema.Component {
  collectionName: 'components_industry_sector_elements_pain_point_cards';
  info: {
    displayName: 'ApproachCard';
    description: '';
  };
  attributes: {
    icon: Attribute.Media<'images'> & Attribute.Required;
    title: Attribute.String;
    description: Attribute.Text;
  };
}

export interface IndustrySectorElementsOurSolution extends Schema.Component {
  collectionName: 'components_industry_sector_elements_our_solutions';
  info: {
    displayName: 'OurSolution';
  };
  attributes: {
    title: Attribute.String;
    card: Attribute.Component<
      'industry-sector-elements.our-solution-card',
      true
    >;
  };
}

export interface IndustrySectorElementsOurSolutionCard
  extends Schema.Component {
  collectionName: 'components_industry_sector_elements_our_solution_cards';
  info: {
    displayName: 'OurSolutionCard';
    description: '';
  };
  attributes: {
    icon: Attribute.Media<'images'> & Attribute.Required;
    title: Attribute.String;
    description: Attribute.Text;
  };
}

export interface IndustrySectorElementsHeroSection extends Schema.Component {
  collectionName: 'components_industry_sector_elements_hero_sections';
  info: {
    displayName: 'HeroSection';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
    buttonText: Attribute.String;
    heroBackground: Attribute.Media<'images'> & Attribute.Required;
    mobileViewBackground: Attribute.Media<'images'> & Attribute.Required;
    mobileViewDescription: Attribute.Text;
  };
}

export interface IndustriesElementsOurApproach extends Schema.Component {
  collectionName: 'components_industries_elements_our_approaches';
  info: {
    displayName: 'OurApproach';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
  };
}

export interface IndustriesElementsIndustryCard extends Schema.Component {
  collectionName: 'components_industries_elements_industry_cards';
  info: {
    displayName: 'IndustryCard';
    description: '';
  };
  attributes: {
    image: Attribute.Media<'images'> & Attribute.Required;
    title: Attribute.String;
    description: Attribute.Text;
    buttonText: Attribute.String;
    buttonUrl: Attribute.String;
    showButton: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<true>;
  };
}

export interface IndustriesElementsIndustries extends Schema.Component {
  collectionName: 'components_industries_elements_industries';
  info: {
    displayName: 'Industries';
    description: '';
  };
  attributes: {
    titleLeftPart: Attribute.String;
    titleRightPart: Attribute.String;
    description: Attribute.Text;
    card: Attribute.Component<'industries-elements.industry-card', true>;
  };
}

export interface IndustriesElementsHero extends Schema.Component {
  collectionName: 'components_industries_elements_heroes';
  info: {
    displayName: 'Hero';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
    buttonText: Attribute.String;
    heroBackground: Attribute.Media<'images'> & Attribute.Required;
    mobileViewBackground: Attribute.Media<'images'> & Attribute.Required;
    mobileViewDescription: Attribute.Text;
  };
}

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
    description: '';
  };
  attributes: {
    icon: Attribute.Media<'images'> & Attribute.Required;
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
    description: '';
  };
  attributes: {
    icon: Attribute.Media<'images'> & Attribute.Required;
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
    icon: Attribute.Media<'images'> & Attribute.Required;
    title: Attribute.String;
    description: Attribute.Text;
    buttonText: Attribute.String & Attribute.DefaultTo<'Explore More'>;
    mobileViewImage: Attribute.Media<'images'> & Attribute.Required;
    buttonUrl: Attribute.String;
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
    description: '';
  };
  attributes: {
    title: Attribute.String;
    subtitle: Attribute.String;
    description: Attribute.Text;
    buttonText: Attribute.String;
    heroBackground: Attribute.Media<'images'> & Attribute.Required;
    mobileViewDescription: Attribute.Text;
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
    firstRow: Attribute.Media<'images', true> & Attribute.Required;
    secondRow: Attribute.Media<'images', true> & Attribute.Required;
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
    image: Attribute.Media<'images'> & Attribute.Required;
  };
}

export interface GlobalElementsTitle extends Schema.Component {
  collectionName: 'components_global_elements_titles';
  info: {
    displayName: 'Title';
  };
  attributes: {
    title: Attribute.String;
  };
}

export interface GlobalElementsSeo extends Schema.Component {
  collectionName: 'components_global_elements_seos';
  info: {
    displayName: 'SEO';
    description: '';
  };
  attributes: {
    metaTag: Attribute.Component<'global-elements.meta-tag', true>;
    title: Attribute.String & Attribute.Required;
    canonical: Attribute.String;
    openGraph: Attribute.Component<'global-elements.open-graph'>;
  };
}

export interface GlobalElementsOpenGraph extends Schema.Component {
  collectionName: 'components_global_elements_open_graphs';
  info: {
    displayName: 'OpenGraph';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    description: Attribute.Text & Attribute.Required;
    type: Attribute.String & Attribute.Required;
    url: Attribute.String & Attribute.Required;
    siteName: Attribute.String & Attribute.Required;
    images: Attribute.Media<'images', true>;
  };
}

export interface GlobalElementsMetaTag extends Schema.Component {
  collectionName: 'components_global_elements_meta_tags';
  info: {
    displayName: 'metaTag';
    description: '';
  };
  attributes: {
    attribute: Attribute.String & Attribute.Required;
    content: Attribute.Text & Attribute.Required;
  };
}

export interface GlobalElementsMetaCharset extends Schema.Component {
  collectionName: 'components_global_elements_meta_charsets';
  info: {
    displayName: 'metaCharset';
    description: '';
  };
  attributes: {
    attribute: Attribute.String & Attribute.DefaultTo<'UTF-8'>;
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
    companyLabel: Attribute.String & Attribute.DefaultTo<'Company'>;
    locationLabel: Attribute.String & Attribute.DefaultTo<'Location'>;
    locationAddressLineOne: Attribute.Text &
      Attribute.DefaultTo<'SYDNEY, AUSTRALIA'>;
    phoneLabel: Attribute.String & Attribute.DefaultTo<'Phone'>;
    phoneNumber: Attribute.String & Attribute.DefaultTo<'02 9139 8874'>;
    mailLabel: Attribute.String & Attribute.DefaultTo<'Mail'>;
    mailAddress: Attribute.String &
      Attribute.DefaultTo<'info@infinikeysolutions.com.au'>;
    locationAddressLineTwo: Attribute.Text &
      Attribute.DefaultTo<'Level 14, 32 Smith St,\u2028Paramatta NSW 2150'>;
    menuServices: Attribute.String & Attribute.DefaultTo<'Services'>;
    menuIndustries: Attribute.String & Attribute.DefaultTo<'Industries'>;
    menuBlogs: Attribute.String & Attribute.DefaultTo<'Blogs'>;
    menuCaseStudies: Attribute.String & Attribute.DefaultTo<'Case Studies'>;
    companyAboutUs: Attribute.String & Attribute.DefaultTo<'About Us'>;
    companyOurTeam: Attribute.String & Attribute.DefaultTo<'Our Team'>;
    companyTestimonials: Attribute.String & Attribute.DefaultTo<'Testimonials'>;
    companyPrivacyPolicy: Attribute.String &
      Attribute.DefaultTo<'Privacy Policy'>;
  };
}

export interface GlobalElementsCanonicalTag extends Schema.Component {
  collectionName: 'components_global_elements_canonical_tags';
  info: {
    displayName: 'CanonicalTag';
  };
  attributes: {
    rel: Attribute.String;
    href: Attribute.Text;
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
    description: '';
  };
  attributes: {
    showLatestBlogs: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<true>;
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
    blogImage: Attribute.Media<'images'> & Attribute.Required;
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
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.DefaultTo<'Blogs'>;
    description: Attribute.String &
      Attribute.DefaultTo<'Our take on everything that makes a business thrive or struggle.'>;
    heroBackground: Attribute.Media<'images'> & Attribute.Required;
    mobileViewBackground: Attribute.Media<'images'> & Attribute.Required;
    mobileViewDescription: Attribute.Text &
      Attribute.DefaultTo<'Our take on everything that makes a business thrive or struggle.'>;
  };
}

export interface AllCaseStudiesElementsShowAllCaseStudies
  extends Schema.Component {
  collectionName: 'components_all_case_studies_elements_show_all_case_studies';
  info: {
    displayName: 'ShowAllCaseStudies';
  };
  attributes: {
    showAllCaseStudies: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<true>;
  };
}

export interface AllCaseStudiesElementsHero extends Schema.Component {
  collectionName: 'components_all_case_studies_elements_heroes';
  info: {
    displayName: 'Hero';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
    searchPlaceholder: Attribute.String;
    heroBackground: Attribute.Media<'images'> & Attribute.Required;
    mobileViewBackground: Attribute.Media<'images'> & Attribute.Required;
    mobileViewDescription: Attribute.Text;
  };
}

export interface AllBlogsElementsShowAllBlogs extends Schema.Component {
  collectionName: 'components_all_blogs_elements_show_all_blogs';
  info: {
    displayName: 'ShowAllBlogs';
  };
  attributes: {
    showAllBlogs: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<true>;
  };
}

export interface AllBlogsElementsHero extends Schema.Component {
  collectionName: 'components_all_blogs_elements_heroes';
  info: {
    displayName: 'Hero';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
    searchPlaceholder: Attribute.String;
    heroBackground: Attribute.Media<'images'> & Attribute.Required;
    mobileViewBackground: Attribute.Media<'images'> & Attribute.Required;
    mobileViewDescription: Attribute.Text;
  };
}

export interface AboutUsElementsShowcase extends Schema.Component {
  collectionName: 'components_about_us_elements_showcases';
  info: {
    displayName: 'Showcase';
    description: '';
  };
  attributes: {
    card: Attribute.Component<'about-us-elements.showcase-card', true> &
      Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      >;
  };
}

export interface AboutUsElementsShowcaseCard extends Schema.Component {
  collectionName: 'components_about_us_elements_showcase_cards';
  info: {
    displayName: 'ShowcaseCard';
    description: '';
  };
  attributes: {
    image: Attribute.Media<'images'> & Attribute.Required;
    title: Attribute.String;
    description: Attribute.Text;
  };
}

export interface AboutUsElementsHero extends Schema.Component {
  collectionName: 'components_about_us_elements_heroes';
  info: {
    displayName: 'Hero';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
    buttonText: Attribute.String;
    heroBackground: Attribute.Media<'images'> & Attribute.Required;
    mobileViewBackground: Attribute.Media<'images'> & Attribute.Required;
    mobileViewDescription: Attribute.Text;
  };
}

export interface AboutUsElementsAffiliation extends Schema.Component {
  collectionName: 'components_about_us_elements_affiliations';
  info: {
    displayName: 'Affiliation';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
    images: Attribute.Media<'images', true>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'testimonials-elements.testimonials': TestimonialsElementsTestimonials;
      'testimonials-elements.testimonials-card': TestimonialsElementsTestimonialsCard;
      'testimonials-elements.hero': TestimonialsElementsHero;
      'team-elements.members': TeamElementsMembers;
      'team-elements.member-card': TeamElementsMemberCard;
      'team-elements.hero': TeamElementsHero;
      'services-elements.whys-choose-us-card': ServicesElementsWhysChooseUsCard;
      'services-elements.why-choose-us': ServicesElementsWhyChooseUs;
      'services-elements.service-modules': ServicesElementsServiceModules;
      'services-elements.service-industries': ServicesElementsServiceIndustries;
      'services-elements.service-category': ServicesElementsServiceCategory;
      'services-elements.industry-card': ServicesElementsIndustryCard;
      'services-elements.hero': ServicesElementsHero;
      'service-sector-elements.why-choose-us': ServiceSectorElementsWhyChooseUs;
      'service-sector-elements.why-choose-us-card': ServiceSectorElementsWhyChooseUsCard;
      'service-sector-elements.services': ServiceSectorElementsServices;
      'service-sector-elements.service-card': ServiceSectorElementsServiceCard;
      'service-sector-elements.our-process': ServiceSectorElementsOurProcess;
      'service-sector-elements.our-process-card': ServiceSectorElementsOurProcessCard;
      'service-sector-elements.our-approach': ServiceSectorElementsOurApproach;
      'service-sector-elements.our-approach-card': ServiceSectorElementsOurApproachCard;
      'service-sector-elements.hero': ServiceSectorElementsHero;
      'privacy-policy-elements.privacy-policy-content': PrivacyPolicyElementsPrivacyPolicyContent;
      'privacy-policy-elements.hero': PrivacyPolicyElementsHero;
      'industry-sector-elements.pain-point': IndustrySectorElementsPainPoint;
      'industry-sector-elements.pain-point-card': IndustrySectorElementsPainPointCard;
      'industry-sector-elements.our-solution': IndustrySectorElementsOurSolution;
      'industry-sector-elements.our-solution-card': IndustrySectorElementsOurSolutionCard;
      'industry-sector-elements.hero-section': IndustrySectorElementsHeroSection;
      'industries-elements.our-approach': IndustriesElementsOurApproach;
      'industries-elements.industry-card': IndustriesElementsIndustryCard;
      'industries-elements.industries': IndustriesElementsIndustries;
      'industries-elements.hero': IndustriesElementsHero;
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
      'global-elements.title': GlobalElementsTitle;
      'global-elements.seo': GlobalElementsSeo;
      'global-elements.open-graph': GlobalElementsOpenGraph;
      'global-elements.meta-tag': GlobalElementsMetaTag;
      'global-elements.meta-charset': GlobalElementsMetaCharset;
      'global-elements.footer': GlobalElementsFooter;
      'global-elements.canonical-tag': GlobalElementsCanonicalTag;
      'global-elements.align': GlobalElementsAlign;
      'blogs-elements.leave-reply': BlogsElementsLeaveReply;
      'blogs-elements.latest-posts': BlogsElementsLatestPosts;
      'blogs-elements.blog-content': BlogsElementsBlogContent;
      'blogs-elements.banner': BlogsElementsBanner;
      'all-case-studies-elements.show-all-case-studies': AllCaseStudiesElementsShowAllCaseStudies;
      'all-case-studies-elements.hero': AllCaseStudiesElementsHero;
      'all-blogs-elements.show-all-blogs': AllBlogsElementsShowAllBlogs;
      'all-blogs-elements.hero': AllBlogsElementsHero;
      'about-us-elements.showcase': AboutUsElementsShowcase;
      'about-us-elements.showcase-card': AboutUsElementsShowcaseCard;
      'about-us-elements.hero': AboutUsElementsHero;
      'about-us-elements.affiliation': AboutUsElementsAffiliation;
    }
  }
}
