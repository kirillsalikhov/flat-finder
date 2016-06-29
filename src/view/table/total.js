import React from 'react';

class Total extends React.Component {
    
    render() {
        return <div>{this.props.model.filtered.length}</div>
    }
}

export default Total;