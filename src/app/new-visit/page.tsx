import MainContainer from "@/components/MainContainer";
import React, { useState } from "react";
import SaveVisitButton from "@/components/NewVisitForm/SaveVisitButton";
import BackButton from "@/components/BackButton";
import NewVisitForm from "@/components/NewVisitForm";

const NewVisitPage = () => {
    
    return (
        <MainContainer>
           <NewVisitForm/> 
        </MainContainer>
    );
};

export default NewVisitPage;
