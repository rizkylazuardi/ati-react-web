import React from 'react';
import './../assets/css/404.css';
import image404 from './../assets/images/error-img.png'
import {connect} from 'react-redux'
import * as navigationAction from './../store/action/NavigationAction';
import {  push } from 'react-router-redux'
const Page404 = ({navigate}) => {
    return(
        <div class="wrap">
			<div class="header">
                <div class="logo">
                    <h1><a href="#">Sorry</a></h1>
                </div>
            </div>
			<div class="content">
				<img src={image404} title="error" />
				<p>Ohh.....You Requested the page that is no longer There.</p>
				<a href="#" onClick={(e) => {
					e.preventDefault();
					navigate("/modul/dashboard")
				}} style = {{color : '#ffffff'}}>
                    Back To Home
                </a>
				<div class="copy-right">
					<p>&copy; 2018 Ohh. All Rights Reserved | Design by Anabatic Tech</p>
				</div>
   			</div>
		</div>
    );
}


const mapStateToProps = (state, props) => {
    const { menu } = state;
    return { ...menu };
}

const mapActionToProp = () => {
    return {
        ...navigationAction,
    };
}

export default connect(mapStateToProps, mapActionToProp())(Page404);