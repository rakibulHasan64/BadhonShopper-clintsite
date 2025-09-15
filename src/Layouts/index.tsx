import { Outlet } from 'react-router';


const MainLayout = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-black">
      <Outlet />
    </div>
  );
};

export default MainLayout;
