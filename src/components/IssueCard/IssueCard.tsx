import * as React from 'react';

// data
import { Issue } from '../../data/issue';

// stylesheets
import './IssueCard.css'

// components
import LabelTag from '../Label/LabelTag'

type Props = {
    issue: Issue
}

const IssueCard = ({issue}: Props) => {
    return (
      <div key={issue.id} className='IssueCard'>
        <h5>{issue.title}</h5>
        <h4>{issue.state}</h4>
        <div>{issue.labels.map(label => <LabelTag label={label}/>)}</div>
      </div>
    );
};

export default IssueCard;