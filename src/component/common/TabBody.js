/*
 * @Author: Mujib Ansari 
 * @Date: 2018-02-05 20:23:05 
 * @Last Modified by: Mujib Ansari
 * @Last Modified time: 2018-02-05 21:04:55
 */
import React from 'react';

class TabBody extends React.Component {
    render() {

        const css_class = ( this.props.tabIndex === this.props.pState.activeTab ) ? 'tab_body active' : 'tab_body';

        return(
            <div className={ css_class }>
                { this.props.children }
            </div>
        );
    }
}
export { TabBody };