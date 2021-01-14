import React from 'react';
import ReactDOM from 'react-dom';
import JobForm from './JobForm';

function Example() {
    return (
        <div className="container">
            <JobForm/>
        </div>
    );
}

export default Example;

if (document.getElementById('example')) {
    ReactDOM.render(<Example />, document.getElementById('example'));
}
