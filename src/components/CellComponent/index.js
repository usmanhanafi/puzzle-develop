import React, { Component } from 'react'

export default class CellComponent extends Component {
    render() {
        const cls = this.props.value === 0 ? 'square zero' : 'square';
        return (
            <span className={cls} onClick={() => this.props.clickHandler()}>{this.props.value}</span>
        )
    }
}
