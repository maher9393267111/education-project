import React from 'react';
import Footer from '../components/Layout/Footer/Footer';
import CourseDetailsMain from '../components/CourseDetails/CourseDetailsMain';
import HeaderFour from '../components/Layout/Header/HeaderStyleFour';
import HeaderThree from '../components/Layout/Header/HeaderStyleThree';

class CourseDetails extends React.Component {

    static getInitialProps({store}) {}

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <React.Fragment>
            {/* <HeaderFour /> */}
            <HeaderThree/>
            <CourseDetailsMain />
            <Footer />
            </React.Fragment>
        );
    }
}


export default CourseDetails;

