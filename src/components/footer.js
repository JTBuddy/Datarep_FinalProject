import React from 'react' ;
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/custom.css';

export class Footer extends React.Component{

        render(){
            return(
                <div className="mainDivFooter">
                <div className="row">
                    <div className="col">
                        <p className="footerText"> Made by James Talbot <br /> (G00354453)</p>
                    </div>

                    <div className="col">
                        <h1 className="footerText">Test</h1>
                    </div>

                    {/* <div className="col">
                        <h1>Test</h1>
                        </div> */}

                    </div>
                        <div className="bottomDivFooter">
                            <p className="bottomDivFooterText">Tester</p>
                        </div>
                </div>
            );
        }
}