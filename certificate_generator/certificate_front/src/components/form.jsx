import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

export default function Forms() {
  const apiUrl = process.env.REACT_APP_API_URL;

  const initialData = {
    name: "",
    DOB: "",
    course_name: "",
    duration: "",
    mobile_no: "",
    certificate_no: "",
  };
  const [formData, setFormData] = useState(initialData);
  const [error, seterror] = useState({});
  const [submit, setSubmit] = useState(false);

  const handleChange = (e) => {
    setFormData((prevstate) => ({
      ...prevstate,
      [e.target.name]: e.target.value,
    }));
  };

  useEffect(() => {
    if (Object.keys(error).length === 0 && submit) {
      console.log(formData);
    }
  }, [error]);

  const Navigate = useNavigate();

  const Validate = (data) => {
    console.log("data", data);
    const error = {};
    if (!data.name) {
      error.name = "UserName is required";
    }
    if (!data.DOB) {
      error.DOB = "DOB is required";
    }
    if (!data.course_name) {
      error.course_name = "Course Name is required";
    }
    if (!data.duration) {
      error.duration = "Duration is required";
    }
    if (!data.mobile_no) {
      error.mobile_no = "Mobile No is required";
    }
    if (!data.certificate_no) {
      error.certificate_no = "Certificate No is required";
    }
    return error;
  };

  const submitForm = (e) => {
    e.preventDefault();
    seterror(Validate(formData));
    setSubmit(true);
    axios
      .post(`${apiUrl}/studentData/entry`, formData)
      .then((res) => {
        axios
          .put(
            `${apiUrl}/studentData/generation/${res.data.id}`,
            console.log(res.data.id)
          )
          .then((res) => {
            console.log(res.data, "UPLOADED SUCCESSFULLY....");
            Navigate("/Table");
          })
          .catch((err) => {
            console.log(err, "error posting");
          });
      })
      .catch((err) => console.log(err, "error posting"));
  };

  return (
    <>
      <div className="flex justify-center items-center h-[100vh] w-full my-5">
        <div className="shadow-2xl rounded-xl p-8 w-full m-2 md:w-2/4">
          <div className="text-3xl text-center font-semibold mb-4">
            <p>User Details</p>
          </div>
          <div className="text-center">
            {Object.keys(error).length === 0 && submit ? (
              <span className="text-green-500 font-semibold">
                Generated Successfully ✓<br /> View in Details
              </span>
            ) : null}
          </div>
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
              value={formData.name}
            />
            <br />
            <div className="text-red-500 font-semibold mb-2">
              <p>{error.name}</p>
            </div>
            <label htmlFor="DOB" className="font-bold">
              Date of Birth:
            </label>
            <br />
            <input
              type="date"
              id="DOB"
              name="DOB"
              className="border border-black p-1 rounded-md w-full"
              onChange={handleChange}
              value={formData.DOB}
            />
            <br />
            <div className="text-red-500 font-semibold mb-2">
              <p>{error.DOB}</p>
            </div>
            <label htmlFor="course_name" className="font-bold">
              Course Name:
            </label>
            <br />
            <input
              type="text"
              id="Course_Name"
              name="course_name"
              className="border border-black p-1 rounded-md w-full"
              onChange={handleChange}
              value={formData.course_name}
            />
            <br />
            <div className="text-red-500 font-semibold mb-2">
              <p>{error.course_name}</p>
            </div>
            <label htmlFor="Duration" className="font-bold">
              Duration:
            </label>
            <br />
            <input
              type="text"
              id="Duration"
              name="duration"
              className="border border-black p-1 rounded-md w-full"
              onChange={handleChange}
              value={formData.duration}
            />
            <br />
            <div className="text-red-500 font-semibold mb-2">
              <p>{error.duration}</p>
            </div>
            <label htmlFor="Number" className="font-bold">
              Mobile Number:
            </label>
            <br />
            <input
              type="number"
              id="Number"
              name="mobile_no"
              className="border border-black p-1 rounded-md w-full"
              onChange={handleChange}
              value={formData.mobile_no}
            />
            <br />
            <div className="text-red-500 font-semibold mb-2">
              <p>{error.mobile_no}</p>
            </div>
            <label htmlFor="Certificate_Number" className="font-bold">
              Certificate Number:
            </label>
            <br />
            <input
              type="text"
              id="Certificate_Number"
              name="certificate_no"
              className="border border-black p-1 rounded-md w-full"
              onChange={handleChange}
              value={formData.certificate_no}
            />
            <br />
            <div className="text-red-500 font-semibold mb-2">
              <p>{error.certificate_no}</p>
            </div>
            <div className="text-center mt-5 flex justify-around flex-wrap md:flex-nowrap gap-2">
              <button
                type="submit"
                onClick={submitForm}
                className="bg-pink-600 rounded-md p-2 text-white hover:bg-pink-500"
              >
                {/* Generate Certificate */}
                Generate Certificate
              </button>
              <Link to={"/"}>
                <button className="bg-pink-600 text-white rounded p-2 hover:bg-pink-500">
                  back
                </button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
