import React from "react";
import { MDBContainer, MDBFooter } from "mdbreact";

const Footer = () => {
  return (
    <div className="col-12 d-flex flex-row justify-content-center align-items-center" style={{backgroundColor: "rgba(233, 233, 231, 0.911)", height: "50px"}}>

      <MDBFooter className="font-small pt-1 mt-1 da-footer">
        <div>
          <MDBContainer>
            &copy; {new Date().getFullYear()} EventSite
          </MDBContainer>
        </div>
      </MDBFooter>
    </div>
  );
}

export default Footer;
