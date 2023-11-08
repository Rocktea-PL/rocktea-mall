import { useState } from 'react';
import '../../styles/Dashboard.css'
import Exclamation from '../../assets/exclamation.svg'
// Create a CSS file for styling

const ProfileCompletion = () => {
    const [profileCompletion, setProfileCompletion] = useState(30);
  const handleCompletionChange = (e) => {
    setProfileCompletion(e.target.value);
  };
  return (
    <div className="flex justify-between items-center  gap-5 w-full bg-range rounded-md h-14 px-5 mb-10 mt-5">
      <input
        type="range"
      
        max={profileCompletion}
        
        value={profileCompletion}
        onChange={handleCompletionChange}
        style={{ width: `${profileCompletion}%` }}
      />
      <div className='flex items-center gap-x-3'>
      <p className='text-white whitespace-nowrap'>Complete your Profile </p>

<img src={Exclamation} width={20} height={20} alt="" />
      </div>
      
     
    </div>
  );
};

export default ProfileCompletion;
