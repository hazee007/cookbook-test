import firebase from 'firebase/app';
import 'firebase/firestore';

const config = {
  apiKey: 'AIzaSyBL3wPAiPNhT5AbFdo0P4lPgp6dsN0pv-k',
  authDomain: 'cookbook-f39fa.firebaseapp.com',
  databaseURL: 'https://cookbook-f39fa.firebaseio.com',
  projectId: 'cookbook-f39fa',
  storageBucket: 'cookbook-f39fa.appspot.com',
  messagingSenderId: '467118607936',
  appId: '1:467118607936:web:93e568e19595abcf8759a5',
  measurementId: 'G-W7R0CJWQB5',
};

firebase.initializeApp(config);

export const firestore = firebase.firestore();

//function to Upload Recepie collection and document to firestore
export const addCollectionAndDocuments = async (collectionKey, objectToAdd) => {
  const collectionRef = firestore.collection(collectionKey);

  const batch = firestore.batch();
  objectToAdd.forEach((obj) => {
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef, obj);
  });
  return await batch.commit();
};

// Check out async and await... we can write asynchronous code like sychronous code
export async function getCollection(path) {
  // this get() function is async. This code will pause here until we get the result
  const snap = await firestore.collection(path).get();
  return snap.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
}

export function observeCollection(path, callback) {
  /* The one line code at the end is equivalent to the commented code */

  // return firestore.onSnapshot(snap => {
  //   const docs = snap.docs.map(doc => {
  //     const id = doc.id;
  //     const data = doc.data();
  //     return { id, ...data };
  //   });
  //   callback(docs);
  // });

  // This function returns an unsubscribe function, we need to unsubscribe the listener during cleanup
  return firestore
    .collection(path)
    .onSnapshot((snap) =>
      callback(snap.docs.map((doc) => ({ id: doc.id, ...doc.data() })))
    );
}

// Add Recipe Collection
export function addRecipeCollection(path, recipeDetails, callback) {
  return firestore.collection(path).doc().set(recipeDetails);
}

// function to get Recepie from firestore
export const getCollectionSnapshot = (collections) => {
  const getCollection = collections.docs.map((doc) => {
    const {
      title,
      imageUrl,
      duration,
      ingredients,
      steps,
      author,
    } = doc.data();

    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      imageUrl,
      duration,
      ingredients,
      steps,
      author,
      title,
    };
  });
  return getCollection;
};
