import React from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import Container from "react-bootstrap/Container";
import { AuthContextProvider } from "./context/AuthContext";
import ProtectedRoute from "./components/routes/ProtectedRoute";
import HomePage from "./components/home/HomePage";
import HotelsPage from "./components/hotels/HotelsPage";
import HotelDetail from "./components/hotels/HotelDetail";
import MakeEnquiry from "./components/hotels/MakeEnquiry";
import ContactPage from "./components/contact/ContactPage";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import Hotels from "./components/admin/Hotels";
import AddHotel from "./components/admin/AddHotel";
import Enquieries from "./components/admin/Enquieries";
import EnquiryDetail from "./components/admin/EnquiryDetail";
import Messages from "./components/admin/Messages.js";
import MessageDetail from "./components/admin/MessageDetail";
import EditHotel from "./components/admin/EditHotel";
import Dashboard from "./components/admin/Dashboard";
import Navigation from "./components/layout/Navigation";
import Footer from "./components/layout/Footer";
import "./sass/styles.scss";


function App() {
    return (
    
        <AuthContextProvider>
            <Router>
            <Container fluid className="wrapper">
                <Navigation />
                
                
                    <Switch>
                        <Route path="/" exact component={HomePage} />
                        <Route path="/login" component={Login} />
                        <Route path="/hotels" component={HotelsPage} />
                        <Route path="/contact" component={ContactPage} />
                        <Route path="/register" component={Register} />
                        <Route path="/hotel/:id" component={HotelDetail} />
                        <Route path="/enquire/:id" component={MakeEnquiry} />
                    
                        <ProtectedRoute path="/admin" exact component={Dashboard} />
                        <ProtectedRoute path="/admin/hotels" exact component={Hotels} />
                        <ProtectedRoute path="/admin/hotels/add" exact component={AddHotel} />
                        <ProtectedRoute path="/admin/hotels/enquieries" exact component={Enquieries} />
                        <ProtectedRoute path="/admin/hotels/enquieries/view/:id" exact component={EnquiryDetail} />
                        <ProtectedRoute path="/admin/messages" exact component={Messages} />
                        <ProtectedRoute path="/admin/messages/view/:id" exact component={MessageDetail} />
                        <ProtectedRoute path="/admin/hotels/edit/:id" exact component={EditHotel} />
                        <Redirect to="/" />
                    </Switch>
                </Container>
                <Footer className="footer"></Footer>
                
            </Router>
        </AuthContextProvider>
        
      
        
    );
}

export default App;
