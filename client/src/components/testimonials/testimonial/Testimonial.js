import Logo from "../../../assets/images/logo.svg";

const Testimonial = (props) => {
    return (
        <div className="col-lg-4">
            <div className="single-testimonial mt-30 mb-30 text-center">
                <div className="testimonial-image">
                    <img src={Logo} alt="Author" />
                </div>
                <div className="testimonial-content">
                    <p className="text">{props.description}</p>
                    <h6 className="author-name">{props.name}</h6>
                    <span className="sub-title">{props.post}</span>
                </div>
            </div> 
        </div>
    )
}
export default Testimonial;