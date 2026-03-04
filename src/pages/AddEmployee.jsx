import React from 'react'

const AddEmployee = ({ handleChange, handleSubmit, employee, hobby, error }) => {
    let cities = [
        "Ahmedabad",
        "Mumbai",
        "Delhi",
        "Bangalore",
        "Chennai",
        "Kolkata",
        "Hyderabad"
    ];
    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card shadow p-4">
                        <h3 className="text-center mb-4">Employee Form</h3>

                        <form onSubmit={handleSubmit}>

                            <div className='mb-2'>
                                <label className='form-label' htmlFor="profileImg">Profile Picture</label>
                                <input className='form-control' type="url" name='profileImg' id='profileImg' onChange={handleChange} value={employee.profileImg || ''} />
                                <span className="text-danger">{error.profileImg || ""}</span>
                            </div>

                            {/* Name */}
                            <div className="mb-3">
                                <label htmlFor="name" className="form-label">Employee Name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    value={employee.name || ''}
                                    onChange={handleChange}
                                    name="name"
                                    id="name"
                                />
                                <span className="text-danger">{error.name || ""}</span>
                            </div>

                            {/* Email */}
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">Email</label>
                                <input
                                    type="email"
                                    className="form-control"
                                    value={employee.email || ''}
                                    onChange={handleChange}
                                    name="email"
                                    id="email"
                                />
                                <span className="text-danger">{error.email || ""}</span>
                            </div>

                            {/* Password */}
                            <div className="mb-3">
                                <label htmlFor="password" className="form-label">Password</label>
                                <input
                                    type="password"
                                    className="form-control"
                                    value={employee.password || ''}
                                    onChange={handleChange}
                                    name="password"
                                    id="password"
                                />
                                <span className="text-danger">{error.password || ""}</span>
                            </div>

                            <div className='mb-2'>
                                <label className='form-label' htmlFor="mobile">Mobile Number</label>
                                <input className=' form-control' type="tel" id='mobile' name='mobile' onChange={handleChange} value={employee.mobile || ''} />
                                <span className="text-danger">{error.mobile || ""}</span>
                            </div>

                            {/* Gender */}
                            <div className="mb-3">
                                <label className="form-label d-block">Gender</label>

                                <div className="form-check form-check-inline">
                                    <input
                                        className="form-check-input"
                                        type="radio"
                                        name="gender"
                                        id="male"
                                        value="male"
                                        checked={employee.gender === 'male'}
                                        onChange={handleChange}
                                    />
                                    <label className="form-check-label" htmlFor="male">Male</label>
                                </div>

                                <div className="form-check form-check-inline">
                                    <input
                                        className="form-check-input"
                                        type="radio"
                                        name="gender"
                                        id="female"
                                        value="female"
                                        checked={employee.gender === 'female'}
                                        onChange={handleChange}
                                    />
                                    <label className="form-check-label" htmlFor="female">Female</label>
                                </div>
                                <span className="text-danger">{error.gender || ""}</span>
                            </div>

                            {/* Hobby */}
                            <div className="mb-3">
                                <label className="form-label d-block">Hobby</label>

                                <div className="form-check">
                                    <input
                                        className="form-check-input"
                                        type="checkbox"
                                        value="dancing"
                                        name="hobby"
                                        id="dancing"
                                        checked={employee.hobby?.includes('dancing')}
                                        onChange={handleChange}
                                    />
                                    <label className="form-check-label" htmlFor="dancing">Dancing</label>
                                </div>

                                <div className="form-check">
                                    <input
                                        className="form-check-input"
                                        type="checkbox"
                                        value="reading"
                                        name="hobby"
                                        id="reading"
                                        checked={employee.hobby?.includes('reading')}
                                        onChange={handleChange}
                                    />
                                    <label className="form-check-label" htmlFor="reading">Reading</label>
                                </div>

                                <div className="form-check">
                                    <input
                                        className="form-check-input"
                                        type="checkbox"
                                        value="coding"
                                        name="hobby"
                                        id="coding"
                                        checked={employee.hobby?.includes('coding')}
                                        onChange={handleChange}
                                    />
                                    <label className="form-check-label" htmlFor="coding">Coding</label>
                                </div>
                                <span className="text-danger">{error.hobby || ""}</span>
                            </div>

                            {/* City */}
                            <div className="mb-3">
                                <label htmlFor="city" className="form-label">Select City</label>
                                <select
                                    className="form-select"
                                    name="city"
                                    id="city"
                                    value={employee.city || ''}
                                    onChange={handleChange}
                                >
                                    <option value="" disabled>--Select City--</option>
                                    {cities.map((city, index) => (
                                        <option key={index} value={city}>{city}</option>
                                    ))}
                                </select>
                                <span className="text-danger">{error.city || ""}</span>
                            </div>

                            {/* Address */}
                            <div className="mb-3">
                                <label htmlFor="address" className="form-label">Address</label>
                                <textarea
                                    className="form-control"
                                    name="address"
                                    value={employee.address || ''}
                                    onChange={handleChange}
                                    id="address"
                                    rows="3"
                                />
                                <span className="text-danger">{error.address || ""}</span>
                            </div>

                            {/* Submit */}
                            <div className="d-grid">
                                <button type="submit" className="btn btn-primary">
                                    Submit
                                </button>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddEmployee;