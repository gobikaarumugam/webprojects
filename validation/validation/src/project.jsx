import { useState } from "react";
import "./Project.css";

function Project() {
  const [formData, setFormData] = useState({
    name: "",
    fatherName: "",
    motherName: "",
    dob: "",
    gender: "",
    email: "",
    phone: "",
    alternatePhone: "",
    password: "",
    confirmPassword: "",
    address: "",
    city: "",
    state: "",
    country: "",
    pincode: "",
    qualification: "",
    occupation: "",
    username: "",
    aadhaar: "",
    terms: false
  });

  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value
    });

    setErrors({
      ...errors,
      [name]: ""
    });

    setSuccess("");
  };

  const validate = () => {
    let newErrors = {};

    if (!formData.name.trim())
      newErrors.name = "Name is required";
    else if (!/^[A-Za-z ]+$/.test(formData.name))
      newErrors.name = "Only letters are allowed";

    if (!formData.fatherName.trim())
      newErrors.fatherName = "Father name is required";

    if (!formData.motherName.trim())
      newErrors.motherName = "Mother name is required";

    if (!formData.dob)
      newErrors.dob = "Date of birth is required";

    if (!formData.gender)
      newErrors.gender = "Select gender";

    if (!formData.email)
      newErrors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      newErrors.email = "Enter valid email";

    if (!formData.phone)
      newErrors.phone = "Phone number is required";
    else if (!/^[0-9]{10}$/.test(formData.phone))
      newErrors.phone = "Enter 10 digit phone number";

    if (!formData.alternatePhone)
      newErrors.alternatePhone = "Alternate phone is required";
    else if (!/^[0-9]{10}$/.test(formData.alternatePhone))
      newErrors.alternatePhone = "Enter 10 digit phone number";

    if (!formData.password)
      newErrors.password = "Password is required";
    else if (formData.password.length < 6)
      newErrors.password = "Minimum 6 characters required";

    if (!formData.confirmPassword)
      newErrors.confirmPassword = "Confirm your password";
    else if (formData.password !== formData.confirmPassword)
      newErrors.confirmPassword = "Passwords do not match";

    if (!formData.address.trim())
      newErrors.address = "Address is required";

    if (!formData.city.trim())
      newErrors.city = "City is required";

    if (!formData.state.trim())
      newErrors.state = "State is required";

    if (!formData.country.trim())
      newErrors.country = "Country is required";

    if (!formData.pincode)
      newErrors.pincode = "Pincode is required";
    else if (!/^[0-9]{6}$/.test(formData.pincode))
      newErrors.pincode = "Enter 6 digit pincode";

    if (!formData.qualification)
      newErrors.qualification = "Select qualification";

    if (!formData.occupation.trim())
      newErrors.occupation = "Occupation is required";

    if (!formData.username.trim())
      newErrors.username = "Username is required";
    else if (formData.username.length < 4)
      newErrors.username = "Minimum 4 characters required";

    if (!formData.aadhaar)
      newErrors.aadhaar = "Aadhaar number is required";
    else if (!/^[0-9]{12}$/.test(formData.aadhaar))
      newErrors.aadhaar = "Enter 12 digit Aadhaar number";

    if (!formData.terms)
      newErrors.terms = "You must accept the terms";

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validate()) {
      setSuccess("Registration Successful!");

      setFormData({
        name: "",
        fatherName: "",
        motherName: "",
        dob: "",
        gender: "",
        email: "",
        phone: "",
        alternatePhone: "",
        password: "",
        confirmPassword: "",
        address: "",
        city: "",
        state: "",
        country: "",
        pincode: "",
        qualification: "",
        occupation: "",
        username: "",
        aadhaar: "",
        terms: false
      });
    }
  };

  return (
    <div className="page">
      <div className="form-container">

        <h1>Registration Form</h1>
        

        <form onSubmit={handleSubmit}>

          {/* 1 */}
          <div className="form-group">
            <label>1. Full Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter full name"
              value={formData.name}
              onChange={handleChange}
            />
            {errors.name && <p className="error">{errors.name}</p>}
          </div>

          {/* 2 */}
          <div className="form-group">
            <label>2. Father Name</label>
            <input
              type="text"
              name="fatherName"
              placeholder="Enter father name"
              value={formData.fatherName}
              onChange={handleChange}
            />
            {errors.fatherName && (
              <p className="error">{errors.fatherName}</p>
            )}
          </div>

          {/* 3 */}
          <div className="form-group">
            <label>3. Mother Name</label>
            <input
              type="text"
              name="motherName"
              placeholder="Enter mother name"
              value={formData.motherName}
              onChange={handleChange}
            />
            {errors.motherName && (
              <p className="error">{errors.motherName}</p>
            )}
          </div>

          {/* 4 */}
          <div className="form-group">
            <label>4. Date of Birth</label>
            <input
              type="date"
              name="dob"
              value={formData.dob}
              onChange={handleChange}
            />
            {errors.dob && <p className="error">{errors.dob}</p>}
          </div>

          {/* 5 */}
          <div className="form-group">
            <label>5. Gender</label>
            <select
              name="gender"
              value={formData.gender}
              onChange={handleChange}
            >
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
            {errors.gender && <p className="error">{errors.gender}</p>}
          </div>

          {/* 6 */}
          <div className="form-group">
            <label>6. Email</label>
            <input
              type="text"
              name="email"
              placeholder="Enter email"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <p className="error">{errors.email}</p>}
          </div>

          {/* 7 */}
          <div className="form-group">
            <label>7. Phone Number</label>
            <input
              type="text"
              name="phone"
              placeholder="10 digit phone number"
              value={formData.phone}
              onChange={handleChange}
            />
            {errors.phone && <p className="error">{errors.phone}</p>}
          </div>

          {/* 8 */}
          <div className="form-group">
            <label>8. Alternate Phone</label>
            <input
              type="text"
              name="alternatePhone"
              placeholder="Alternate phone number"
              value={formData.alternatePhone}
              onChange={handleChange}
            />
            {errors.alternatePhone && (
              <p className="error">{errors.alternatePhone}</p>
            )}
          </div>

          {/* 9 */}
          <div className="form-group">
            <label>9. Password</label>
            <input
              type="password"
              name="password"
              placeholder="Enter password"
              value={formData.password}
              onChange={handleChange}
            />
            {errors.password && (
              <p className="error">{errors.password}</p>
            )}
          </div>

          {/* 10 */}
          <div className="form-group">
            <label>10. Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm password"
              value={formData.confirmPassword}
              onChange={handleChange}
            />
            {errors.confirmPassword && (
              <p className="error">{errors.confirmPassword}</p>
            )}
          </div>

          {/* 11 */}
          <div className="form-group">
            <label>11. Address</label>
            <textarea
              name="address"
              placeholder="Enter address"
              value={formData.address}
              onChange={handleChange}
            ></textarea>
            {errors.address && (
              <p className="error">{errors.address}</p>
            )}
          </div>

          {/* 12 */}
          <div className="form-group">
            <label>12. City</label>
            <input
              type="text"
              name="city"
              placeholder="Enter city"
              value={formData.city}
              onChange={handleChange}
            />
            {errors.city && <p className="error">{errors.city}</p>}
          </div>

          {/* 13 */}
          <div className="form-group">
            <label>13. State</label>
            <input
              type="text"
              name="state"
              placeholder="Enter state"
              value={formData.state}
              onChange={handleChange}
            />
            {errors.state && <p className="error">{errors.state}</p>}
          </div>

          {/* 14 */}
          <div className="form-group">
            <label>14. Country</label>
            <input
              type="text"
              name="country"
              placeholder="Enter country"
              value={formData.country}
              onChange={handleChange}
            />
            {errors.country && (
              <p className="error">{errors.country}</p>
            )}
          </div>

          {/* 15 */}
          <div className="form-group">
            <label>15. Pincode</label>
            <input
              type="text"
              name="pincode"
              placeholder="6 digit pincode"
              value={formData.pincode}
              onChange={handleChange}
            />
            {errors.pincode && (
              <p className="error">{errors.pincode}</p>
            )}
          </div>

          {/* 16 */}
          <div className="form-group">
            <label>16. Qualification</label>
            <select
              name="qualification"
              value={formData.qualification}
              onChange={handleChange}
            >
              <option value="">Select Qualification</option>
              <option value="10th">10th</option>
              <option value="12th">12th</option>
              <option value="Diploma">Diploma</option>
              <option value="UG">Undergraduate</option>
              <option value="PG">Postgraduate</option>
            </select>
            {errors.qualification && (
              <p className="error">{errors.qualification}</p>
            )}
          </div>

          {/* 17 */}
          <div className="form-group">
            <label>17. Occupation</label>
            <input
              type="text"
              name="occupation"
              placeholder="Enter occupation"
              value={formData.occupation}
              onChange={handleChange}
            />
            {errors.occupation && (
              <p className="error">{errors.occupation}</p>
            )}
          </div>

          {/* 18 */}
          <div className="form-group">
            <label>18. Username</label>
            <input
              type="text"
              name="username"
              placeholder="Create username"
              value={formData.username}
              onChange={handleChange}
            />
            {errors.username && (
              <p className="error">{errors.username}</p>
            )}
          </div>

          {/* 19 */}
          <div className="form-group">
            <label>19. Aadhaar Number</label>
            <input
              type="text"
              name="aadhaar"
              placeholder="12 digit Aadhaar number"
              value={formData.aadhaar}
              onChange={handleChange}
            />
            {errors.aadhaar && (
              <p className="error">{errors.aadhaar}</p>
            )}
          </div>

          {/* 20 */}
          <div className="terms">
            <input
              type="checkbox"
              name="terms"
              checked={formData.terms}
              onChange={handleChange}
            />

            <label>
              20. I agree to the Terms and Conditions
            </label>
          </div>

          {errors.terms && (
            <p className="error">{errors.terms}</p>
          )}

          <button type="submit">Submit</button>

          {success && (
            <p className="success">{success}</p>
          )}

        </form>
      </div>
    </div>
  );
}

export default Project;