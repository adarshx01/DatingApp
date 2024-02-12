import './getstarted.css';
import React, { useState } from 'react';
import { collection, getDocs, addDoc } from 'firebase/firestore';
import { db } from './Firebase';
import { Link } from 'react-router-dom';
let FLAG = 0;
function Getstartedcard() {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email) {
      setErrorMessage('Please enter your email address.');
      return;
    }

    try {
      const querySnapshot = await getDocs(collection(db, 'users'));
      const userDocs = querySnapshot.docs;

      for (const userDoc of userDocs) {
        const userEmail = userDoc.data().Email;
        const userPassword = userDoc.data().Password;
        if (email === userEmail) {
          if (pass === userPassword) {
            const userData = {
              UIDemail: userDoc.data().Email,
              UIDpassword: userDoc.data().Password,
              UIDname: userDoc.data().Name,
              UIDGender: userDoc.data().Gender,
              UIDdob: userDoc.data().DOB,
              UIDinsta: userDoc.data().Instagram,
              UIDabouts: userDoc.data().Abouts,
              Question1: userDoc.data().question1,
              Question2: userDoc.data().question2,
              Question3: userDoc.data().question3,
              Question4: userDoc.data().question4,
              Question5: userDoc.data().question5,
              Question6: userDoc.data().question6,
              Question7: userDoc.data().question7,
              Question8: userDoc.data().question8,
              Question9: userDoc.data().question9,
              Question10: userDoc.data().question10,
              Question11: userDoc.data().question11,
              Question12: userDoc.data().question12,
              Question13: userDoc.data().question13,
              Question14: userDoc.data().question14,
              Question15: userDoc.data().question15,
            };

            // Store userData array in local storage
            localStorage.setItem("userData", JSON.stringify(userData));
            document.getElementById('formheading').innerText = 'Logging You In...';
            localStorage.setItem("LoginFLAG",FLAG+1);
            window.location.href = '/match';
            return;
          } else {
            setErrorMessage('Invalid email address or password.');
            document.getElementById('formheading').innerText = 'Wrong Password';
            return;
          }
        }
      }

      // No matching email found
      document.getElementById('formheading').innerText = 'Wrong UserName';
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };
  const Registeruser = () => {
    if(email!==""&&pass!==""){
      window.location.href ='/profile'
    }
    localStorage.setItem("Useremail",email);
    localStorage.setItem("Password",pass);
    localStorage.setItem("LoginFLAG",FLAG+1);
  };
  const signupuser = async () => {
    document.getElementById('formheading').innerHTML = 'Create a new Account!';

    try {
      document.getElementById("loginuser").style.display = "none";
      document.getElementById("signupuser").style.display = "block";
    // var username = document.getElementById("email").value;
    // var password = document.getElementById("password").value;
    } catch (error) {
      console.error('Error adding user:', error);
    }
  };
  
  return (
    <>
      <div className='getstarted'>
        <div style={{marginLeft:"50%",width:"14em",marginBottom:"5em"}}>Don't do cheap act🥺 or go cheap😅!!</div>
        <div className='form'>
          <p className='form-title' id='formheading'>Sign in to your account</p>
          <div className='input-container'>
            <input
              type='string'
              placeholder='Enter Username'
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className='input-container'>
            <input
              type='password'
              id='passkey'
              placeholder='Enter password'
              onChange={(e) => setPass(e.target.value)}
              required
            />
          </div>
          <button type='submit' id='loginuser' className='submit' onClick={handleSubmit}>
            Login
          </button>
          <button type='submit' id='signupuser'  className='submit' onClick={Registeruser} style={{display:'none'}}>
            Sign Up
          </button>
          <p className='signup-link'>
            <button className='signup' onClick={signupuser}>
              No account? Sign up
            </button>
          </p>
        </div>
        <div>
            <div class="flower">
                    <div class="f-wrapper">
                        <div class="flower__line"></div>
                        <div class="f">
                            <div class="flower__leaf flower__leaf--1"></div>
                            <div class="flower__leaf flower__leaf--2"></div>
                            <div class="flower__leaf flower__leaf--3"></div>
                            <div class="flower__leaf flower__leaf--4"></div>
                            <div class="flower__leaf flower__leaf--5"></div>
                            <div class="flower__leaf flower__leaf--6"></div>
                            <div class="flower__leaf flower__leaf--7"></div>
                            <div class="flower__leaf flower__leaf--8 flower__fall-down--yellow"></div>
                        </div>
                    </div>

                    <div class="f-wrapper f-wrapper--2">
                        <div class="flower__line"></div>
                        <div class="f">
                            <div class="flower__leaf flower__leaf--1"></div>
                            <div class="flower__leaf flower__leaf--2"></div>
                            <div class="flower__leaf flower__leaf--3"></div>
                            <div class="flower__leaf flower__leaf--4"></div>
                            <div class="flower__leaf flower__leaf--5"></div>
                            <div class="flower__leaf flower__leaf--6"></div>
                            <div class="flower__leaf flower__leaf--7"></div>
                            <div class="flower__leaf flower__leaf--8 flower__fall-down--pink"></div>
                        </div>
                    </div>

                    <div class="f-wrapper f-wrapper--3">
                        <div class="flower__line"></div>
                        <div class="f">
                            <div class="flower__leaf flower__leaf--1"></div>
                            <div class="flower__leaf flower__leaf--2"></div>
                            <div class="flower__leaf flower__leaf--3"></div>
                            <div class="flower__leaf flower__leaf--4"></div>
                            <div class="flower__leaf flower__leaf--5"></div>
                            <div class="flower__leaf flower__leaf--6"></div>
                            <div class="flower__leaf flower__leaf--7"></div>
                            <div class="flower__leaf flower__leaf--8 flower__fall-down--purple"></div>
                        </div>
                    </div>
                    <div class="flower__glass"></div>
                </div>
        </div>
        <div className="e-card playing">
        <div className="image"></div>
        <div className="wave"></div>
        <div className="wave"></div>
        <div className="wave"></div>

        <div className="infotop">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="icon">
            <path fill="currentColor" d="M19.4133 4.89862L14.5863 2.17544C12.9911 1.27485 11.0089 1.27485 9.41368 2.17544L4.58674 4.89862C2.99153 5.7992 2 7.47596 2 9.2763V14.7235C2 16.5238 2.99153 18.2014 4.58674 19.1012L9.41368 21.8252C10.2079 22.2734 11.105 22.5 12.0046 22.5C12.6952 22.5 13.3874 22.3657 14.0349 22.0954C14.2204 22.018 14.4059 21.9273 14.5872 21.8252L19.4141 19.1012C19.9765 18.7831 20.4655 18.3728 20.8651 17.8825C21.597 16.9894 22 15.8671 22 14.7243V9.27713C22 7.47678 21.0085 5.7992 19.4133 4.89862ZM4.10784 14.7235V9.2763C4.10784 8.20928 4.6955 7.21559 5.64066 6.68166L10.4676 3.95848C10.9398 3.69152 11.4701 3.55804 11.9996 3.55804C12.5291 3.55804 13.0594 3.69152 13.5324 3.95848L18.3593 6.68166C19.3045 7.21476 19.8922 8.20928 19.8922 9.2763V9.75997C19.1426 9.60836 18.377 9.53091 17.6022 9.53091C14.7929 9.53091 12.1041 10.5501 10.0309 12.3999C8.36735 13.8847 7.21142 15.8012 6.68783 17.9081L5.63981 17.3165C4.69466 16.7834 4.10699 15.7897 4.10699 14.7235H4.10784ZM10.4676 20.0413L8.60933 18.9924C8.94996 17.0479 9.94402 15.2665 11.4515 13.921C13.1353 12.4181 15.3198 11.5908 17.6022 11.5908C18.3804 11.5908 19.1477 11.6864 19.8922 11.8742V14.7235C19.8922 15.2278 19.7589 15.7254 19.5119 16.1662C18.7615 15.3596 17.6806 14.8528 16.4783 14.8528C14.2136 14.8528 12.3781 16.6466 12.3781 18.8598C12.3781 19.3937 12.4861 19.9021 12.68 20.3676C11.9347 20.5316 11.1396 20.4203 10.4684 20.0413H10.4676Z"></path>
            </svg>
            <br/>      
            <span>Match, Connect, Love!💖</span><br/>
            <div className="name">- RêveDate</div>
        </div>
        </div>
    </div>
    </>
  );
}

export default Getstartedcard;
