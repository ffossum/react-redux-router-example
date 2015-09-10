console.log('react render');
var $ = require('jquery');

React.render(
    <h1>Hello, world!</h1>,
    document.getElementById('example')
);

module.exports = {
    message: 'hello'
};