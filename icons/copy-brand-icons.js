const fs = require('fs');

/*
  Copies all selected brand icons from bootstrap-icons package to svg directory.
*/

const brandIconNames = [
  'github', 'google', 'linkedin', 'slack', 'instagram', 'facebook', 'twitter', 'twitter-x', 'twitch', 'youtube', 'discord',
  'telegram', 'whatsapp', 'messenger', 'mastodon', 'reddit', 'skype', 'microsoft', 'windows', 'apple', 'medium',
  'signal', 'stack-overflow', 'wordpress', 'spotify', 'snapchat', 'pinterest', 'dribbble', 'behance', 'paypal',
  'line', 'strava', 'vimeo', 'nintendo-switch', 'playstation', 'xbox', 'steam', 'bluetooth', 'meta', 'git', 'tiktok',
  'quora', 'browser-chrome', 'browser-firefox', 'browser-safari', 'browser-edge', 'wechat', 'alipay', 'unity', 'alexa',
  'google-play', 'yelp', 'dropbox', 'ubuntu', 'android', 'android2', 'microsoft-teams', 'trello', 'stripe', 'amd',
  'nvidia', 'wikipedia', 'sina-weibo', 'tencent-qq',
];

const PATH_TO_BOOTSTRAP_ICONS = '../node_modules/bootstrap-icons/icons/';

const filteredIconNames = fs.readdirSync(PATH_TO_BOOTSTRAP_ICONS).filter((iconName) => {
  return brandIconNames.includes(iconName.replace('.svg', ''));
});

filteredIconNames.forEach((iconName) => {
  fs.copyFileSync(`${PATH_TO_BOOTSTRAP_ICONS}${iconName}`, `./svg/bs-${iconName}`);
});
