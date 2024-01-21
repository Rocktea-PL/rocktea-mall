import { useState } from "react";
import { FaTimes } from "react-icons/fa";
import "../../styles/form.css";
import toast from "react-hot-toast";
//import axios from "axios";
import { RotatingLines } from "react-loader-spinner";
import axios from "axios";
//import Cookies from "js-cookie";
//import { useSelector } from "react-redux";
//import { selectAuth } from "../../Redux/Slice/authSlice";
export default function ReportUserModal({ closeModal, userId }) {
  //const {user} = useSelector(selectAuth)
  //let userData = Cookies.get('userData')
  console.log(userId);
  const [report, setReport] = useState({
    user: userId,
    title: "",
    details: "",
  });
  // const [other,setOther] = useState('')
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const Base_Url = "https://rocktea-mall-api-test.up.railway.app";
  ///workup/create/topic/
  const handleReportUser = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const headers = {
      "Content-Type": "application/json",
    };
    // Create a FormData object to send the form data including the image*/
    try {
      const response = await axios.post(
        `${Base_Url}/rocktea/report/user/`,
        report,
        { headers },
      );
      console.log("successful", response.data);

      toast.success("Report Submitted Successfully");
      closeModal();
    } catch (error) {
      console.log(error);
      setIsError(false);
      // setIsError(error.response.data);
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setReport((prevState) => {
      const updatedData = {
        ...prevState,
        [name]: value,
      };

      return updatedData;
    });
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-[#000000b3] flex items-center  justify-center z-[999] ">
      <article className="  shadow-sm max-w-[80%]  w-[80%] lg:w-[500px]  bg-white rounded-[10px]  my-10 mt-14 overflow-y-auto max-h-[90vh]">
        <div className="relative w-full bg-orange text-white rounded-t-[10px] px-5">
          <h3 className="text-md text-white p-3 font-semibold">Report User</h3>
          <hr />
          <span
            className="absolute right-2 text-white top-[50%] translate-y-[-50%]  px-3 text-md cursor-pointer"
            onClick={closeModal}
          >
            <FaTimes />
          </span>
        </div>
        <form
          className="mt-7 shopInfo-form  px-7 pb-10"
          encType="multi-part/form-data"
        >
          <label htmlFor="full_name">
            Full Name
            <input
              type="text"
              name="name"
              value={report?.user}
              onChange={handleChange}
            />
          </label>
          <label htmlFor="title">
            Title
            {report.title !== "Others" ? (
              <select
                name="title"
                id="title"
                onChange={handleChange}
                value={report?.title}
              >
                <option value="Inappropriate Behavior">
                  Inappropriate Behavior
                </option>
                <option value="Violating Terms of Service">
                  Violating Terms of Service
                </option>
                <option value="Shipping and Fulfillment Issues">
                  Shipping and Fulfillment Issues
                </option>
                <option value="Poor Customer Service">
                  Poor Customer Service
                </option>
                <option value="Unfair Competition Practices">
                  Unfair Competition Practices
                </option>
                <option value="Fraudulent Activities">
                  Fraudulent Activities
                </option>
                <option value="Others">Others</option>
              </select>
            ) : (
              <input
                type="text"
                name="other"
                placeholder="Please input your title"
                value={report?.other}
                onChange={handleChange}
              />
            )}
          </label>

          <label htmlFor="details">
            Message
            <textarea
              type="text"
              name="details"
              value={report?.details}
              onChange={handleChange}
              className="!lowercase h-32 "
            />
          </label>

          <div>
            <div className="my-5"></div>
          </div>
          <button
            onClick={handleReportUser}
            disabled={isLoading || isError}
            className="bg-orange p-3 w-[200px] rounded-md mx-auto flex items-center justify-center mt-5 text-white text-xl"
          >
            {isLoading ? (
              <RotatingLines
                width={30}
                height={30}
                strokeColor="white"
                strokeWidth="5"
                animationDuration="0.75"
                visible={true}
              />
            ) : (
              "Report"
            )}
          </button>
        </form>
      </article>
    </div>
  );
}
