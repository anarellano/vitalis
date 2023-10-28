import React from 'react';
import { Button } from 'reactstrap'; // Replace 'your-library' with the library you're using, e.g., 'reactstrap'
import { Link } from "react-router-dom";

const ApplyNowButton = () => {
    const linkStyle = {
        width: '150px',
        textAlign: 'center',
        color: 'white',
        textDecoration: 'none'
    };

    return (
        <Button
            color="primary"
            size="lg"
            className="rounded-pill bold"
            as={Link}
            style={{ backgroundColor: '#4681f4', borderColor: '#4681f4' }}
        >
            <a style={linkStyle} href="https://vitalisstaffing.clearcareonline.com/apply/">
                Apply Now
            </a>
        </Button>
    );
}

export default ApplyNowButton;

