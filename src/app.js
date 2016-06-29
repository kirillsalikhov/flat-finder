import $ from 'jquery';
import React from 'react';
import ReactDOM from 'react-dom';

import MobxModel from './model/MobxModel';
import MobxView from './view/mobxView';

import PlainModel from './model/PlainModel';
import PlainView from './view/plainView';

var flats = require("json!./data/crm_all.json");

$(function() {

    var plainFn1Model = new PlainModel('filterFn1', 'plain-fn1', flats);
    var plainFn2Model = new PlainModel('filterFn2', 'plain-fn2', flats);

    var mobxFn1Model = new MobxModel('filterFn1', 'mobx-fn1', flats);
    var mobxFn2Model = new MobxModel('filterFn2', 'mobx-fn2', flats);


    ReactDOM.render(<PlainView model = {plainFn1Model} />, $('#plain-fn1')[0]);
    ReactDOM.render(<PlainView model = {plainFn2Model} />, $('#plain-fn2')[0]);

    ReactDOM.render(<MobxView model = {mobxFn1Model} />, $('#mobx-fn1')[0]);
    ReactDOM.render(<MobxView model = {mobxFn2Model} />, $('#mobx-fn2')[0]);
});