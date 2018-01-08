import * as firebase from 'firebase';
import { setTimeout } from 'timers';

const config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
};

firebase.initializeApp(config);

const database = firebase.database();

export { firebase, database as default };

// //child removed
// database.ref('Expenses').on('child_removed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

// //child changed
// database.ref('Expenses').on('child_changed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

// // child added
// database.ref('Expenses').on('child_added', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

// database.ref('Expenses').on('value', (snapshot) => {
//     const expenses = [];

//     snapshot.forEach((childSnapshot) => {
//         expenses.push({
//             id: childSnapshot.key,
//             ...childSnapshot.val()
//         });
//     });

//     console.log(expenses);
// });

// database.ref('Expenses').push({
//     description: 'Coffee Bar',
//     notes: "Really good alcohol",
//     amount: 70.00,
//     createdAt: 123456789
// });

// database.ref('Expenses').push({
//     description: 'Tony Vespa',
//     notes: 'Nitzan',
//     amount: 30.75,
//     createdAt: 12345
// });

// database.ref('Expenses').push({
//     description: 'Ampulot',
//     notes: 'Harvey',
//     amount: 120.00,
//     createdAt: 123
// });

// database.ref().on('value', (snapshot) => {
//     const val = snapshot.val();
//     console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`);
// });

// setTimeout(() => {
//     database.ref().update({
//         name: "Yarden Sibony"
//     })}, 3500);

// const onValueChange = database.ref().on('value', (snapshot) => {
//     console.log(snapshot.val('age'));
// }, (e) => {
//     console.log('Error with data fetching', e);
// });

// setTimeout(() => {
//     database.ref('age').set(29);
// }, 3500);

// setTimeout(() => {
//     database.ref().off(onValueChange);
// }, 7000);

// setTimeout(() => {
//     database.ref('age').set(30);
// }, 10500);

// database.ref('location')
//   .once('value')
//   .then((snapshot) => {
//       const val = snapshot.val();
//       console.log(val);
//   })
//   .catch((e) => {
//       console.log('Error', e);
//   });

// firebase.database().ref().set({
//     name: "Yarden Sibony",
//     age: 24,
//     isSingle: true,
//     stressLevel: 6,
//     job: {
//         title: "Software developer",
//         company: "Google"
//     },
//     location: {
//         city: "Bat Yam",
//         country: "Israel"
//     }
// }).then(() => {
//     console.log('data is saved');
// }).catch((e) => {
//     console.log('Error!', e);
// });

// database.ref('isSingle').remove()
// .then(() => {
//     console.log("isSingle Deleted");
// }).catch((e) => {
//     console.log("Error!", e);
// });

// database.ref('isSingle').set(null); //passing null to set equals remove()

// database.ref().update({
//     stressLevel: 9,
//     "job/company": "Amazon",
//     "location/city": "Seattle"
// }).then(() => {
//     console.log('Data updated!');
// }).catch((e) => {
//     console.log("Error!", e);
// });