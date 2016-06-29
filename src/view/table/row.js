import React from 'react';

class Row extends React.Component {

    shouldComponentUpdate() { return false; }

    render () {
        var {
            ID,
            Corpus,
            Floor,
            Section,
            NumOnFloor,
            FlatNumber,
            MetreCost,
            TotalCost
        } = this.props.flat;
        
        return (
            <tr>
                <td>{ID}</td>
                <td>{Corpus}</td>
                <td>{Floor}</td>
                <td>{Section}</td>
                <td>{NumOnFloor}</td>
                <td>{FlatNumber}</td>
                <td>{MetreCost}</td>
                <td>{TotalCost}</td>
            </tr>
        );
    }
}

export default Row;