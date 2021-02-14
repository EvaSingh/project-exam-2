import React from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import Container from "react-bootstrap/Container";
import { AuthContextProvider } from "../../context/AuthContext";
import ProtectedRoute from "../routes/ProtectedRoute";
import HomePage from "../home/HomePage";
import HotelsPage from "../hotels/HotelsPage";
import HotelDetail from "../hotels/HotelDetail";
import MakeEnquiry from "../hotels/MakeEnquiry";
import ContactPage from "../contact/ContactPage";
import MessageConfirm from "../contact/MessageConfirm";
import Login from "../auth/Login";
import Register from "../auth/Register";
import Hotels from "../admin/Hotels";
import AddHotel from "../admin/AddHotel";
import Enquiries from "../admin/Enquiries";
import EnquiryDetail from "../admin/EnquiryDetail";
import Messages from "../admin/Messages.js";
import MessageDetail from "../admin/MessageDetail";
import EditHotel from "../admin/EditHotel";
import Dashboard from "../admin/Dashboard";
import Navigation from "./Navigation";
import Footer from "./Footer";



function Layout() {
  return (
  
    <AuthContextProvider>
      <Router>
      <Container fluid>
        <Navigation />
        <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/login" component={Login} />
        <Route path="/hotels" component={HotelsPage} />
        <Route path="/contact" component={ContactPage} />
        <Route path="/register" component={Register} />
        <Route path="/hotel/:id" component={HotelDetail} />
        <Route path="/enquire/:id" component={MakeEnquiry} />

        <ProtectedRoute path="/confirmed" exact component={MessageConfirm} />
        <ProtectedRoute path="/admin" exact component={Dashboard} />
        <ProtectedRoute path="/admin/hotels" exact component={Hotels} />
        <ProtectedRoute path="/admin/hotels/add" exact component={AddHotel} />
        <ProtectedRoute path="/admin/hotels/enquiries" exact component={Enquiries} />
        <ProtectedRoute path="/admin/hotels/enquiries/view/:id" exact component={EnquiryDetail} />
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

export default Layout;