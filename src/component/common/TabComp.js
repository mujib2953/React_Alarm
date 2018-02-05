/*
 * @Author: Mujib Ansari 
 * @Date: 2018-02-05 18:18:03 
 * @Last Modified by: Mujib Ansari
 * @Last Modified time: 2018-02-05 21:15:28
 */
import React from 'react';

import { 
    TabHeader,
    TabBody
} from "./";

class TabComp extends React.Component {

    constructor() {
        super();
        this.state = {
            activeTab: '1'
        }
    }


    onTabChange = ( e ) => {
        console.log(e.target.getAttribute('tabIndex') );
        this.setState({ activeTab: e.target.getAttribute('tabIndex') })
    }

    render() {
        return (
            <div className="tab_comp">
                <div className="tab_headers">
                    <TabHeader 
                        pState={ this.state } 
                        tabIndex="1"
                        onClick={this.onTabChange}
                    >
                        <div
                            tabIndex="1"
                            className="tab_header_text"
                        >
                            Alarm
                        </div>
                    </TabHeader>
                    <TabHeader 
                        pState={ this.state } 
                        tabIndex="2"
                        onClick={ this.onTabChange }
                    >
                        <div
                            tabIndex="2"
                            className="tab_header_text"
                        >
                            Clock
                        </div>
                    </TabHeader>
                    <TabHeader 
                        pState={ this.state } 
                        tabIndex="3" 
                        onClick={this.onTabChange}
                    >
                        <div
                            tabIndex="3" 
                            className="tab_header_text"
                        >
                            Timer
                        </div>
                    </TabHeader>
                    <TabHeader 
                        pState={ this.state } 
                        tabIndex="4" 
                        onClick={this.onTabChange}
                    >
                        <div
                            tabIndex="4" 
                            className="tab_header_text"
                        >
                            Stopwatch
                        </div>
                    </TabHeader>
                </div>
                <div className="tab_divder"></div>
                <div className="tab_bodies">
                    <TabBody 
                        pState={this.state}
                        tabIndex="1"
                    >
                        <h1>Tab 1</h1>
                    </TabBody>
                    <TabBody
                        pState={this.state}
                        tabIndex="2"
                    >
                        <h1>Tab 2</h1>
                    </TabBody>
                    <TabBody
                        pState={this.state}
                        tabIndex="3"
                    >
                        <h1>Tab 3</h1>
                    </TabBody>
                    <TabBody
                        pState={this.state}
                        tabIndex="4"
                    >
                        <h1>Tab 4</h1>
                    </TabBody>


                </div>
            </div>
        );
    }
}

export { TabComp };