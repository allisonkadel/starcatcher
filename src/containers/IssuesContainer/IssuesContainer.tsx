import * as React from 'react';

// components
import IssueCard from '../../components/IssueCard/IssueCard';

// data
import { Issue } from '../../data/issue';

type State = {
    issues: Issue[]
};

class IssuesContainer extends React.Component {
    
    state: State = {
        issues: []
    };

    componentDidMount() {
        this.fetchIssues();
    }

    fetchIssues(): Promise<void> {
        return fetch('https://api.github.com/repos/cosmos/cosmos-sdk/issues', {
            method: 'GET',
            headers: {
                'Accept': 'application/vnd.github.v3+json'
            }
        })
        .then(response => response.json())
        .then(data => this.setState({
            issues: data
        }));
    };

    renderIssues = () => {
        return this.state.issues.map((issue: Issue) => (
            <IssueCard issue={issue}/>
        ));
    }

    render() {
        console.log(this.state.issues)
        return (
            <div>
                {this.renderIssues()}
            </div>
        )
    }

};

export default IssuesContainer;