import React, { useState } from 'react';
import axios from 'axios';
import { BeatLoader } from 'react-spinners';
import { toast } from 'react-toastify';
import { firebaseAuth, firestore } from '../../../apis/Firebase';
import { Subheading, TextArea, SpeechToTextWrap, Microphone } from '../styles';

const Emergency = ({ userLocation }) => {
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const currentUserId = firebaseAuth.getAuth().currentUser.uid;
  const sendToSos = async () => {
    console.log('UserLoactoin', { userLocation, message });
    try {
      const { getFirestore, collection, where, getDocs, query } = firestore;
      let emergencyContact;
      setIsLoading(true);
      if (!userLocation) {
        if (
          window.confirm(
            'Please accept allow us to access your location, otherwise we cannot notify your sos with your location.If you click "ok" you would be redirected. Cancel will load this website '
          )
        ) {
          // add different browser instructions to enable location. using react-device-detect
          // for chrome
          window.open(
            'https://support.google.com/chrome/answer/142065?hl=en',
            '_blank'
          );
        }
        setIsLoading(false);
        return;
      }

      // get user sos.
      const q = query(
        collection(getFirestore(), 'users'),
        where('id', '==', currentUserId)
      );

      const querySnapshot = await getDocs(q);
      querySnapshot.forEach(async (doc) => {
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, ' => ', doc.data());
        emergencyContact = doc.data().emergencyContact;
      });
      // send sms to sos
      const customMess = `${message}. This is my location https://www.google.com/maps/search/?api=1&query=${userLocation.latitude}%2C${userLocation.longitude} .`;
      const response = await axios.post(
        'https://dihack-backend.herokuapp.com/send-sms',
        {
          to: emergencyContact,
          text: customMess,
        }
      );
      console.log({ emergencyContact, customMess, bac: response.data });
      setIsLoading(false);
      return toast.success('Message sent successfully. Help is on the way!');
    } catch (error) {
      console.log(error);
      setIsLoading(false);
      toast.error(
        'Error occured in sending message to your emergency contact!'
      );
    }
  };

  return (
    <>
      <Subheading style={{ fontWeight: 'bold' }}>Describe Situation</Subheading>
      <p>Start typing and click the button to send</p>
      <TextArea
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="type here"
      />
      <SpeechToTextWrap onClick={sendToSos}>
        {isLoading ? (
          <BeatLoader size={16} color="#08bd17" />
        ) : (
          <Microphone className="fas fa-share-square" />
        )}
      </SpeechToTextWrap>
    </>
  );
};

export default Emergency;
