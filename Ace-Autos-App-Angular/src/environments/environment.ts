// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  // Azure
  production: false,
  apiURL: 'https://localhost:44360/api/',

  // Firebase
  firebase: {
   apiKey: 'AIzaSyBKEeLuC16Kg9U-_uWklq69kgalVVgAcI4',
   authDomain: 'aceautos-dc780.firebaseapp.com',
   projectId: 'aceautos-dc780',
   storageBucket: 'aceautos-dc780.appspot.com',
   messagingSenderId: '941716639486',
   appId: '1:941716639486:web:046822b5849cdeab371faf',
   measurementId: 'G-5BJVH2D25D'
   }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
