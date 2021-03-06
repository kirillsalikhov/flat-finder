import _ from 'lodash';
import EventEmitter from 'events';

var startsWith = (filter, name) => (flat) => {
    if (!filter[name]) return true;

    return _.startsWith(flat[name] + '', filter[name]);
};

class PlainModel extends EventEmitter{

    constructor(filterName, timerKey, flats) {
        super();
        this.filterName = filterName;
        this.timerKey = timerKey;
        this.flats = flats;
    }

    flats = [];
    
    filter = {
        Corpus: '',
        Floor: '',
        Section: ''
    };

    filterFns = {
        'Corpus': startsWith(this.filter,'Corpus'),
        'Floor': startsWith(this.filter, 'Floor'),
        'Section': startsWith(this.filter, 'Section')
    };

    filterFn1 = (flat) => {
        return _.reduce(this.filterFns, function(result, fn) {
            return result && fn(flat);
        }, true);
    };

    filterFn2 = (flat) => {
        var filter = this.filter;
        var val = true;
        if (filter['Corpus']) {
            val = val && _.startsWith(flat['Corpus'] + '', filter['Corpus'])
        }

        if (filter['Floor']) {
            val = val && _.startsWith(flat['Floor'] + '', filter['Floor'])
        }

        if (filter['Section']) {
            val = val && _.startsWith(flat['Section'] + '', filter['Section'])
        }
        return val;
    };

    get filtered() {
        var filterFn = this[this.filterName];
        return this.flats.filter(filterFn);
    }

    setFilter(name, value) {
        this.filter[name] = value;
        this.emit('change');
    }
}

export default PlainModel;