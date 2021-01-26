import React from "react";
import Heading from "../layout/Heading";
import ContactForm from "./ContactForm";

export function ContactPage() {
    return (
        <>
        <Heading title="Contact us"/>
        <ContactForm></ContactForm>
        </>
    );
}

export default ContactPage;