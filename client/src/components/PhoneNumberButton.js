import React from 'react';
import { Button } from 'reactstrap';
import { Link } from "react-router-dom";

const PhoneNumberButton = () => {
    const buttonStyle = {
        width: '150px',
        textAlign: 'center',
        color: 'black', // Font color set to black
        textDecoration: 'none',
        fontWeight: 'bold' // Font set to bold
    };

    return (
        <Button
            style={{ backgroundColor: '#33b249', borderColor: '#33b249' }} // Vibrant green color
            size="lg"
            className="rounded-pill bold"
            as={Link}
        >
            <a style={buttonStyle} href="tel:+1-415-812-4343">
                (415) 812-4343
            </a>
        </Button>
    );
}

export default PhoneNumberButton;
