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

class Row extends React.Component {
    renderSquare(i) {
        return (
            <Square
                // value={this.props.squares[i]}
                // onClick={() => this.props.onClick(i)}
            />
        );
    }

    render() {
        return (
            <div className="board-row">
                {this.renderSquare(0)}
                {this.renderSquare(1)}
                {this.renderSquare(2)}
                {this.renderSquare(3)}
                {this.renderSquare(4)}
                {this.renderSquare(5)}
                {this.renderSquare(6)}
                {this.renderSquare(7)}
                {this.renderSquare(8)}
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
                    {this.renderRow(1)}
                    {this.renderRow(2)}
                    {this.renderRow(3)}
                    {this.renderRow(4)}
                    {this.renderRow(5)}
                    {this.renderRow(6)}
                    {this.renderRow(7)}
                    {this.renderRow(8)}
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
