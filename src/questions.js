import React, { useState } from 'react';
import './Quiz.css';
// import { getDatabase } from "firebase/database";
import PropTypes from 'prop-types';
import { addDoc,collection, memoryLocalCache } from 'firebase/firestore';
import {db} from './Firebase'
import { Link } from 'react-router-dom';
const Quiz = () => {


  let FlagLOgProf = parseInt(localStorage.getItem("FLaggedProfile")); 
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState(Array(15).fill(null));

  const handleAnswerSelection = (optionIndex) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = optionIndex;
    setAnswers(newAnswers);
  };
  const renderOptions = () => {
    const options = quizData[currentQuestion].options;

    return options.map((option, optionIndex) => (
      <div key={optionIndex} className="option">
        <label>
          <input
            type="radio"
            name={`question${currentQuestion}`}
            value={option}
            checked={answers[currentQuestion] === optionIndex}
            onChange={() => handleAnswerSelection(optionIndex)}
            style={{height:"20px",width:"20px",marginRight:"2px"}}
          />
          {option}
        </label>
      </div>
    ));
  };

  const renderQuestion = () => {
    return (
      <div className="question-container">
        <h4 style={{ marginBottom: "1.3rem", marginLeft:"2rem",marginTop:"1rem"}}>{quizData[currentQuestion].question}</h4>
        {renderOptions()}
      </div>
    );
  };

  const handleNext = () => {
    if (currentQuestion < quizData.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const handleSubmit = async (e) => {
    // Handle submission logic
    if(FlagLOgProf>=2){
      const dbRef = collection(db, "users");
      const data = {
        Name: localStorage.getItem("UserName"),
        Email: localStorage.getItem("Useremail"),
        Password: localStorage.getItem("Password"),
        Gender: localStorage.getItem("Gender"),
        DOB: localStorage.getItem("DOB"),
        Instagram:localStorage.getItem("Instagram"),
        Abouts:localStorage.getItem("Abouts"),
        question1: answers[0],
        question2: answers[1],
        question3: answers[2],
        question4: answers[3],
        question5: answers[4],
        question6: answers[5],
        question7: answers[6],
        question8: answers[7],
        question9: answers[8],
        question10: answers[9],
        question11: answers[10],
        question12: answers[11],
        question13: answers[12],
        question14: answers[13],
        question15: answers[14]
     };
     localStorage.setItem("Answers", JSON.stringify(answers));
      console.log('Selected Answers:', answers);
      e.preventDefault();
      await addDoc(dbRef, data)
    }
    else{
      alert("Login First!!");
    }
  };

  return (
    <div className="quiz-container">
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
      <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@200&display=swap" rel="stylesheet"></link>
      <h2>Compatibility Test</h2>
      <p className='questionrenderr'>{renderQuestion()}</p>
      {currentQuestion === quizData.length - 1 ? (
        
        <button className="button3" onClick={handleSubmit}>
        <svg className="svgIcon" viewBox="0 0 512 512" height="1em" xmlns="http://www.w3.org/2000/svg">
          <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm50.7-186.9L162.4 380.6c-19.4 7.5-38.5-11.6-31-31l55.5-144.3c3.3-8.5 9.9-15.1 18.4-18.4l144.3-55.5c19.4-7.5 38.5 11.6 31 31L325.1 306.7c-3.2 8.5-9.9 15.1-18.4 18.4zM288 256a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"></path>
        </svg>
        <Link to ="/seeyoutommorrow" style={{textDecorationLine:"none"}}>Find match</Link>
      </button>
      ) : (
        <button className="btn-class-name" onClick={handleNext}>
          <span>Next</span>
          <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 320 512">
            <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"></path>
          </svg>
        </button>
      )}
    </div>
  );
};

// const quizData = [
//     {
//       question: '1: What type of activities do you enjoy on weekends?',
//       options: ['a) Outdoor adventures', 'b) Cultural events and museums', 'c) Relaxing at home', 'd) Trying out new restaurants'],
//     },
//     {
//       question: '2: How important is communication in a relationship?',
//       options: ['a) Extremely important', 'b) Important', 'c) Neutral', 'd) Not very important'],
//     },
//     {
//       question: "3: What's your preferred travel style?",
//       options: ['a) Adventurous backpacking', 'b) Luxury resorts', 'c) City exploration', 'd) Relaxing beach vacations'],
//     },
//     {
//       question: '4: Select your ideal date night:',
//       options: ['a) Dinner and a movie', 'b) Outdoor activities (hiking, biking, etc.)', 'c) Art gallery or museum visit', 'd) Cooking a meal together at home'],
//     },
//     {
//       question: '5: How do you handle conflict in a relationship?',
//       options: ['a) Open communication and discussion', 'b) Taking some time alone to cool off', 'c) Avoiding confrontation', 'd) Seeking advice from friends or family'],
//     },
//     {
//       question: '6: What role does family play in your life?',
//       options: ['a) Very important', 'b) Important, but I also value independence', 'c) Neutral', 'd) Not very important'],
//     },
//     {
//       question: "7: How do you feel about pets?",
//       options: ['a) Love them and have some', 'b) Like them but don\'t have any', 'c) Neutral', 'd) Not a fan'],
//     },
//     {
//       question: "8: What's your attitude towards trying new things?",
//       options: ['a) Always up for new experiences', 'b) Willing to try with some hesitation', 'c) Prefer sticking to what I know', 'd) Not open to trying new things'],
//     },
//     {
//       question: "9: How do you envision your ideal future home?",
//       options: ['a) A bustling city apartment', 'b) A quiet suburban house', 'c) A countryside retreat', 'd) I\'m not sure yet'],
//     },
//     {
//       question: "10: What's your view on personal space in a relationship?",
//       options: ['a) Need my space and independence', 'b) Balanced – I value time together and apart', 'c) Prefer spending most of my time with my partner', 'd) I\'m adaptable, depends on the situation'],
//     },
//     {
//       question: "11: How do you handle vulnerability and emotions within a relationship?",
//       options: ['a) Openly share my feelings', 'b) Share selectively', 'c) Keep emotions private', 'd) Struggle with expressing emotions'],
//     },
//     {
//       question: "12: What role does spirituality or personal belief play in your life and potential partner compatibility?",
//       options: ['a) Very important, it guides my life', 'b) Important, but open-minded', 'c) Neutral', 'd) Not important to me'],
//     },
//     {
//       question: "13: Describe your ideal level of physical affection in a relationship:",
//       options: ['a) Very affectionate, enjoy frequent physical contact', 'b) Moderately affectionate, balance is key', 'c) Reserved, prefer limited physical contact', 'd) I\'m not sure'],
//     },
//     {
//       question: "14: How do you handle stress, and what support do you seek from a partner during challenging times?",
//       options: ['a) Talk openly and seek emotional support', 'b) Prefer time alone to process', 'c) Keep stress to myself', 'd) Seek practical solutions, not emotional support'],
//     },
//     {
//       question: "15: Discuss your long-term goals and aspirations, and how you envision a partner fitting into that picture.",
//       options: ['a) Aligned goals are essential for a relationship', 'b) Open to adapting my goals based on the relationship', 'c) Prefer separate paths with occasional collaboration', 'd) Haven\'t thought much about it'],
//     },
//   ];
const quizData = [
  {
    question: '1: What are your relationship goals for the future?',
    options: ['a) Building a strong partnership leading to marriage', 'b) Exploring different types of relationships', 'c) Focusing on personal growth before committing', 'd) Enjoying the present without long-term plans'],
  },
  {
    question: '2: How would you describe your ideal partner?',
    options: ['a) Someone who shares my values and goals', 'b) Someone who is adventurous and spontaneous', 'c) Someone who is kind and understanding', 'd) Someone who is independent and self-sufficient'],
  },
  {
    question: '3: How important is having fun and humor in a relationship?',
    options: ['a) Extremely important – laughter is essential', 'b) Important, but not a top priority', 'c) Neutral – it depends on the situation', 'd) Not very important – serious conversations matter more'],
  },
  {
    question: '4: How do you handle disagreements and conflicts in a relationship?',
    options: ['a) Open communication and compromise', 'b) Taking space to cool off before discussing', 'c) Avoiding conflict to maintain harmony', 'd) Seeking advice from friends or family'],
  },
  {
    question: '5: How important is empathy and understanding in a relationship?',
    options: ['a) Extremely important – I want to feel understood', 'b) Important, but not a deal-breaker', 'c) Neutral – empathy is nice but not essential', 'd) Not very important – I focus on my own feelings'],
  },
  {
    question: '6: What role does personal growth and self-improvement play in your life?',
    options: ['a) Very important – I strive for continuous growth', 'b) Important, but I also value enjoying the present', 'c) Neutral – I don’t prioritize personal growth', 'd) Not important – I’m happy with who I am'],
  },
  {
    question: '7: How do you balance independence and togetherness in a relationship?',
    options: ['a) Need my space but enjoy spending time together', 'b) Balanced – I value independence and quality time', 'c) Prefer spending most of my time with my partner', 'd) I’m adaptable, depends on the situation'],
  },
  {
    question: '8: How do you handle change and adaptability in relationships?',
    options: ['a) Embrace change and adapt easily', 'b) Willing to adapt with some hesitation', 'c) Prefer stability and resist change', 'd) Not open to major changes in the relationship'],
  },
  {
    question: '9: What qualities do you value most in a partner?',
    options: ['a) Loyalty and honesty', 'b) Intelligence and ambition', 'c) Kindness and compassion', 'd) Sense of humor and spontaneity'],
  },
  {
    question: '10: How do you prioritize communication in a relationship?',
    options: ['a) Communication is key to a healthy relationship', 'b) Important, but actions speak louder than words', 'c) Prefer keeping things to myself', 'd) Not very important – actions matter more than words'],
  },
  {
    question: '11: How do you handle differences in opinion or beliefs with your partner?',
    options: ['a) Respectful discussion and compromise', 'b) Agree to disagree and move on', 'c) Avoid discussing sensitive topics', 'd) Try to change their perspective to align with mine'],
  },
  {
    question: '12: How do you express affection and love in a relationship?',
    options: ['a) Through words and physical touch', 'b) Through thoughtful gestures and acts of service', 'c) Prefer keeping emotions private', 'd) I struggle with expressing affection'],
  },
  {
    question: '13: What role does trust play in a relationship for you?',
    options: ['a) Trust is the foundation of a strong relationship', 'b) Trust must be earned over time', 'c) Neutral – trust isn’t a top priority for me', 'd) Trust is not important in a relationship'],
  },
  {
    question: '14: How do you envision supporting your partner during challenging times?',
    options: ['a) Emotional support and understanding', 'b) Practical solutions and problem-solving', 'c) Giving space to process alone', 'd) Not sure – it depends on the situation'],
  },
  {
    question: '15: What are your expectations for the level of commitment in a relationship?',
    options: ['a) Seeking a long-term committed relationship', 'b) Enjoying the present without commitment', 'c) Open to different types of relationships', 'd) Not sure – exploring options'],
  },
];

  

export default Quiz;
