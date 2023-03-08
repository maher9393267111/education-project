import React from 'react';
import FooterThree from '../components/Layout/Footer/FooterStyleThree';
import HeaderFour from '../components/Layout/Header/HeaderStyleFour';
import SignUpMain from '../components/SignUp/SignUpMain';
import HeaderStyleThree from '../components/Layout/Header/HeaderStyleThree';

class SignIn extends React.Component {

    static getInitialProps({store}) {}

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <React.Fragment>
            {/* <HeaderFour /> */}
            <HeaderStyleThree/>
            <SignUpMain />
            <FooterThree />
            </React.Fragment>
        );
    }
}


export default SignIn;