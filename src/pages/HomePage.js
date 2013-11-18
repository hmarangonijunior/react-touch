/** @jsx React.DOM */

var React = require('React');

require('./HomePage.css');

var HomePage = React.createClass({
  shouldComponentUpdate: function() {
    return false;
  },

  render: function() {
    return (
      <div>
        <h1><a href="http://reactjs.org/" target="_blank">React</a>-based touch demos</h1>
        <p>
          The web isn't as performant as native, but on modern devices we can get pretty close.
          Or at least a lot better than the Web's current reputation.
          This set of demos demonstrates the power and performance of modern mobile devices (and
          the React JS library). Physics and touch gesture recognition provided by
          <a href="http://zynga.github.io/scroller" target="_blank">Zynga Scroller</a>.
        </p>
        <p>
          The UX isn't that great (snapping is off, etc) but the performance is pretty good. Keep
          in mind that this demo uses JavaScript to animate CSS3d transforms <strong>every frame</strong>
          using React's data binding while targeting mobile devices.
        </p>
        <p><strong>Open the left nav to get started.</strong></p>
        <p>
          Source available <a href="http://github.com/petehunt/react-touch/" target="_blank">on my github account</a>.
        </p>
      </div>
    );
  }
});

module.exports = HomePage;