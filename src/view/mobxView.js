import React from 'react';
import Filter from './filter/filter';
import Total from './mobx/mobxTotal';
import List from './mobx/mobxList';

import DevTools from 'mobx-react-devtools';

class MobxView extends React.Component {

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

export default MobxView;