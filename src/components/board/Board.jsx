import React from 'react';
import './Board.css'

const Board = () => {
    const boxes = new Array(7 * 6).fill("white");
    return (
        <div className="container">
            {boxes.map((box, index) => <Box box={box} index={index}/>)}
        </div>
    );
};

const Box = (props) => {
    return (
        <div style={{ backgroundColor: props.box }} 
                    className="box"
                    key={props.index}></div>
    );
}

export default Board;