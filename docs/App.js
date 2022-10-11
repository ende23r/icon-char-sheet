'use strict';

const e = React.createElement;

function JobSheet(props) {
    const [loading, setLoading] = React.useState(false);

    return e(
        MaterialUI.Box,
        props,
        ["Here we can talk about the job you chose."]
    );
}

class CharacterSheet extends React.Component {
    constructor(props) {
        super(props);
        this.state = { liked: false };
    }

    render() {
        if (this.state.liked) {
            return 'You liked this.';
        }

        const button = React.createElement(
            'button',
            { onClick: () => this.setState({ liked: true }),
                key: 'LikeButton1'},
            'Like'
        );

        const jobsheet = e(
            JobSheet,
            { key: 'jobsheet' },
            []
        );

        return [jobsheet, button];
    }
}

const domContainer = document.querySelector('#react-root');
const root = ReactDOM.createRoot(domContainer);
root.render(e(CharacterSheet));
