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

function NumberSquare(props) {
    return (
        <button className="number-square" onClick={props.onClick}>
            {props.value}
        </button>
    );
}

class Numbers extends React.Component {
    renderNumberSquare(i) {
        return (
            <NumberSquare
                value={i + 1}
                onClick={() => this.props.onClick(i)}
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
