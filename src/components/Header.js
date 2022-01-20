import React, {Component}  from 'react';


class Header extends Component {
    render(){
        const headerStyle = {fontFamily: 'RobotoMedium', float: 'left'};
        const hyperLinkStyles = {float: 'right'};
        const hyperLinkMargin = {maginLeft : '5px', marginRight : '5px'};
        return(
            <div style={{display : 'inline'}}>
                <div style={headerStyle}>&lt;Vishal Vishwanathan /&gt;</div>
                <div style={hyperLinkStyles}>
                    <a style={hyperLinkMargin}>About</a>
                    <a style={hyperLinkMargin}>Contact</a>
                    <a href='https://medium.com/@vishalv97' style={hyperLinkMargin}>Blog</a>
                </div>
            </div>
        );
    }
}

export default Header;