module.exports = ({ env }) => ({
  upload: {
    config: {
      provider: 'aws-s3',
      providerOptions: {
        accessKeyId: env('AKIARCFMPRTL4V4DUERO'),
        secretAccessKey: env('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'),
        region: env('us-east-1'),
        params: {
            Bucket: env('my-strapi-project-image'),
        },
      },
      // These parameters could solve issues with ACL public-read access — see [this issue](https://github.com/strapi/strapi/issues/5868) for details
      actionOptions: {
        upload: {
          ACL: null
        },
        uploadStream: {
          ACL: null
        },
      }
    },
  }
});