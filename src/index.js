import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Square(props) {
    return (
        <button className="square" onClick={props.onClick}>
            {props.value}
        </button>
    );
}

class OuterSquare extends React.Component {
    renderSquare(i) {
        return (
            <Square />
        );
    }

    render() {
        return (
            <div className="outer-square">
                <div className="board-row">
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>
                <div className="board-row">
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </div>
                <div className="board-row">
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </div>
            </div>
        );
    }

}

class Board extends React.Component {
    renderOuterSquare(i) {
        return (
            <OuterSquare />
        );
    }

    render() {
        const status = 'Sudoku';
        return (
            <div className="board">
                <div className="status">{status}</div>
                <div>
                    {this.renderOuterSquare(0)}
                    {this.renderOuterSquare(1)}
                    {this.renderOuterSquare(2)}
                </div>
                <div>
                    {this.renderOuterSquare(3)}
                    {this.renderOuterSquare(4)}
                    {this.renderOuterSquare(5)}
                </div>
                <div>
                    {this.renderOuterSquare(6)}
                    {this.renderOuterSquare(7)}
                    {this.renderOuterSquare(8)}
                </div>
            </div>
        );
    }
}

function NumberSquare(props) {
    return (
        <button className="number-square" onClick={props.onClick}>
            {props.value}
        </button>
    );
}

class Numbers extends React.Component {
    renderNumberSquare(n) {
        return (
            <NumberSquare
                value={n + 1}
            />
        );
    }
    render() {
        return (
            <div>
                {this.renderNumberSquare(0)}
                {this.renderNumberSquare(1)}
                {this.renderNumberSquare(2)}
                {this.renderNumberSquare(3)}
                {this.renderNumberSquare(4)}
                {this.renderNumberSquare(5)}
                {this.renderNumberSquare(6)}
                {this.renderNumberSquare(7)}
                {this.renderNumberSquare(8)}
            </div>
        )
    }
}

class Game extends React.Component {
    render() {
        return (
            <div>
                <div className="game">
                    <div className="game-board">
                        <Board />
                    </div>
                    <div className="game-info">
                        <div>{/* status */}</div>
                        <div>{/* backButton */}</div>
                    </div>
                </div>
                <div>
                    <Numbers />
                </div>
            </div>
        );
    }    
}

ReactDOM.render(<Game />, document.getElementById('root'));
