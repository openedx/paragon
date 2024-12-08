import React from 'react';

/**
 * Randomly shuffle an array
 * https://stackoverflow.com/a/2450976/1293256
 * @param  {Array} array The array to shuffle
 * @return {String}      The first item in the shuffled array
 */
const shuffle = (array: Array<string>) => {
  let currentIndex = array.length;
  let temporaryValue;
  let randomIndex;

  // While there remain elements to shuffle...
  while (currentIndex !== 0) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    /* eslint-disable no-param-reassign */
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
};

const paragraphs = [
  'Yuccie pabst four loko flexitarian activated charcoal viral health goth craft beer dreamcatcher subway tile meditation microdosing. Hashtag raw denim health goth hoodie, adaptogen chambray pabst roof party seitan tattooed truffaut mlkshk mustache normcore cliche. DIY pug cold-pressed irony enamel pin, viral squid kale chips. Umami flexitarian hot chicken put a bird on it, 90s YOLO waistcoat intelligentsia selvage affogato 3 wolf moon. Truffaut wayfarers affogato, cardigan distillery YOLO chicharrones literally direct trade gastropub stumptown neutra semiotics whatever. Vaporware XOXO plaid portland helvetica quinoa flannel tumeric taiyaki fixie snackwave. Banh mi migas drinking vinegar bicycle rights cardigan, vexillologist cliche ennui pok pok four loko fashion axe keffiyeh brooklyn literally.',
  'Pinterest tote bag synth, tattooed echo park cronut flannel kombucha kickstarter viral. Lo-fi microdosing activated charcoal jean shorts ramps. Scenester copper mug swag farm-to-table PBR&B ramps hell of tousled mumblecore af trust fund lo-fi. Enamel pin put a bird on it hella vinyl flannel pickled bespoke. Cred williamsburg irony, squid portland fixie unicorn mumblecore direct trade. Irony tumblr freegan meditation blog.',
  'Wolf DIY typewriter food truck readymade man braid shaman adaptogen coloring book. Ugh kitsch microdosing, leggings copper mug seitan messenger bag intelligentsia 8-bit disrupt wayfarers banjo. Swag stumptown XOXO, shaman enamel pin franzen lo-fi blog sriracha celiac wolf. Normcore actually 8-bit, before they sold out celiac kickstarter pok pok af street art pour-over coloring book swag meggings truffaut iPhone. Coloring book artisan bespoke organic ugh neutra pug.',
  'Seitan trust fund single-origin coffee, sriracha sustainable chicharrones PBR&B salvia. Hell of viral ramps, authentic mumblecore poutine bitters gluten-free actually slow-carb tattooed twee portland health goth biodiesel. XOXO hoodie pitchfork put a bird on it quinoa, microdosing deep v godard taxidermy blog artisan kitsch messenger bag cloud bread gluten-free. Tumblr kombucha wolf swag hot chicken chambray biodiesel. Marfa pork belly VHS fixie butcher chicharrones pabst tumblr shabby chic blue bottle godard.',
  'Pour-over man braid adaptogen polaroid fixie portland. Pabst pickled coloring book banh mi, church-key umami kickstarter crucifix prism lyft etsy trust fund. Literally forage keffiyeh farm-to-table, selfies pug bushwick artisan blog glossier leggings. Knausgaard blue bottle taxidermy stumptown copper mug artisan gluten-free. Tote bag pinterest pickled yuccie, listicle mixtape viral meggings. Palo santo adaptogen iPhone sriracha poutine leggings affogato ramps williamsburg squid street art direct trade everyday carry chillwave. Pop-up food truck keffiyeh, 90s kinfolk tumeric aesthetic.',
  'Stumptown pop-up chia master cleanse health goth, bushwick mlkshk umami vexillologist single-origin coffee drinking vinegar flannel before they sold out. Franzen crucifix kombucha semiotics, freegan humblebrag asymmetrical fam schlitz narwhal plaid marfa trust fund dreamcatcher godard. Vape readymade ennui knausgaard +1, sriracha bespoke mumblecore palo santo pinterest jianbing meggings single-origin coffee wolf messenger bag. Chartreuse etsy drinking vinegar distillery semiotics DIY dreamcatcher four dollar toast cliche hot chicken seitan raclette.',
  'Af crucifix listicle brooklyn letterpress. Synth polaroid art party, you probably havent heard of them pop-up subway tile pok pok migas cred paleo ugh. Tumeric green juice wolf seitan hammock ethical. Portland tote bag raw denim direct trade seitan.',
  'Chambray food truck photo booth, mustache hell of VHS la croix offal ennui. Fashion axe seitan you probably havent heard of them +1 vaporware migas bushwick flannel squid quinoa pitchfork fanny pack tousled plaid. Sriracha actually meditation, meh meggings everyday carry franzen cliche 90s chillwave pok pok helvetica four loko literally. Butcher flannel bespoke kogi.',
  'Next level stumptown pitchfork deep v retro street art. Seitan man bun woke, glossier gochujang thundercats four loko. Raclette williamsburg portland hella sriracha chicharrones master cleanse. Lo-fi hot chicken selvage tilde meggings shoreditch offal wolf single-origin coffee chartreuse schlitz. Umami vice lomo taxidermy, vape man braid cornhole prism farm-to-table. Pinterest vaporware chartreuse single-origin coffee.',
  'Vice post-ironic etsy health goth kogi aesthetic, wolf tilde tofu man bun gluten-free venmo. Yuccie kogi celiac distillery, four loko adaptogen yr mixtape bushwick vinyl pabst messenger bag. Trust fund glossier hell of selfies pop-up marfa. Pitchfork woke listicle humblebrag adaptogen enamel pin trust fund butcher helvetica cred succulents try-hard raw denim seitan. Keffiyeh tumeric slow-carb, chillwave drinking vinegar af austin pabst paleo squid prism enamel pin.',
];

const shortParagraphs = [
  'Af crucifix listicle brooklyn letterpress. Synth polaroid art party, you probably havent heard of them pop-up subway tile pok pok migas cred paleo ugh. Tumeric green juice wolf seitan hammock ethical.',
  'Vice post-ironic etsy health goth kogi aesthetic, wolf tilde tofu man bun gluten-free venmo.',
  'Stumptown pop-up chia master cleanse health goth, bushwick mlkshk umami vexillologist single-origin coffee drinking',
  'Pinterest tote bag synth, tattooed echo park cronut flannel kombucha kickstarter viral.',
];

export type HipsterIpsumType = { numParagraphs?: number; numShortParagraphs?: number; };

const getHipsterIpsumContent = (allParagraphs: Array<string>, numParagraphs: number) => (
  <>
    {allParagraphs.slice(0, numParagraphs).map(text => <p key={text}>{text}</p>)}
  </>
);

export type HipsterIpsumContentType = {
  shortParagraphsInContent: string[],
  numShortParagraphs?: number,
  paragraphsInContent: string[],
  numParagraphs: number,
};

const useHipsterIpsumContent = ({
  shortParagraphsInContent,
  numShortParagraphs,
  paragraphsInContent,
  numParagraphs,
}: HipsterIpsumContentType) => {
  if (numShortParagraphs !== undefined) {
    const shuffledShortParagraphs = shuffle(shortParagraphsInContent);
    return getHipsterIpsumContent(shuffledShortParagraphs, numShortParagraphs);
  }

  const shuffledParagraphs = shuffle(paragraphsInContent);
  return getHipsterIpsumContent(shuffledParagraphs, numParagraphs);
};

const HipsterIpsum: React.FC<HipsterIpsumType> = ({
  numParagraphs = 2,
  numShortParagraphs,
}) => {
  const content = useHipsterIpsumContent({
    shortParagraphsInContent: shortParagraphs,
    numShortParagraphs,
    paragraphsInContent: paragraphs,
    numParagraphs,
  });
  return content;
};

export default HipsterIpsum;
