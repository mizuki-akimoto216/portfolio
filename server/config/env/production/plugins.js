module.exports = ({ env }) => ({
    // ...
    upload: {
      config: {
        provider: 'cloudinary',
        providerOptions: {
          cloud_name: env('CLOUDINARY_NAME', 'dhhxbg37z'),
          api_key: env('CLOUDINARY_KEY', '524841886138336'),
          api_secret: env('CLOUDINARY_SECRET', 'Xv3ibyawbohVcBWykyNz3u7rSKs'),
        },
        actionOptions: {
          upload: {},
          delete: {},
        },
      },
    },
    // ...
  });