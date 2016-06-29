import React from 'react';

class Header extends React.Component {

    shouldComponentUpdate(nextProps, nextState) { return false; }

    render () {
        return (
            <tr>
                <td>ID</td>
                <td>Corpus</td>
                <td>Floor</td>
                <td>Section</td>
                <td>NumOnFloor</td>
                <td>FlatNumber</td>
                <td>MetreCost</td>
                <td>TotalCost</td>
            </tr>
        )
    }
}

export default Header;