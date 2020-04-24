import React from 'react';


function Scores(props) {
    const [correctlyClicked, howManyNodes, wronglyClicked, totalWins, totalDefeats, isWinning, isLosing, displayTime] = props.scores;

    const displayScores = (win, lose) => {
        if (win) {
            return (
                <div>
                    <p className={`${win ? "bouncing" : ""}`}>success!</p>
                    <p> start again.</p>
                </div>
            );
        } else if (lose) {
            return (
                <div>
                    <p>defeat!</p>
                    <p> start again.</p>
                </div>
            );
        }
    };

    return (
        <div>
            <p>{`${displayTime/1000} sec of display time. `}</p>
            <p>{`${howManyNodes - correctlyClicked} nodes remain to win. `}</p>
            <p>{`${correctlyClicked} nodes exposed. `} </p>
            <p>{`${wronglyClicked}  missed shots. `} </p>
            <p>{`${3 - wronglyClicked} shots left. `}</p>
            <p className="total">{`total wins ${totalWins} : ${totalDefeats} total defeats `}</p>
            {displayScores(isWinning, isLosing)}
        </div>
    );
}

export default Scores;