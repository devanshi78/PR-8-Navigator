import React from 'react'
import { IoIosEye } from "react-icons/io";
import { IoIosEyeOff } from "react-icons/io";
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";

const ViewEmployees = ({ data, currentPage, totalPages, setCurrentPage, handleDelete, handleEdit, view, handleViewPass, handleNext, handlePrev }) => {
  return (
    <>
      <div className='container'>
        <div className='row justify-content-center mt-4'>
          <div className='col-md-12'>
            <table className='table table-bordered table-hover table-striped align-middle' style={{ width: "100%" }}>
              <thead>
                <tr className='text-center'>
                  <th>Sr.no</th>
                  <th>Profile</th>
                  <th>Employee Name</th>
                  <th>Email</th>
                  <th>Password</th>
                  <th>Mobile</th>
                  <th>Gender</th>
                  <th>Hobby</th>
                  <th>City</th>
                  <th>Address</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody className=''>
                {
                  data.map((emp, index) => {
                    return (
                      <tr key={emp.id}>
                        <td>{index + 1}</td>
                        <td>
                          <img src={emp.profileImg} style={{ width: "60px", height: "60px", objectFit: "cover" }} alt={emp.ename} />
                        </td>
                        <td>{emp.name}</td>
                        <td>{emp.email}</td>
                        <td>
                          <div className='d-flex justify-content-center align-items-center gap-2'>
                            <input type={view.id == emp.id ? 'text' : 'password'} className='form-control shadow-none form-control-sm border-0 bg-transparent text-center' style={{ width: "100px" }} value={emp.password} readOnly />
                            <button type='button' className='btn btn-sm btn-outline-secondary' onClick={() => handleViewPass(emp.id)}>
                              {view.id == emp.id ? <IoIosEyeOff /> : <IoIosEye />}</button>
                          </div>
                        </td>
                        <td>{emp.mobile}</td>
                        <td>{emp.gender}</td>
                        <td>{emp.hobby?.join(', ')}</td>
                        <td>{emp.city}</td>
                        <td>{emp.address}</td>
                        <td className='align-middle'>
                          <div className='d-flex justify-content-center gap-2'>
                            <button className='btn btn-danger' type='button' onClick={() => {
                              if (window.confirm("Are you sure you want to delete this employee?")) {
                                handleDelete(emp.id)
                              }
                            }}><MdDelete /></button>
                            <button className='btn btn-warning' type='button' onClick={() => handleEdit(emp.id)}><MdEdit /></button>
                          </div>
                        </td>
                      </tr>
                    )
                  })
                }
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className='d-flex justify-content-end position-fixed bottom-0 end-0 me-5'>
        <nav aria-label="Page navigation example">
          <ul className="pagination shadow-none">
            <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
              <button
                className="page-link shadow-none"
                onClick={handlePrev}
              >
                Previous
              </button>
            </li>

            {[...Array(totalPages)].map((_, index) => (
              <li
                key={index}
                className={`page-item ${currentPage == index + 1 ? "active" : ""}`}
              >
                <button
                  className="page-link shadow-none"
                  onClick={() => setCurrentPage(index + 1)}
                >
                  {index + 1}
                </button>
              </li>
            ))}

            <li className={`page-item ${currentPage == totalPages ? "disabled" : ""}`}>
              <button
                className="page-link shadow-none"
                onClick={handleNext}
              >
                Next
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </>
  )
}

export default ViewEmployees
