import react, { useState, useEffect } from "react";
import axios from "axios";
import "./Signup.css";
import Navs from "./navs.jsx";
import signinimg from "../assets/signinimg.svg";
import Otps from "./Otps.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/fontawesome-free-solid";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
var x;
function App() {
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);
  const [check, isCheck] = useState(false);
  const [mssg, setMssg] = useState(null);
  const [status, setStatus] = useState(false);
  const initialValues = {
    username: "",
    email: "",
    password: "",
    repassword: "",
  };
  const onSubmit = (values) => {
    console.log("Form data", values);
  };
  const validate = (values) => {
    let errors = {};
    if (!values.username) {
      errors.username = "required!";
    }
    if (!values.email) {
      errors.email = "required!";
    } else if (
      values.email.match(
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
      ) == null
    ) {
      errors.email = "invalid!";
    }
    if (!values.password) {
      errors.password = "required";
    }
    if (!values.repassword) {
      errors.repassword = "required!";
    }
    if (values.repassword != values.password) {
      errors.repassword = "didn't match";
    }
    x = Object.keys(errors).length;
    console.log(x);
    console.log(errors);
    x !== 0 ? isCheck(false) : isCheck(true);
    console.log(check);
    return errors;
  };
  function showHide1() {
    setShow1(!show1);
  }

  function showHide2() {
    setShow2(!show2);
  }

  const handleApi2 = () => {
    if (check) {
      axios
        .post(
          "https://foodorabackend-production.up.railway.app/user/register",
          {
            username: formik.values.username,
            email: formik.values.email,
            password: formik.values.password,
          }
        )
        .then((res) => {
          setMssg(res.data.msg);
          console.log(res);
          setStatus(res.data.success);
          console.log(res.data.success);
        })
        .catch((err2) => {
          console.log(err2);
          setMssg(err2.response.data.msg);
        });
    }
  };
  const formik = useFormik({
    initialValues,
    onSubmit,
    validate,
  });
  console.log("Form Errors", formik.errors);
  return (
    <div>
      <Navs />
      <p id="backendmssg">{mssg}</p>
      <h1 id="hungry">HUNGRY??</h1>
      <p id="order">Order Now From Your Favourite Restraunt..</p>
      <img src={signinimg} alt="" id="logs" />
      <h1 id="log1">SIGNUP</h1>
      <div id="auths">
        <form id="form2" onSubmit={formik.handleSubmit}>
          <input
            type="text"
            name="username"
            id="username"
            className="fullname"
            placeholder="Enter your username"
            onChange={formik.handleChange}
            value={formik.values.username}
          />
          {formik.errors.username ? (
            <div id="errors1">{formik.errors.username}</div>
          ) : null}
          <input
            type="text"
            name="email"
            id="email"
            placeholder="Enter your Email"
            className="emails"
            onChange={formik.handleChange}
            value={formik.values.email}
          />
          {formik.errors.email ? (
            <div id="errors2">{formik.errors.email}</div>
          ) : null}
          {show1 ? (
            <FontAwesomeIcon icon={faEye} id="eye1" onClick={showHide1} />
          ) : (
            <FontAwesomeIcon icon={faEyeSlash} id="eye1" onClick={showHide1} />
          )}
          <input
            type={show1 ? "text" : "password"}
            name="password"
            id="password"
            className="passwords"
            placeholder="Enter your password"
            onChange={formik.handleChange}
            value={formik.values.password}
          />
          {formik.errors.password ? (
            <div id="errors3">{formik.errors.password}</div>
          ) : null}
          {show2 ? (
            <FontAwesomeIcon icon={faEye} id="eye2" onClick={showHide2} />
          ) : (
            <FontAwesomeIcon icon={faEyeSlash} id="eye2" onClick={showHide2} />
          )}
          <input
            type={show2 ? "text" : "password"}
            name="repassword"
            id="repassword"
            className="repasswords"
            placeholder="Re-enter password"
            onChange={formik.handleChange}
            value={formik.values.repassword}
          />
          {formik.errors.repassword ? (
            <div id="errors4">{formik.errors.repassword}</div>
          ) : null}
          {status ? (
            <Link to="/otp2">
              <button type="submit" onClick={handleApi2}>
                SIGNUP
              </button>
            </Link>
          ) : (
            <button type="submit" onClick={handleApi2}>
              SIGNUP
            </button>
          )}
          <p id="customer">
            Already a customer? <Link to="/login">Login</Link>
          </p>
        </form>
      </div>
    </div>
  );
}
export default App;
