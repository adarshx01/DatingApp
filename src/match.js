  import React, { useEffect, useState } from 'react';
  import './matchcard.css';
  import PropTypes from 'prop-types';
  import MatchCard from './matchcard.js';
  import { collection, getDocs } from 'firebase/firestore';
  import { db } from './Firebase';

  const Match = () => {
    const storedAnswers = JSON.parse(localStorage.getItem("Answers"));
    const userDataString = localStorage.getItem("userData");
    const storedUserData = JSON.parse(userDataString);
  // console.log('Stored Answers:', storedAnswers);
    // console.log(storedAnswers[0]);
    const [peopleData, setPeopleData] = useState([]);
    const [currentUser, setCurrentUser] = useState(null);

    useEffect(() => {
      const fetchData = async () => {
        try {
          const querySnapshot = await getDocs(collection(db, 'users'));
          const data = querySnapshot.docs.map((doc) => ({
            id: doc.id, // Use 'id' property for document ID (email address)
            ...doc.data(),
          }));
          setPeopleData(data);
        } catch (error) {
          console.error('Error fetching data from Firebase:', error);
        }
      };

      fetchData();
      // Set the current user data
      if (!userDataString || Object.keys(storedUserData).length === 0) {
        setCurrentUser({
          Name: localStorage.getItem("UserName"),
          Email: localStorage.getItem("Useremail"),
          Password: localStorage.getItem("Password"),
          Gender: localStorage.getItem("Gender"),
          DOB: localStorage.getItem("DOB"),
          Instagram: localStorage.getItem("Instagram"),
          Abouts: localStorage.getItem("Abouts"),
          question1: storedAnswers && storedAnswers[0] ? storedAnswers[0] : null,
          question2: storedAnswers && storedAnswers[1] ? storedAnswers[1] : null,
          question3: storedAnswers && storedAnswers[2] ? storedAnswers[2] : null,
          question4: storedAnswers && storedAnswers[3] ? storedAnswers[3] : null,
          question5: storedAnswers && storedAnswers[4] ? storedAnswers[4] : null,
          question6: storedAnswers && storedAnswers[5] ? storedAnswers[5] : null,
          question7: storedAnswers && storedAnswers[6] ? storedAnswers[6] : null,
          question8: storedAnswers && storedAnswers[7] ? storedAnswers[7] : null,
          question9: storedAnswers && storedAnswers[8] ? storedAnswers[8] : null,
          question10: storedAnswers && storedAnswers[9] ? storedAnswers[9] : null,
          question11: storedAnswers && storedAnswers[10] ? storedAnswers[10] : null,
          question12: storedAnswers && storedAnswers[11] ? storedAnswers[11] : null,
          question13: storedAnswers && storedAnswers[12] ? storedAnswers[12] : null,
          question14: storedAnswers && storedAnswers[13] ? storedAnswers[13] : null,
          question15: storedAnswers && storedAnswers[14] ? storedAnswers[14] : null,
        });
      } else {
        setCurrentUser({
          Name: storedUserData.UIDname,
          Email: storedUserData.UIDemail,
          Password: storedUserData.UIDpassword,
          Gender: storedUserData.UIDGender,
          DOB: storedUserData.UIDdob,
          Instagram: storedUserData.UIDinsta,
          Abouts: storedUserData.UIDabouts,
          question1: storedUserData.Question1,
          question2: storedUserData.Question2,
          question3: storedUserData.Question3,
          question4: storedUserData.Question4,
          question5: storedUserData.Question5,
          question6: storedUserData.Question6,
          question7: storedUserData.Question7,
          question8: storedUserData.Question8,
          question9: storedUserData.Question9,
          question10: storedUserData.Question10,
          question11: storedUserData.Question11,
          question12: storedUserData.Question12,
          question13: storedUserData.Question13,
          question14: storedUserData.Question14,
          question15: storedUserData.Question15,
        });
      }
    }, []);

    // Function to calculate compatibility
    const calculateCompatibility = (user1, user2) => {
      let totalScore = 0;

      
      for (const question in user1) {
        if (user1.hasOwnProperty(question) && user2.hasOwnProperty(question)) {
          
          if (user1[question] === user2[question]) {
            totalScore += 1; // Increase the score
          }
        }
      }

      return totalScore;
    };

    // Find the most compatible person
    const mostCompatiblePerson = peopleData
      .filter(person => person.Gender !== currentUser?.Gender) // gender preference
      .reduce((mostCompatible, person) => {
        const compatibilityScore = calculateCompatibility(currentUser, person);

        if (compatibilityScore > mostCompatible.score) {
          return { person, score: compatibilityScore };
        } else {
          return mostCompatible;
        }
      }, { person: null, score: -1 }).person;

    return (
      <div className="card-container">
        {mostCompatiblePerson && (
          <MatchCard
            Name={mostCompatiblePerson.Name}
            age={mostCompatiblePerson.DOB}
            abouts={mostCompatiblePerson.Abouts}
            InstaID={mostCompatiblePerson.Instagram}
          />
        )}
      </div>
    );
  };

  export default Match;
