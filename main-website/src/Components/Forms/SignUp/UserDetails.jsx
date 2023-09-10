 
import FileInput from "./FormImage";


function UserDetails({ userData, setUserData, error }) {
    
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value,
    });
  };

  return (
    <form 
    action=""
    className="  flex flex-col text-sm "
    method="post" 
    encType="multipart/form-data">
      <div className=' '>
        <label className="">First Name
          <input
            type='text'
            placeholder='Surname first'
            name='first_name'
            value={userData.first_name}
            onChange={handleInputChange}
          />
        </label>
        <label className=""> Last Name
          <input
            type='text'
            placeholder='Surname first'
            name='last_name'
            value={userData.last_name}
            onChange={handleInputChange}
          />
        </label>
        <label className="flex flex-col">Email
          <input
            type='email'
            placeholder='example@mail.com'
            name='email'
            value={userData.email}
            onChange={handleInputChange}
          />
        </label>
        <label className="">UserName
          <input
            type='text'
            placeholder='Surname first'
            name='username'
            value={userData.username}
            onChange={handleInputChange}
          />
        </label>
        <label>Phone Number
          <input
            type='tel'
            placeholder='08123456789'
            name='contact'
            value={userData.contact}
            onChange={handleInputChange}
          />
        </label>
        
        <label>Password
          <input
            type='password'
            placeholder='***************'
            name='password'
            value={userData.password}
            onChange={handleInputChange}
          />
        </label>
        <FileInput userData={userData} setUserData={setUserData} />
      </div>
      {error && <div className="text-red-500">{error}</div>}
      
    </form>
  );
}

export default UserDetails;
