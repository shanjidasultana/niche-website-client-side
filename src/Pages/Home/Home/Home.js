import React from 'react';
import Header from '../../Shared/Header/Header';
import BrandBox from '../BrandBox/BrandBox';
import Contacts from '../Contact/Contacts';
import Contact from '../Contact/Contact';
import Products from '../Products/Products';
import Banner from '../Banner/Banner';
import Footer from '../../Shared/Footer/Footer';
import CustomerReview from '../CustomerReview/CustomerReview';
import ReviewTop from '../ReviewTop/ReviewTop';

const Home = () => {
    return (
       <div>
            <Header></Header>
            <Banner></Banner>  
            <Contact></Contact>
            <Products></Products>
            

            <BrandBox></BrandBox>
            <Contacts></Contacts>
            <ReviewTop></ReviewTop>
            <CustomerReview></CustomerReview>
            <Footer></Footer>
       </div> 
    );
};

export default Home;