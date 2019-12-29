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

class InnerSquare extends React.Component {
    renderSquare(i) {
        return (
            <Square />
        );
    }

    render() {
        return (
            <div className="board-row">
                {this.renderSquare(0)}
                {this.renderSquare(1)}
                {this.renderSquare(2)}
            </div>
        );
    }

}

class OuterSquare extends React.Component {
    renderInnerSquare(i) {
        return (
            <InnerSquare />
        );
    }

    render() {
        return (
            <div className="outer-square">
                {this.renderInnerSquare(0)}
                {this.renderInnerSquare(1)}
                {this.renderInnerSquare(2)}
            </div>
        );
    }

}

class Row extends React.Component {
    renderOuterSquare(i) {
        return (
            <OuterSquare />
        );
    }

    render() {
        const status = 'Sudoku';
        return (
            <div>
                <div>
                    {this.renderOuterSquare(0)}
                    {this.renderOuterSquare(1)}
                    {this.renderOuterSquare(2)}
                </div>
            </div>
        );
    }
}

class Board extends React.Component {
    renderRow(i) {
        return (
            <Row />
        );
    }

    render() {
        const status = 'Sudoku';
        return (
            <div>
                <div className="status">{status}</div>
                <div>
                    {this.renderRow(0)}
                </div>
                <div>
                    {this.renderRow(1)}
                </div>
                <div>
                    {this.renderRow(2)}
                </div>
            </div>
        );
    }
}

class Game extends React.Component {
    render() {
        return (
            <div className="game">
                <div className="game-board">
                    <Board />
                </div>
                <div className="game-info">
                    <div>{/* status */}</div>
                    <div>{/* backButton */}</div>
                </div>
            </div>
        );
    }    
}

ReactDOM.render(<Game />, document.getElementById('root'));
