import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';

function IncorrectAnswer({set_curPageNum}){
  function proceedButtonClicked(){
    set_curPageNum(0);
  }

  return(
    <div className="QuestionBox">
      <div className="QuestionHeader">
        Incorrect Answer!
      </div>
      <div className="Question">
        <br></br>
        That answer was incorrect. You now must start this roleplay over.
        <br></br>
        <br></br>
      </div>
      <div className="AnswerSection">
        <button onClick={proceedButtonClicked}>Go Back to Beginning</button>
      </div>
    </div>
  );
}

function Introduction({set_curPageNum}){
  function proceedButtonClicked(){
    set_curPageNum(0.1);
  }

  return(
    <div className="QuestionBox">
      <div className="QuestionHeader">
        <br></br>
        Introduction to the SPIN Roleplay
        <br></br>
        <br></br>
      </div>
      <br></br>
      <div className="Question">
        You are a loan officer at a bank called Peterson Bank.
        <br></br>
        <br></br>
        A microchip company called Gravity Corporation wants to build an office in Boise. The CEO is a businesswoman named Marlene Moore. She is born in Mexico and moved to Washington with her parents when she was 8. She got her business degree at University of Washington and worked at Micron Technology in Boise. She met her husband at Micron Technologies, who is a computer engineer named Lee Moore. Lee and Marlene decided to start a new microchip company that manufactures what they believe to be some of the best microchips in the market. Gravity Corporation has been growing and is trying to expand.
        <br></br>
        <br></br>
        You were successfully able to schedule a meeting with Marlene to discuss granting a loan in order for the office to be built.
        <br></br>
        <br></br>
        Use the SPIN technique to identify Marlene's needs.
        <br></br>
        <br></br>
      </div>
      <div className="AnswerSection">
        <button onClick={proceedButtonClicked}>Proceed</button>
      </div>
    </div>
  )
}

function EnterInformation({set_curPageNum, set_studentName, set_cougarNetID}) {
  function proceedButtonClicked(){
    set_curPageNum(1);
  }

  return (
    <div className="QuestionBox">
      <div className="QuestionHeader">
        Enter your information
      </div>
      <div className="Question">
        <br></br>
        Enter your information
        <br></br>
        <br></br>

        <form>
          <label>Full Name: </label><input type="text" id="nameOfStudent" onChange={(e) => set_studentName(e.target.value)} />
          <br></br>
          <label>CougarNet ID: </label><input type="text" id="cougarnetID" onChange={(e) => set_cougarNetID(e.target.value)} />
          <br></br>
          <br></br>
        </form>
        <br></br>
      </div>
      <div className="AnswerSection">
        <button onClick={proceedButtonClicked}>Proceed To The Conversation</button>
      </div>
    </div>
  );
}

function Q1({set_curPageNum}) {
  function clickedCorrectOption(){
    set_curPageNum(2);
  }

  function clickedWrongOption(){
    console.log("Clicked Wrong Option");
    set_curPageNum(-1);
  }

  return (
    <div className="QuestionBox">
      <div className="QuestionHeader">
        <br></br>
        *Call starts*
        <br></br>
        *You introduce yourself*
        <br></br>
        *You confirm to make sure you're talking to the right person*
        <br></br>
        <br></br>
      </div>
      <div className="Question">
        <br></br>
        What do you say next?
        <br></br>
        <br></br>
      </div>
      <div className="AnswerSection">
        <button onClick={clickedWrongOption}>I heard you needed a loan of 5 million dollars. We can offer that.</button>
        <button onClick={clickedWrongOption}>So what does Gravity Technology do?</button>
        <button onClick={clickedCorrectOption}>The purpose of this call is a discovery call. Is there anything else you would like to add?</button>
        <button onClick={clickedWrongOption}>What are some things you need?</button>
      </div>
    </div>
  );
}

function Q2({set_curPageNum}){
  function clickedCorrectOption(){
    set_curPageNum(3);
  }

  function clickedWrongOption(){
    console.log("Clicked Wrong Option");
    set_curPageNum(-1);
  }

  return (
    <div className="QuestionBox">
      <div className="QuestionHeader">
        <br></br>
        Marlene: I do not have anything else to add
        <br></br>
        <br></br>
      </div>
      <div className="Question">
        <br></br>
        What do you say next?
        <br></br>
        <br></br>
      </div>
      <div className="AnswerSection">      
        <button onClick={clickedWrongOption}>How has your day been?</button>
        <button onClick={clickedWrongOption}>What are the current issues you are facing with building this new office?</button>
        <button onClick={clickedWrongOption}>What are the current needs for your business?</button>
        <button onClick={clickedCorrectOption}>What does the your ideal office building and how close are you to getting that built and financed?</button>
      </div>
    </div>
  );
}

function Q3({set_curPageNum}){
  function clickedCorrectOption(){
    set_curPageNum(4);
  }

  function clickedWrongOption(){
    console.log("Clicked Wrong Option");
    set_curPageNum(-1);
  }

  return (
    <div className="QuestionBox">
      <div className="QuestionHeader">
        <br></br>
        Marlene: An ideal office space would be a 10-story office space that can fit 2,000 employees. There would need to be proper heating in order to keep our employees warm during the winters.
        <br></br>
        <br></br>
      </div>
      <div className="Question">
        <br></br>
        What do you say next?
        <br></br>
        <br></br>
      </div>
      <div className="AnswerSection">      
        <button onClick={clickedWrongOption}>How much money would this office space cost?</button>
        <button onClick={clickedCorrectOption}>What are some of the issues that you face when it comes to building this office space?</button>
        <button onClick={clickedWrongOption}>What would happen if you do not have this office space?</button>
        <button onClick={clickedWrongOption}>Why do you need it to be 10-stories?</button>
      </div>
    </div>
  );
}

function Q4({set_curPageNum}){
  function clickedCorrectOption(){
    set_curPageNum(5);
  }

  function clickedWrongOption(){
    set_curPageNum(-1);
  }

  return (
    <div className="QuestionBox">
      <div className="QuestionHeader">
        <br></br>
        Marlene: We currently lack reliable business partners that provide loans with low enough interest rates. The last banks charged interest rates that were too high for us to use.
        <br></br>
        <br></br>
      </div>
      <div className="Question">
        <br></br>
        What do you say next?
        <br></br>
        <br></br>
      </div>
      <div className="AnswerSection">      
        <button onClick={clickedWrongOption}>I can provide you with a loan with low interest rates. We are willing to go as low as 3%</button>
        <button onClick={clickedWrongOption}>We can find a solution for you if that's the issue you are having. Are you willing to have another meeting tomorrow at 5pm?</button>
        <button onClick={clickedWrongOption}>What are ways that we can solve this issue?</button>
        <button onClick={clickedCorrectOption}>What would happen if you are unable to successfully build the office?</button>
      </div>
    </div>
  );
}

function Q5({set_curPageNum}){
  function clickedCorrectOption(){
    set_curPageNum(6);
  }

  function clickedWrongOption(){
    set_curPageNum(-1);
  }

  return (
    <div className="QuestionBox">
      <div className="QuestionHeader">
        <br></br>
        Marlene: Our company will miss out on opportunities, meaning that we cannot expand and potentially go bankrupt.
        <br></br>
        <br></br>
      </div>
      <div className="Question">
        <br></br>
        What do you say next?
        <br></br>
        <br></br>
      </div>
      <div className="AnswerSection">      
        <button onClick={clickedWrongOption}>Do you have evidence to back up your claim?</button>
        <button onClick={clickedWrongOption}>I'm sorry but I cannot trust this company for this loan, considering that your company is close to bankruptcy.</button>
        <button onClick={clickedWrongOption}>That's unfortunate!</button>
        <button onClick={clickedCorrectOption}>This office building must be very important.</button>
      </div>
    </div>
  );
}

function Q6({set_curPageNum}){
  function clickedCorrectOption(){
    set_curPageNum(7);
  }

  function clickedWrongOption(){
    set_curPageNum(-1);
  }

  return (
    <div className="QuestionBox">
      <div className="QuestionHeader">
        <br></br>
        Marlene: Yes it is
        <br></br>
        <br></br>
      </div>
      <div className="Question">
        <br></br>
        What do you say next?
        <br></br>
        <br></br>
      </div>
      <div className="AnswerSection">      
        <button onClick={clickedWrongOption}>I bet it is.</button>
        <button onClick={clickedWrongOption}>Well, I am able to offer you a loan of $3 million.</button>
        <button onClick={clickedCorrectOption}>What will you need in order for the building of this new office building to be successful?</button>
        <button onClick={clickedWrongOption}>*Recap what we went over and hang up*</button>
      </div>
    </div>
  );
}

function Q7({set_curPageNum}){
  function clickedCorrectOption(){
    set_curPageNum(8);
  }

  function clickedWrongOption(){
    set_curPageNum(-1);
  }

  return (
    <div className="QuestionBox">
      <div className="QuestionHeader">
        <br></br>
        Marlene: I will need a loan of $3 million.
        <br></br>
        <br></br>
      </div>
      <div className="Question">
        <br></br>
        What do you say next?
        <br></br>
        <br></br>
      </div>
      <div className="AnswerSection">      
        <button onClick={clickedWrongOption}>We can give you a $3 million loan. What interest rate would work for you.</button>
        <button onClick={clickedCorrectOption}>We can think of a solution that could meet your needs. Could we have another meeting?</button>
        <button onClick={clickedWrongOption}>Well, we can give this $3 million loan with a 3% interest rate.</button>
        <button onClick={clickedWrongOption}>*Recap what we went over and end the call*</button>
      </div>
    </div>
  );
}

function Q8({set_curPageNum}){
  function clickedCorrectOption(){
    set_curPageNum(9);
  }

  function clickedWrongOption(){
    set_curPageNum(-1);
  }

  return (
    <div className="QuestionBox">
      <div className="QuestionHeader">
        <br></br>
        Marlene: Of course!
        <br></br>
        <br></br>
      </div>
      <div className="Question">
        <br></br>
        What do you say next?
        <br></br>
        <br></br>
      </div>
      <div className="AnswerSection">      
        <button onClick={clickedWrongOption}>I think we can offer a loan of $3 million.</button>
        <button onClick={clickedWrongOption}>Would you like to have a meeting on Thursday?</button>
        <button onClick={clickedCorrectOption}>*Recap what we just did*</button>
        <button onClick={clickedWrongOption}>*Recap what we just did and hang up*</button>
      </div>
    </div>
  );
}

function Q9({set_curPageNum}){
  function clickedCorrectOption(){
    set_curPageNum(10);
  }

  function clickedWrongOption(){
    set_curPageNum(-1);
  }

  return (
    <div className="QuestionBox">
      <div className="QuestionHeader">
        <br></br>
        You: For our next meetting...
        <br></br>
        <br></br>
      </div>
      <div className="Question">
        <br></br>
        What do you say next?
        <br></br>
        <br></br>
      </div>
      <div className="AnswerSection">      
        <button onClick={clickedWrongOption}>Does tomorrow work?</button>
        <button onClick={clickedWrongOption}>Does 2pm on Saturday work?</button>
        <button onClick={clickedCorrectOption}>Does 3pm on Wednesday work?</button>
        <button onClick={clickedWrongOption}>Does 10pm on Thursday work?</button>
      </div>
    </div>
  );
}

function Q10({set_curPageNum}){
  function clickedCorrectOption(){
    set_curPageNum(11);
  }

  function clickedWrongOption(){
    set_curPageNum(-1);
  }

  return (
    <div className="QuestionBox">
      <div className="QuestionHeader">
        <br></br>
        Marlene: I will not be able to do Wednesday.
        <br></br>
        <br></br>
      </div>
      <div className="Question">
        <br></br>
        What do you say next?
        <br></br>
        <br></br>
      </div>
      <div className="AnswerSection">      
        <button onClick={clickedCorrectOption}>How about 2pm on Thursday?</button>
        <button onClick={clickedWrongOption}>Does 2pm on Saturday work?</button>
        <button onClick={clickedWrongOption}>I'll talk to my supervisors and find a good day to do.</button>
        <button onClick={clickedWrongOption}>That's really the only day I can do.</button>
      </div>
    </div>
  );
}

function ProceedToCertificate({set_curPageNum}){
  function ClickedOnProceedButton(){
    set_curPageNum(12);
  }

  return (
    <div className="QuestionBox">
      <div className="QuestionHeader">
        <br></br>
        Marlene: Well, thank you for the meeting!
        You: You too! Have a great day!
        Marlene: Have a great day
        *Call ends*
        <br></br>
        <br></br>
      </div>
      <div className="Question">
        <br></br>
        Congratulations! You completed the roleplay!
        <br></br>
        <br></br>
      </div>
      <div className="AnswerSection">      
        <button onClick={ClickedOnProceedButton}>Proceed to the Certificate!</button>
      </div>
    </div>
  );
}

function Certificate({studentName, cougarnetID}){
  return(
    <div className="QuestionBox">
      <div className="QuestionHeader">
        Certificate fo Completion
      </div>
      <div className="Question">
        <br></br>
        I COMPLETED THE SPIN ROLEPLAY!!!
        <br></br>
        <br></br>
        Name: {studentName}
        <br></br>
        CougarNet ID: {cougarnetID}
        <br></br>
        <br></br>
      </div>
    </div>
  );
}
  
/*On Q8
Q3: You can see above 
  Response: We currently lack reliable business partners that provide loans with low enough interest rates. The last banks charged interest rates that were too high for us to use.
Q4 Answer: What would happen if you are unable to successfully build the office?
  Wrong Answer Choices:
    What are ways that we can solve this issue?
    I can provide you with a loan with low interest rates. We are willing to go as low as 3%
    We can find a solution for you if that's the issue you are having. Are you willing to have another meeting tomorrow at 5pm?
  Response: Our company will miss out on opportunities, meaning that we cannot expand and potentially go bankrupt.
Q5 Answer: This office building must be very important
  Wrong Answer Choices:
    Do you have evidence to back up your claim?
    I'm sorry but I cannot trust this company for this loan.
    That's unfortunate!
  Response: Yes it is
Q6: What will you need in order for the building of this new office building to be successful?
  Wrong Answers:
    I bet it is
    Well, I am able to offer you a loan of $3 million.
    *Recap what we went over and hang up*
  Response: I will need a loan of $3 million.
Q7: We have some solutions that could meet your needs. Could we have another meeting?
  Wrong Answers:
    We can give you a $3 million loan. What interest rate would work for you.
    Well, we can give this $3 million loan with a 3% interest rate.
    *Recap what we did and end the call*
  Response: Of course!
Q8: *Recap what we just did*
  Wrong Answers:
    I think we can offer a loan of $3 million.
    Would you like to have a meeting on Thursday?
    *Recap what we just did and hang up*
Q9: Does 3pm on Wednesday work?
  Wrong Answers:
    Does tomorrow work?
    Does 2pm on Saturday work?
    Does 10pm on Thursday work?
  Response: I will not be able to do Wednesday
Q10: How about 2pm on Thursday?
  Wrong Answers:
    How about 2pm on Saturday?
    I'll talk to my supervisors and find a good day to do.
    That's really the only day I can do.
  Response: That works
*/

function Main(){
  const [curPageNum, set_curPageNum] = useState(0);
  const [studentName, set_studentName] = useState("");
  const [cougarnetID, set_cougarNetID] = useState(0);
  
  return(
    <body>
      {curPageNum == -1 && <IncorrectAnswer set_curPageNum={set_curPageNum} />}
      {curPageNum == 0 && <Introduction set_curPageNum={set_curPageNum} />}
      {curPageNum == 0.1 && <EnterInformation set_curPageNum={set_curPageNum} set_studentName={set_studentName} set_cougarNetID={set_cougarNetID} />}
      {curPageNum == 1 && <Q1 set_curPageNum={set_curPageNum}/>}
      {curPageNum == 2 && <Q2 set_curPageNum={set_curPageNum}/>}
      {curPageNum == 3 && <Q3 set_curPageNum={set_curPageNum}/>}
      {curPageNum == 4 && <Q4 set_curPageNum={set_curPageNum}/>}
      {curPageNum == 5 && <Q5 set_curPageNum={set_curPageNum}/>}
      {curPageNum == 6 && <Q6 set_curPageNum={set_curPageNum}/>}
      {curPageNum == 7 && <Q7 set_curPageNum={set_curPageNum}/>}
      {curPageNum == 8 && <Q8 set_curPageNum={set_curPageNum}/>}
      {curPageNum == 9 && <Q9 set_curPageNum={set_curPageNum}/>}
      {curPageNum == 10 && <Q10 set_curPageNum={set_curPageNum}/>}
      {curPageNum == 11 && <ProceedToCertificate set_curPageNum={set_curPageNum}/>}
      {curPageNum == 12 && <Certificate studentName={studentName} cougarnetID={cougarnetID}/>}
    </body>
  );
}

export default Main;