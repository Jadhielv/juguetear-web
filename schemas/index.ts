import aboutPage from "schemas/pages/about-page";
import accessibilityDeclarationPage from "schemas/pages/accessibility-declaration-page";
import collaboratePage from "schemas/pages/collaborate-page";
import faqPage from "schemas/pages/faq-page";
import homePage from "schemas/pages/home-page";
import layout from "schemas/pages/layout";
import page from "./pages/page";

import content from "schemas/shared/content";
import image from "schemas/shared/img";
import link from "schemas/shared/link";
import video from "schemas/shared/video";
import images from "./shared/images";
import relativeUrl from "./shared/relative-url";

import characteristic from "schemas/characteristic";
import characteristicsCategory from "schemas/characteristics-category";
import doc from "schemas/doc";
import docsCategory from "schemas/docs-category";
import member from "schemas/member";
import message from "schemas/message";
import toy from "schemas/toy";
import loanApplication from "./loan-application";

const schemas = [
  /* Your types here! */
  aboutPage,
  accessibilityDeclarationPage,
  collaboratePage,
  faqPage,
  homePage,
  layout,
  page,

  content,
  image,
  images,
  link,
  relativeUrl,
  video,

  characteristic,
  characteristicsCategory,
  doc,
  docsCategory,
  loanApplication,
  member,
  message,
  toy,
];

export default schemas;
