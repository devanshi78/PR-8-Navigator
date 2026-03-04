import React, { useEffect, useState } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import AddEmployee from './pages/AddEmployee'
import ViewEmployees from './pages/ViewEmployees'
import Header from './components/Header'
import Home from './pages/Home'

const App = () => {

  const [employee, setEmployee] = useState({});
  const [list, setList] = useState([]);
  const [hobby, setHobby] = useState([]);
  const [error, setError] = useState([]);
  const [view, setView] = useState({})
  const [searchData, setSearchData] = useState("");
  const [currentPage,setCurrentPage] = useState(1);
  const navigate = useNavigate();

  const dataCount = 5;
  const filteredList = list.filter((item) =>
    item.name.toLowerCase().includes(searchData.toLowerCase())
  );

  const displayData = searchData ? filteredList : list;

  const totalPages = Math.ceil(displayData.length / dataCount);
  const lastIndex = currentPage * dataCount;
  const firstIndex = lastIndex - dataCount;
  const data = displayData.slice(firstIndex,lastIndex);


  const handleChange = (e) => {
    let { name, value, checked } = e.target;
    let newHobby = [...hobby];

    if (name == 'hobby') {
      if (checked) {
        newHobby = [...hobby, value];
      } else {
        newHobby = newHobby.filter(item => item != value);
      }
      value = newHobby;
      setHobby(newHobby);
    }
    setEmployee({ ...employee, [name]: value })
  }

  const validation = () => {
    let error = {};

    if (!employee.profileImg) error.profileImg = 'Please Enter Your Profile Image URL.';
    if (!employee.name) error.name = 'Please Enter Employee Name.';
    if (!employee.email) error.email = 'Please Enter Email Address.';
    if (!employee.mobile) error.mobile = 'Please Enter Mobile No.';
    if (!employee.password) error.password = 'Please Enter Valid Password.';
    if (!employee.gender) error.gender = 'Please select Gender.';
    if (!employee.hobby || employee.hobby.length == 0) error.hobby = 'Please Enter Hobby.';
    if (!employee.city) error.city = 'Please Select City.';
    if (!employee.address) error.address = 'Please Enter Address.';

    setError(error);
    return Object.keys(error).length == 0;
  }

  const handleViewPass = (id) => {
    if (view.id == id) {
      setView({});
    } else {
      setView({ id: id });
    }
  }

  useEffect(() => {
    let oldList = JSON.parse(localStorage.getItem('employees')) || [];
    setList(oldList);
  }, []);

  const handleDelete = (id) => {
    let newList = list.filter(item => item.id != id);
    console.log(error.message);
    setList(newList);
    localStorage.setItem('employees', JSON.stringify(newList));
  }

  const handleEdit = (id) => {
    let data = list.find(item => item.id == id);
    setEmployee(data);
    setHobby(data?.hobby || []);
    navigate('/addEmployee');
  }

  const handleSearch = (e) => {
    setSearchData(e.target.value);
    setCurrentPage(1);
  }

  const handlePrev = () => {
    if(currentPage > 1){
      setCurrentPage(currentPage - 1);
    }
  }

  const handleNext = () => {
    if(totalPages > currentPage){
      setCurrentPage(currentPage + 1);
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validation()) return;

    let newList = [];

    if (employee.id) {
      newList = list.map((item) => {
        if (item.id == employee.id) {
          return employee;
        }
        return item;
      })
      navigate('/viewEmployee');
    } else {
      newList = [...list, { ...employee, id: Date.now() }];
    }
    setList(newList);
    localStorage.setItem('employees', JSON.stringify(newList));
    setEmployee({});
    setHobby([]);
  }

  return (
    <>
      <Header handleSearch={handleSearch} />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/addEmployee' element={<AddEmployee handleChange={handleChange} handleSubmit={handleSubmit} employee={employee} hobby={hobby} error={error} />} />
        <Route path='/viewEmployee' element={<ViewEmployees view={view} currentPage={currentPage} totalPages={totalPages} setCurrentPage={setCurrentPage} data={data} handleDelete={handleDelete} handleEdit={handleEdit} handleViewPass={handleViewPass} searchData={searchData} handlePrev={handlePrev} handleNext={handleNext}/>} />
      </Routes>
    </>
  )
}

export default App
