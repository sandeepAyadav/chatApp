import React from 'react';
import SideBar from '../components/SideBar';
import MessageArea from '../components/MessageArea';
import { useSelector } from 'react-redux';
import useFetchMessage from '../customHook/useFetchMessage';

function Home() {
  const { selectedUser } = useSelector((state) => state.user);

  useFetchMessage(); // ✅ Correct way to use your custom hook

  return (
    <div className="w-full h-[100vh] flex">
      <SideBar />
      <MessageArea />
    </div>
  );
}

export default Home;
