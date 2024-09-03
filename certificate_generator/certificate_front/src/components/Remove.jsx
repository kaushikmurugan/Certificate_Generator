import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

export default function Delete() {
  const apiurl = process.env.REACT_APP_API_URL;

  const [data, setData] = useState({
    name: "",
    DOB: "",
    course_name: "",
    duration: "",
    mobile_no: "",
  });

  const handleChange = (e) => {
    setData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`${apiurl}/studentData/find/${id}`)
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const deleteItem = async () => {
    await axios
      .delete(
        `${apiurl}/studentData/userAndPdf/${id}`,
        console.log("axios", id)
      )
      .then(async (res) => {
        console.log(res.data);
        navigate(-1);
      })
      .catch((err) => console.log(err));
  };

  const navigate = useNavigate();

  const Back = () => {
    console.log("function hitted");

    navigate(-1);
  };

  return (
    <div className="flex justify-center items-center h-[100vh] w-full">
      <div className="shadow-2xl p-8 w-2/4">
        <form>
          <label htmlFor="Name" className="font-bold">
            Student Name:
          </label>
          <br />
          <input
            type="text"
            id="name"
            name="name"
            className="border border-black p-1 rounded-md w-full"
            onChange={handleChange}
            value={data.name}
            disabled
          />
          <br />
          <label htmlFor="DOB" className="font-bold">
            email:
          </label>
          <br />
          <input
            type="text"
            id="DOB"
            name="DOB"
            className="border border-black p-1 rounded-md w-full"
            onChange={handleChange}
            value={data.DOB}
            disabled
          />
          <br />
          <label htmlFor="Course" className="font-bold">
            Course Name:
          </label>
          <br />
          <input
            type="text"
            id="course_name"
            name="course_name"
            className="border border-black p-1 rounded-md w-full"
            onChange={handleChange}
            value={data.course_name}
            disabled
          />
          <br />
          <label htmlFor="Department" className="font-bold">
            Department:
          </label>
          <br />
          <input
            type="text"
            id="Duration"
            name="duration"
            className="border border-black p-1 rounded-md w-full"
            onChange={handleChange}
            value={data.duration}
            disabled
          />
          <br />
          <label htmlFor="Number" className="font-bold">
            Mobile Number:
          </label>
          <br />
          <input
            type="Number"
            id="mobile_no"
            name="mobile_no"
            className="border border-black p-1 rounded-md w-full"
            onChange={handleChange}
            value={data.mobile_no}
            disabled
          />
          <br />
          <div className="text-center mt-5">
            <button
              type="button"
              onClick={deleteItem}
              className="bg-red-600 rounded-md p-2 text-white hover:bg-red-700"
            >
              Delete Item
            </button>
            <button
              type="button"
              className="bg-pink-600 rounded-md p-2 ml-10 text-white hover:bg-pink-500"
              onClick={Back}
            >
              Back
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
