import firestore from '@react-native-firebase/firestore';
import {COLLECTION_NAMES} from './constants';
const collectionRef = firestore().collection(COLLECTION_NAMES.VERSES);

export const fetchVerses = async () => {
  try {
    const querySnapshot = await collectionRef.get();
    if (!querySnapshot.empty) {
      const response = querySnapshot.docs.map(doc => ({
        ...doc.data(),
        id: doc.id,
      }));
      return response;
    }
  } catch (error) {
    console.error('Error [fetchVerses]:', error);
    throw error;
  }
};
