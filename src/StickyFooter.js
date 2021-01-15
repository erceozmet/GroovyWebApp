import React from 'react';
import { Container } from 'react-bootstrap';


const StickyFooter = () => {
  return (
    <div className = "footer">
    <footer className="py-2 bg-dark">
        <div className="container-fluid">
            <div className="d-flex align-items-center justify-content-between small">
                <div className="text-muted">Copyright &copy; Groovy 2020</div>
                <div>
                    <a href="#">Privacy Policy</a>
                    &middot;
                    <a href="#">Terms &amp; Conditions</a>
                </div>
            </div>
        </div>
    </footer>
    </div>
   
  );
}

export default StickyFooter;
