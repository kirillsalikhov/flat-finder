import React from 'react';

class FilterBlock extends React.Component {

    onChange = (event) => {
        var {model, name} = this.props;
        console.time(model.timerKey);
        model.setFilter(name, event.target.value);
        
    };

    render() {
        var {model, name} = this.props;
        return (
            <div className="filter-block">
                <div>{name}</div>
                <input onChange={this.onChange}/>
            </div>
        );
    }
}

export default FilterBlock;