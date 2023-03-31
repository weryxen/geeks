import React from 'react';
import {useSelector, useDispatch} from "react-redux";

function AboutPage(props) {
    const aboutTitle = useSelector(state => state.aboutTitle)
    return (
        <>
            <h1>{aboutTitle}</h1>
        </>
    );
}

export default AboutPage;