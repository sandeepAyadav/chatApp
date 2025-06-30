import axios from 'axios';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setOtherUsers } from '../redux/userSlice';
import { serverUrl } from '../main';

const useOtherUsers = () => {
  const dispatch = useDispatch();
  const { userData } = useSelector((state) => state.user);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get(`${serverUrl}/api/user/others`, {
          withCredentials: true,
        });
        dispatch(setOtherUsers(response.data));
      } catch (error) {
        console.error('Error fetching other users:', error);
      }
    };

    fetchUsers();
  }, [userData, dispatch]);
};

export default useOtherUsers;
