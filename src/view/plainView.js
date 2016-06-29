import React from 'react';
import Filter from './filter/filter';
import Total from './table/total';
import List from './table/list';

import DevTools from 'mobx-react-devtools';

class PlainView extends React.Component {

    boundUpdate = () => this.forceUpdate();

    componentDidMount() {
        this.props.model.addListener('change',this.boundUpdate);
    }

    componentWillUnmount() {
        this.props.model.removeListener('change',this.boundUpdate);
    }

    render() {
        var {model} = this.props;

        return (
            <div>
                <DevTools/>
                <Filter model = {model} />
                <Total model = {model} />
                <List model = {model} />
            </div>
        )
    }
}

export default PlainView;