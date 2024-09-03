import React, { useEffect, useState, useRef } from "react";
import { FaTrash } from "react-icons/fa";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "../components/CSS/table.css";

export function Table() {
  const [data, setData] = useState([]);
  const [filterData, setFilterData] = useState([]);

  const apiurl = process.env.REACT_APP_API_URL;

  useEffect(() => {
    axios
      .get(`${apiurl}/studentData/find`)
      .then((res) => {
        setData(res.data);
        setFilterData(res.data); // Set filterData initially with fetched data
      })
      .catch((err) => console.log("error fetching", err));
  }, [`${apiurl}`]);

  const filteredData = (e) => {
    const searchItem = e.target.value.toLowerCase();
    const filtered = data.filter((item) =>
      item.name.toLowerCase().includes(searchItem)
    );
    setFilterData(filtered);
  };

  const Navigate = useNavigate();

  const Back = () => {
    Navigate(-1);
  };

  return (
    <>
      <section>
        <div className="xl:flex justify-center items-start mx-2">
          <div>
            <div className="text-3xl font-semibold text-center mt-4">
              <p>All User details</p>
            </div>
            <div className="max-xl:overflow-auto">
              <div className="flex justify-start">
                <input
                  type="text"
                  name="filtername"
                  onChange={filteredData}
                  placeholder="Search by Name"
                  className="border border-black p-1 rounded-lg my-5"
                />
              </div>
              <div className="Over h-[400px] text-center">
                <table className="border border-black">
                  <thead>
                    <tr>
                      <th className="border border-black p-2 xl:p-4 bg-pink-700 text-white">
                        Serial&nbsp;No
                      </th>
                      <th className="border border-black p-2 xl:p-4 bg-pink-700 text-white">
                        Student Name
                      </th>
                      <th className="border border-black p-2 xl:p-4 bg-pink-700 text-white">
                        Date&nbsp;of&nbsp;Birth
                      </th>
                      <th className="border border-black p-2 xl:p-4 bg-pink-700 text-white">
                        Course&nbsp;Name
                      </th>
                      <th className="border border-black p-2 xl:p-4 bg-pink-700 text-white">
                        Duration&nbsp;&nbsp;&nbsp;
                      </th>
                      <th className="border border-black p-2 xl:p-4 bg-pink-700 text-white">
                        Mobile&nbsp;Number
                      </th>
                      <th className="border border-black p-2 xl:p-4 bg-pink-700 text-white">
                        Certificate&nbsp;Number
                      </th>
                      <th className="border border-black p-2 xl:p-4 bg-pink-700 text-white">
                        Certificate&nbsp;File
                      </th>
                      <th className="border border-black p-2 xl:p-4 bg-pink-700 text-white">
                        Delete&nbsp;Details
                      </th>
                    </tr>
                  </thead>
                  <tbody className="overflow-y-auto">
                    {filterData.map((d, i) => (
                      <tr key={i} className="border border-black">
                        <td className="border border-black p-2 xl:p-4">
                          {i + 1}
                        </td>
                        <td className="border border-black p-2 xl:p-4">
                          {d.name}
                        </td>
                        <td className="border border-black p-2 xl:p-4">
                          {d.DOB}
                        </td>
                        <td className="border border-black p-2 xl:p-4">
                          {d.course_name}
                        </td>
                        <td className="border border-black p-2 xl:p-4">
                          {d.duration}
                        </td>
                        <td className="border border-black p-2 xl:p-4">
                          {d.mobile_no}
                        </td>
                        <td className="border border-black p-2 xl:p-4">
                          {d.certificate_no}
                        </td>
                        <td className="border border-black p-2 xl:p-4">
                          <Link
                            to={`${apiurl}/public/certificate/${d.name} certificate.pdf`}
                          >
                            <span className="bg-pink-700 p-2 text-white">
                              View&nbsp;Certificate
                            </span>
                          </Link>
                        </td>
                        <td className="p-2 xl:p-4 ">
                          <Link to={`/delete/${d._id}`}>
                            <span className="flex justify-center items-center">
                              <FaTrash />
                            </span>
                          </Link>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            <div className="flex justify-center items-center m-4">
              <button
                className="bg-pink-700 text-white rounded p-2 hover:bg-pink-500"
                onClick={Back}
              >
                back
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
