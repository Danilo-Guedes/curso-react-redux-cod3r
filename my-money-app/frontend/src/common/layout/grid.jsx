import React, { Component } from 'react';

export default class Grid extends Component {

    toCssClasses(numbers){
        const cols = numbers? numbers.split(' '): [];
        const classes = [];

        if(numbers[0]) classes+=`col-xs-${numbers[0]}`
        if(numbers[1]) classes+=` col-sm-${numbers[1]}`
        if(numbers[2]) classes+=` col-md-${numbers[2]}`
        if(numbers[3]) classes+=` col-lg-${numbers[3]}`
        return classes;
    }

    render () {
        const gridClasses = this.toCssClasses(this.props.cols) || '12';
        return (
            <div className={gridClasses}>
                {this.props.children}
            </div>
        )
    }
}