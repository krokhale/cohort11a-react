import React, {useState, useEffect} from 'react';


function Quiz(props) {

    const [questions, setQuestions] = useState([
        {
            questionText: 'What is 8x1?',
            answers: [5,6,7,8],
            correctAnswerIndex: 3
        },
        {
            questionText: 'What is 8x2?',
            answers: [5,6,16,8],
            correctAnswerIndex: 2
        },
        {
            questionText: 'What is 8x3?',
            answers: [24,6,16,8],
            correctAnswerIndex: 0
        }
    ]);

    const [correct, setCorrect] = useState(0);
    const [incorrect, setIncorrect] = useState(0);

    const [started, setStarted] = useState(false);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);


    const submitAnswer = (answer, idx) => {
        let currentQuestionCorrectAnswerIndex = questions[currentQuestionIndex].correctAnswerIndex;
        if(currentQuestionCorrectAnswerIndex == idx){
            let newScore = correct + 1;
            setCorrect(newScore);
        } else {
            let newScore = incorrect + 1;
            setIncorrect(newScore);
        }

        setCurrentQuestionIndex(currentQuestionIndex+1);

    };


    return (
        <div className={'text-gray-600'}>
            <b>Correct</b>: {correct}
            &nbsp;&nbsp;
            <b>Incorrect</b>: {incorrect}

            <br/>
            <br/>
            <br/>

            {started && <p>
                <h1 className={'text-5xl font-bold text-gray-700'}>{questions[currentQuestionIndex].questionText}</h1>

                {/*{questions[currentQuestionIndex].answers.map((answer, idx) {*/}
                {/*    return <span>{answer}</span>*/}
                {/*})}*/}

                {questions[currentQuestionIndex].answers.map((answer, idx) => {
                    return <span className={'block p-5 border m-5 cursor-pointer'} onClick={() => {
                        submitAnswer(answer, idx)
                    }}>{answer}</span>
                })}


            </p>}


            {!started && <span className={'p-5 bg-blue-500 text-white rounded cursor-pointer'} onClick={() => {
                setStarted(true);
            }}>Start Quiz</span>}

            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>

            {/*<br className={'text-gray-600'}/>*/}
        </div>
    );
}

export default Quiz;
