/*
 * @Author: Mujib Ansari 
 * @Date: 2018-02-05 18:18:03 
 * @Last Modified by: Mujib Ansari
 * @Last Modified time: 2018-02-06 09:11:10
 */
import React from 'react';

// --- common components
import { 
    TabHeader,
    TabBody
} from "./";

import Alarm from '../Alarm';
import Clock from '../Clock';
import Timer from '../Timer';
import Stopwatch from '../Stopwatch';

class TabComp extends React.Component {

    constructor() {
        super();
        this.state = {
            activeTab: '1'
        }
        this.tabsData = [
            'Alarm',
            'Clock',
            'Timer',
            'Stopwatch'
        ];
    }


    onTabChange = ( e ) => {
        console.log(e.target.getAttribute('tabIndex') );
        this.setState({ activeTab: e.target.getAttribute('tabIndex') })
    }

    renderTabHeader = () => {
        
        const renderElm = [];

        for( var i in this.tabsData ) {
            renderElm.push(
                <TabHeader
                    pState={this.state}
                    tabIndex= {i}
                    onClick={this.onTabChange}
                >
                    <div
                        tabIndex={i}
                        className="tab_header_text"
                    >
                        { this.tabsData[ i ] }
                    </div>
                </TabHeader>
            );
        }
        return renderElm;
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
                        <Alarm />
                    </TabBody>
                    <TabBody
                        pState={this.state}
                        tabIndex="2"
                    >
                        <Clock />
                    </TabBody>
                    <TabBody
                        pState={this.state}
                        tabIndex="3"
                    >
                        <Timer />
                    </TabBody>
                    <TabBody
                        pState={this.state}
                        tabIndex="4"
                    >
                        <Stopwatch />
                    </TabBody>


                </div>
            </div>
        );
    }
}

export { TabComp };