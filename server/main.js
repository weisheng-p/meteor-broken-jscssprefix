import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
  if (process.env.CLOUDFRONT_PROTO && process.env.CLOUDFRONT_DOMAIN && process.env.CLOUDFRONT_PREFIX) {
    let cloudFrontDomain = process.env.CLOUDFRONT_DOMAIN;
    let cloudFrontPrefix = process.env.CLOUDFRONT_PREFIX;
    let cloudFrontProto = process.env.CLOUDFRONT_PROTO;
    let prefix = `${cloudFrontProto}://${cloudFrontDomain}/${cloudFrontPrefix}`;
    WebAppInternals.setBundledJsCssPrefix(prefix);
  }
});
