//import {Link} from 'react-router-dom'

function EmailVerification({email}) {
    return (
        <div className=" h-screen w-full gap-20 flex flex-col md:flex-row items-center justify-center md:justify-start p-0 m-0 md:overflow-hidden">
           <figure className="hidden md:block md:max-w-[50%] w-[570px]">
            <img src="https://res.cloudinary.com/dwvdgmuaq/image/upload/v1695034917/rocktea-main-website/assets/email-verification.png" alt="background" />
            </figure> 
            <div className=" form relative flex  flex-col items-center h-[500px] py-5 overflow-hidden">
              <figure className="absolute bottom-0 -left-3 right-0 animate-wavy">
                <img src="https://res.cloudinary.com/dwvdgmuaq/image/upload/v1694541153/rocktea-main-website/assets/Vector_17_x1pknr.png" alt="wavy" className=' w-full object-cover' />
              </figure>
              <div className=" flex flex-col items-center justify-center  mt-10">
              <figure className="flex items-center justify-center mt-2  mb-6">
            <img
              src="https://res.cloudinary.com/dwvdgmuaq/image/upload/v1694421637/rocktea-main-website/assets/rocktea-logo_qlaflj.png"
              width={120}
              height={120}
              alt="logo"
            />
          </figure>
          <div className="mx-auto flex flex-col items-center justify-center text-center">
          <h3>Welcome!</h3>
          <p className="my-7 text-[1rem] leading-[1.8]">Thank you for registering with us,
To continue with your registration a mail
has been sent to your mail. <span className="text-[var(--deep-blue)] font-semibold ">{email}</span></p>

</div>
              </div>
            </div>
        </div>
    )
}

export default EmailVerification
