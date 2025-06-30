import axios from 'axios';
import { useEffect, useState } from 'react';
import { serverUrl } from '../main';
import { useDispatch, useSelector } from 'react-redux';
import { setUserData } from '../redux/userSlice';

const useCurrentuser = () => {
  const dispatch = useDispatch();
  const { userData } = useSelector((state) => state.user);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await axios.get(`${serverUrl}/api/user/current`, {
          withCredentials: true,
        });

        dispatch(setUserData(res.data));
      } catch (err) {
        console.error('Fetch user failed:', err?.response?.data || err.message);
      } finally {
        setLoading(false);
      }
    };

    // Only fetch if user not already loaded
    if (!userData) fetchUser();
  }, [dispatch, userData]);

  return { loading, userData };
};

export default useCurrentuser;
