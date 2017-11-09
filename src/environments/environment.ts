// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,

  firebase: {
    apiKey: 'AIzaSyCpXxB_HOyCb-B5oJJvM9M2ILThHsEQGoU',
    authDomain: 'angular-firebase-gallery-image.firebaseapp.com',
    databaseURL: 'https://angular-firebase-gallery-image.firebaseio.com',
    projectId: 'angular-firebase-gallery-image',
    storageBucket: 'angular-firebase-gallery-image.appspot.com',
    messagingSenderId: '827857787201'
  }
};
