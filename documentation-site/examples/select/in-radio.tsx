import * as React from 'react';
import {StatefulSelect} from 'baseui/select';
import {Radio} from 'baseui/radio';

export default () => {
  return (
    <Radio>
      <div style={{display: 'flex'}}>
        Has background colorr:
        <StatefulSelect
          onOpen={() => console.log('opening...')}
          clearable={false}
          searchable={false}
          openOnClick={true}
          startOpen={true}
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
  );
};
