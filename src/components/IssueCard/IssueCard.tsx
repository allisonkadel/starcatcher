import * as React from 'react';

// data
import { Issue } from '../../data/issue';

type Props = {
    issue: Issue
}

const IssueCard = ({issue}: Props) => {
    return (
      <div>
        <h3>{issue.title}</h3>
        <ul>{issue.labels.map(label => <li>{label.name}</li>)}</ul>
        <p>{issue.state}</p>
      </div>
    );
};

export default IssueCard;