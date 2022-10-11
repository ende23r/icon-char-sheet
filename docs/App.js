'use strict';

const e = React.createElement;

class LikeButton extends React.Component {
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
      { onClick: () => this.setState({ liked: true }) },
      'Like'
    );

    return e(
        'span',
        {},
        ['Hi!', button]);
  }
}

const domContainer = document.querySelector('#react-root');
const root = ReactDOM.createRoot(domContainer);
root.render(e(LikeButton));
