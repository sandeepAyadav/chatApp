import axios from 'axios';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setMessages } from '../redux/messageSlice';
import { serverUrl } from '../main';

const useFetchMessage = () => {
  const dispatch = useDispatch();
  const { userData, selectedUser } = useSelector((state) => state.user);

  useEffect(() => {
    const fetchMessages = async () => {
      if (selectedUser && userData) {
        try {
          const response = await axios.get(`${serverUrl}/api/message/get/${selectedUser._id}`, {
            withCredentials: true,
          });
          dispatch(setMessages(response.data));
        } catch (error) {
          console.error('Error fetching messages:', error);
        }
      }
    };

    fetchMessages();
  }, [selectedUser, userData, dispatch]);
};

export default useFetchMessage;
