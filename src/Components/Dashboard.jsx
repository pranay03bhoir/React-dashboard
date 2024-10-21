import React, { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";
import TableDataDownload from "./TableDataDownload";

const ITEMS_PER_PAGE = 12;

const Dashboard = () => {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    fetch("/data.json")
      .then((response) => response.json())
      .then((json) => {
        setData(json);
        setFilteredData(json);
      });
  }, []);

  const handleSearch = (e) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);

    const filtered = data.filter(
      (item) =>
        item.Account_name.toLowerCase().includes(term) ||
        item.id.toString().includes(term) ||
        item.Industry.toString().toLowerCase().includes(term)
    );

    setFilteredData(filtered);
    setCurrentPage(0);
  };

  const handlePageClick = ({ selected }) => {
    setCurrentPage(selected);
  };

  const offset = currentPage * ITEMS_PER_PAGE;
  const currentData = filteredData.slice(offset, offset + ITEMS_PER_PAGE);
  const pageCount = Math.ceil(filteredData.length / ITEMS_PER_PAGE);

  return (
    <div className="ml-10 p-6 w-auto">
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
      <div className="grid justify-start float-start">
        <TableDataDownload filteredData={filteredData} />
      </div>
      <div className="mb-4 grid justify-items-end">
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearch}
          className="border border-gray-300 rounded px-4 py-2 w-full sm:w-1/2"
          placeholder="Search by ID or Name"
        />
      </div>

      <div className="overflow-x-auto">
        <table className="table-auto w-full border-collapse border border-gray-300">
          <thead>
            <tr>
              <th className="border border-gray-300 px-4 py-2">ID</th>
              <th className="border border-gray-300 px-4 py-2">Account Name</th>
              <th className="border border-gray-300 px-4 py-2">Email</th>
              <th className="border border-gray-300 px-4 py-2">Phone no.</th>
              <th className="border border-gray-300 px-4 py-2">Industry</th>
            </tr>
          </thead>
          <tbody>
            {currentData.map((item) => (
              <tr key={item.id} className="even:bg-gray-100">
                <td className="border border-gray-300 px-4 py-2">{item.id}</td>
                <td className="border border-gray-300 px-4 py-2">
                  {item.Account_name}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {item.email}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {item.phone_no}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {item.Industry}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <ReactPaginate
        previousLabel={"← Previous"}
        nextLabel={"Next →"}
        pageCount={pageCount}
        onPageChange={handlePageClick}
        containerClassName="flex justify-center mt-4 space-x-2"
        previousLinkClassName="px-3 py-1 bg-gray-200 hover:bg-gray-300 rounded"
        nextLinkClassName="px-3 py-1 bg-gray-200 hover:bg-gray-300 rounded"
        activeClassName="bg-blue-500 w-10 rounded-md text-center text-white"
      />
    </div>
  );
};

export default Dashboard;
