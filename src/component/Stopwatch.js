/*
 * @Author: Mujib Ansari 
 * @Date: 2018-02-06 09:09:34 
 * @Last Modified by: Mujib Ansari
 * @Last Modified time: 2018-02-06 17:09:20
 */
import React from 'react';

export default class Stopwatch extends React.Component {
    render() {
        return(
            <div className="stopwatch_container">

                

                <div>
                    <div className="sw_circle">
                        <div className="sw_deci">0</div>
                        <div className="sw_mili">00</div>
                    </div>
                    <div className="sw_lap_text">
                        <div>#4 0 00.18 0 02.14</div>
                        <div>#3 0 00.17 0 01.96</div>
                        <div>#2 0 00.22 0 01.79</div>
                        <div>#1 0 01.56 0 01.56</div>
                    </div>
                </div>
                <div className="sw_bottom_nav">
                    <div>Reset</div>
                    <div>Play/Pause</div>
                    <div>Lap</div>
                </div>
            </div>
        );
    }
}