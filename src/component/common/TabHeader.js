/*
 * @Author: Mujib Ansari 
 * @Date: 2018-02-05 18:39:44 
 * @Last Modified by: Mujib Ansari
 * @Last Modified time: 2018-02-05 21:10:02
 */
import React from 'react';

class TabHeader extends React.Component {
    
    render() {

        const css_class = ( this.props.pState.activeTab === this.props.tabIndex ) ? 'tab active': 'tab';

        return(
            <div 
                className={ css_class }
                onClick={ this.props.onClick }
                tabIndex={ this.props.tabIndex }
            >
                { this.props.children }
            </div>
        );
    }
}

export { TabHeader };