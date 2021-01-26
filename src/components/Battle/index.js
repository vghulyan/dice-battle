import React, { useState } from 'react';

import './battle.css';
import StyledButton from "../StyledButton";

const Battle = (props) => {

    const [myDice1, setMyDice1] = useState(1);
    const [myDice2, setMyDice2] = useState(1);

    const [hisDice1, setHisDice1] = useState(1);
    const [hisDice2, setHisDice2] = useState(1);


    const [playerPoints, setPlayerPoints] = useState(2);
    const [enemyPoints, setEnemyPoints] = useState(2);


    const [playerProgress, setPlayerProgress] = useState(100);
    const [monsterProgress, setMonsterProgress] = useState(100);
    const [giffy, setGiffy] = useState();

    const winner = (player, enemy) => {
        if (player < enemy) {
            return "LOOSER";
        }
        if (enemy < player) {
            return "WINNER"
        }
        if (player == enemy) {
            return "EQUAL"
        }
    }

    const calculateDamage = (rand1, rand2, rand3, rand4) => {
        if((rand1 + rand2) < (rand3 + rand4)) {
            const newProgress = playerProgress;
            setPlayerProgress(newProgress - ((rand3 + rand4) - (rand1 + rand2)));
        }
        else if((rand3 + rand4) < (rand1 + rand2)) {
            const newProgress = monsterProgress;
            setMonsterProgress(newProgress - ((rand1 + rand2) - (rand3 + rand4)));
        }
    }
    const who_won = (rand1,rand2,rand3,rand4) => {
        let player_points = rand1 + rand2;
        let enemy_points = rand3 + rand4;

        setPlayerPoints(player_points);
        setEnemyPoints(enemy_points);

        const giffyObj = winner(player_points,enemy_points);
        setGiffy(giffyObj)

        calculateDamage(rand1, rand2, rand3, rand4);
    }
    const throwDice = () => {
        const rand1 = Math.round(Math.random() * 6) + 1;
        const rand2 = Math.round(Math.random() * 6) + 1;
        const rand3 = Math.round(Math.random() * 6) + 1;
        const rand4 = Math.round(Math.random() * 6) + 1;

        setMyDice1(rand1);
        setMyDice2(rand2);

        setHisDice1(rand3);
        setHisDice2(rand4);

        who_won(rand1,rand2,rand3,rand4);
    }

    return (
        <div className="row">
            <div className="col-4">
                <h3>Your Dice</h3>
                <h1>PROGRESS [{playerProgress}]</h1>
                <h4>{myDice1}</h4>
                <h4>{myDice2}</h4>
                <h1>{playerPoints}</h1>
            </div>
            <div className="col-4">
                <h3>Enemy's Dice</h3>
                <h1>PROGRESS [{monsterProgress}]</h1>
                <h4>{hisDice1}</h4>
                <h4>{hisDice2}</h4>
                <h1>{enemyPoints}</h1>
            </div>
            <div className="col-4">
                <h1>{giffy}</h1>
                <StyledButton handleAttack={throwDice} text='ATTACK' />
            </div>
        </div>
    )
};

export default Battle;
