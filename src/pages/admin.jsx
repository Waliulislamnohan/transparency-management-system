import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';

export default function Admin() {
    return (
    <>
    <Header />
    <div style={{height: '76vh',}}>
    <h1 style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        fontSize: '5rem',
    }}>Hello there!👋</h1>
    </div>
    <Footer />
    </>
    )
}
