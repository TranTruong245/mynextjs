
// import 'font-awesome/css/font-awesome.min.css';
// import { IconProp } from '@fortawesome/fontawesome-svg-core'
// import { faCoffee, faSearch } from '@fortawesome/free-solid-svg-icons'
// import { faHome } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import {
//   solid,
//   regular,
//   brands,
//   icon
// } from '@fortawesome/fontawesome-svg-core/import.macro'
import { faCoffee, faHome } from '@fortawesome/free-solid-svg-icons';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';

const AppFooter = () =>{
    return(
           
        <footer 
            className="text-center text-lg-start bg-light text-muted "
            
        >

        <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
        
            {/* <div className="me-5 d-none d-lg-block">
            <span>Get connected with us on social networks:</span>
            </div> */}
        
            <div style={{fontSize:"5px"}} >
            <a href="" className="me-4 text-reset">
                <i className="fab fa-facebook-f"></i>
            </a>
            <a href="" className="me-4 text-reset">
                <i className="fab fa-twitter"></i>
            </a>
            <a href="" className="me-4 text-reset">
                <i className="fab fa-google"></i>
            </a>
            <a href="" className="me-4 text-reset">
                <i className="fab fa-instagram"></i>
            </a>
            <a href="" className="me-4 text-reset">
                <i className="fab fa-linkedin"></i>
                <FontAwesomeIcon icon={faCoffee} size="lg" />
            </a>
            <a href="" className="me-4 text-reset">
                <i><FontAwesomeIcon icon={faHome} size='sm'/></i>
                
                
            </a>
            </div>
        
        </section>            
     <section className="">
            <div className="container text-center text-md-start mt-5">
            <div className="row mt-3">
                <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">
                    <i className="fas fa-gem me-3"></i>Trần Trường
                </h6>
                <p>
                    Welcome to Trần Trường! 
                </p>
                </div>
                <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">
                    Products
                </h6>
                <p>
                    <a href="https://github.com/TranTruong245" className="text-reset">Github</a>
                </p>
                </div>
                <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                <p><i className="fas fa-home me-3"></i>Hà Nội</p>
                <p>
                    <i className="fas fa-envelope me-3" ></i>
                    Email:trancongtruongk1221@gmail.com
                </p>
                <p><i className="fas fa-phone me-3"></i> Số điện thoại: 0358289786</p>
                
                {/* <FontAwesomeIcon icon={faSearch as IconProp} /> */}
                
               
                </div>               
            </div>
            
            </div>
        </section>
        
        {/* <div className="text-center p-4" style={{background: "rgba(0, 0, 0, 0.05"}}>
            © 2021 Copyright:
            <a className="text-reset fw-bold" href="https://mdbootstrap.com/">MDBootstrap.com</a>
        </div> */}
        
        </footer>

       
    )
}
export default AppFooter;