import {useState, useEffect} from 'react';
import axios from 'axios';
import Testimonial  from './testimonial/Testimonial.js';
const Testinomials = () => {
    const url = "https://6339ca3b5adf257feff32dcd--keen-duckanoo-3d7c61.netlify.app/";

    const [testimonials, setTestimonials] = useState([]);
    const fetchTestimonials = async () => {
        const response = await axios.get(url);
        setTestimonials(response.data);
        console.log(response);
    }
    useEffect(()=> {
        fetchTestimonials();
    },[])
    return (
        <section id="testimonial" className="testimonial-area">
<div className="container">
<div className="row justify-content-center">
<div className="col-lg-6">
<div className="section-title text-center pb-10">
<h4 className="title">Testimonial</h4>
<p className="text">Stop wasting time and money designing and managing a website that doesn’t get results. Happiness guaranteed!</p>
</div> 
</div>
</div>
<div className="row">
<div className="col-lg-12">
<div className="row testimonial-active">

{
    testimonials && testimonials.map((item, index)=> {
        return <Testimonial key={index} name={item.name} description={item.description} post={item.post} />
    })
}






</div> 
</div>
</div> 
</div> 
</section>
    )
};
export default Testinomials;