async function retrieveInfo(classStr, number) {
    // MTG_CLASSNAME$2
    var resp = await fetch("https://hrsa.cunyfirst.cuny.edu/psc/cnyhcprd/EMPLOYEE/HRMS/c/SA_LEARNER_SERVICES.SSR_SSENRL_CART.GBL", {
        "credentials": "same-origin",
        "referrer": "https://hrsa.cunyfirst.cuny.edu/psc/cnyhcprd/EMPLOYEE/HRMS/c/SA_LEARNER_SERVICES.SSR_SSENRL_CART.GBL?Page=SSR_SSENRL_CART&Action=A&ExactKeys=Y&TargetFrameName=None",
        "referrerPolicy": "no-referrer-when-downgrade",
        "body": "ICAJAX=1&ICNAVTYPEDROPDOWN=1&ICType=Panel&ICElementNum=0&ICStateNum=32&ICAction=" + classStr + "%24" + number + "&ICXPos=0&ICYPos=505.6000061035156&ResponsetoDiffFrame=-1&TargetFrameName=None&FacetPath=None&ICFocus=&ICSaveWarningFilter=0&ICChanged=-1&ICAutoSave=0&ICResubmit=0&ICSID=WhDgZ7SB75eR5qWXtRV0inLLgTdHKVQ4Ryr%2B2SDamF4%3D&ICActionPrompt=false&ICBcDomData=C~HC_SSR_SSENRL_CART_GBL~EMPLOYEE~HRMS~SA_LEARNER_SERVICES.SSR_SSENRL_CART.GBL~UnknownValue~Enrollment%3A%20%20Add%20Classes~UnknownValue~UnknownValue~https%3A%2F%2Fhome.cunyfirst.cuny.edu%2Fpsp%2Fcnyepprd%2FEMPLOYEE%2FHRMS%2Fc%2FSA_LEARNER_SERVICES.SSR_SSENRL_CART.GBL~UnknownValue*C~HC_SSS_STUDENT_CENTER~EMPLOYEE~HRMS~SA_LEARNER_SERVICES.SSS_STUDENT_CENTER.GBL~UnknownValue~Student%20Center~UnknownValue~UnknownValue~https%3A%2F%2Fhome.cunyfirst.cuny.edu%2Fpsp%2Fcnyepprd%2FEMPLOYEE%2FHRMS%2Fc%2FSA_LEARNER_SERVICES.SSS_STUDENT_CENTER.GBL~UnknownValue&ICFind=&ICAddCount=&ICAPPCLSDATA=&DERIVED_SSTSNAV_SSTS_MAIN_GOTO$7$=9999&DERIVED_SSTSNAV_SSTS_MAIN_GOTO$8$=9999&ptus_defaultlocalnode=PSFT_CNYHCPRD&ptus_dbname=CNYHCPRD&ptus_portal=EMPLOYEE&ptus_node=HRMS&ptus_workcenterid=&ptus_componenturl=https%3A%2F%2Fhrsa.cunyfirst.cuny.edu%2Fpsp%2Fcnyhcprd%2FEMPLOYEE%2FHRMS%2Fc%2FSA_LEARNER_SERVICES.SSR_SSENRL_CART.GBL",
        "method": "POST",
        "mode": "cors"
    })
    var body = await resp.text();
    return body;
}

export default retrieveInfo