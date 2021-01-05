import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/custom.css';

export class Content extends React.Component {

    render() {
        return (
            <div>
                {/* Jumbotron */}
                <div className="jumbotron jumbotron-fluid">
                    <div class="container">
                        <h1 className="display-4">Welcome to the Rick and Morty Character Application!</h1>
                        <h4 className="jumbotronText">This app is a mern stack application, meaning that a mixture of technologies have been use to build it.
                        These technologies include: MongoDB, Express JS, React JS and Node JS</h4>
                    </div>
                </div>

                <h1>Here is some content!</h1>

                <h1>Hello World!</h1>
                <h2>It is {new Date().toLocaleTimeString()}. </h2>
            </div>
        );
    }
}