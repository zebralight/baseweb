/*
Copyright (c) 2018-2020 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
// @flow

import React, {useState} from 'react';
import {Radio, RadioGroup} from '../../radio/index.js';
import {StatefulSelect} from '../index.js';

export default function SelectInRadio() {
  const [selectedRadio, setSelectedRadio] = useState();
  return (
    <RadioGroup
      value={selectedRadio}
      onChange={e => {
        setSelectedRadio(e.target.value);
      }}
    >
      <Radio value="default">Default</Radio>
      <Radio value="hasBackgroundColor">
        <div style={{display: 'flex'}}>
          Has background color:
          <StatefulSelect
            clearable={false}
            searchable={false}
            openOnClick={true}
            labelKey="id"
            valueKey="color"
            onChange={event => console.log(event)}
            options={[
              {id: 'AliceBlue', color: '#F0F8FF'},
              {id: 'AntiqueWhite', color: '#FAEBD7'},
              {id: 'Aqua', color: '#00FFFF'},
              {id: 'Aquamarine', color: '#7FFFD4'},
              {id: 'Azure', color: '#F0FFFF'},
              {id: 'Beige', color: '#F5F5DC'},
            ]}
          />
        </div>
      </Radio>
    </RadioGroup>
  );
}
