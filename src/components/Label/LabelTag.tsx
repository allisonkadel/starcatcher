import * as React from 'react';

// data
import { Label } from '../../data/label';

// stylesheets
import './Label.css'

type Props = {
    label: Label
}

const LabelTag = ({label}: Props) => {
    return (
      <div key={label.id} className='LabelTag'>
        <h6>{label.name}</h6>
      </div>
    );
};

export default LabelTag;