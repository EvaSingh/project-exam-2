import React from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import Container from "react-bootstrap/Container";
import { AuthContextProvider } from "./context/AuthContext";
import ProtectedRoute from "./components/routes/ProtectedRoute";
import HomePage from "./components/home/HomePage";
import HotelsPage from "./components/hotels/HotelsPage";
import HotelDetail from "./components/hotels/HotelDetail";
import HotelEnquiry from "./components/hotels/HotelEnquiry";
import ContactPage from "./components/contact/ContactPage";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import Hotels from "./components/admin/Hotels";
import AddHotel from "./components/admin/AddHotel";
import Enquieries from "./components/admin/Enquieries.js";
import Messages from "./components/admin/Messages.js";
import EditHotel from "./components/admin/EditHotel";
import Dashboard from "./components/admin/Dashboard";
import Navigation from "./components/layout/Navigation";
import "./App.css";


function App() {
    return (
        <AuthContextProvider>
            <Router>
                <Navigation />

                <Container>
                    <Switch>
                        <Route path="/" exact component={HomePage} />
                        <Route path="/login" component={Login} />
                        <Route path="/hotels" component={HotelsPage} />
                        <Route path="/contact" component={ContactPage} />
                        <Route path="/register" component={Register} />
                        <Route path="/hotel/:id" component={HotelDetail} />
                        <Route path="/enquire" component={HotelEnquiry} />
                        <ProtectedRoute path="/admin" exact component={Dashboard} />
                        <ProtectedRoute path="/admin/hotels" exact component={Hotels} />
                        <ProtectedRoute path="/admin/hotels/add" exact component={AddHotel} />
                        <ProtectedRoute path="/admin/hotels/enquieries" exact component={Enquieries} />
                        <ProtectedRoute path="/admin/messages" exact component={Messages} />
                        <ProtectedRoute path="/admin/hotels/edit/:id" exact component={EditHotel} />
                        <Redirect to="/" />
                    </Switch>
                </Container>
            </Router>
        </AuthContextProvider>
    );
}

export default App;
