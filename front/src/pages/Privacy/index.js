import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import './index.css'
export default function privacy() {
    return (
        <div>
            <Navbar />
            <div className="privacy-policy">
                <div className="privacy-policy-text">
                    None of the data used by Receiptify is stored or collected
                    anywhere, and it is NOT shared with any third parties. All
                    information is used solely for displaying your Receipt.
                </div>
            </div>
            <Footer />
        </div>
    );
}
