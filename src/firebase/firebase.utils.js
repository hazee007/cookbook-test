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
