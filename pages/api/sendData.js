import { db } from '@/utils/storeData';
import { collection, addDoc } from 'firebase/firestore';

export default async function handler(req, res) {
  const { text } = req.body;

  try {
    const docRef= await addDoc(collection(db,process.env.CollectionName.toString()),{Data:text});
    res.status(200).json({ success: true });
  } catch (error) {
    console.error('Error sending data: ', error);
    res.status(500).json({ success: false, error: 'Error sending data' });
  }
}
