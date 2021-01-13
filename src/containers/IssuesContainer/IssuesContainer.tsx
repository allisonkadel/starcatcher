import * as React from 'react';

// components

// data
import { Issue } from '../../data/issue';

type State = {
    issues: Issue[] | []
};

class IssuesContainer extends React.Component {
    
    state: State = {
        issues: []
    };



};

export default IssuesContainer;