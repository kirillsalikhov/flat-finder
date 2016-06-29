import React from 'react';
import _ from 'lodash';

import FilterBlock from './filterBlock';

class Filter extends React.Component {
    
    render() {
        var model = this.props.model;

        return (
            <div>
                {this.rFilterBlocks()}
            </div>
        )
    }

    rFilterBlocks() {
        const model =  this.props.model;
        var res = _(model.filterFns)
            .keys()
            .map(name => <FilterBlock name={name} model={model} key={name}/>)
            .value();
        return res;
    }
}

export default Filter;