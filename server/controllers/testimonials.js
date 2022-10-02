import Testimonial from "../models/testimonial.js";

export const getTestimonials = async (req, res) => {
    try {
        const testimonials = await Testimonial.find();
        console.log(testimonials);

        res.status(200).json(testimonials)
    } catch (error) {
        res.status(404).json({message: error.message});
    }
};
export const createTestimonial = async (req, res) => {
    const testimonial = req.body;
    console.log(testimonial);
    const newTestimonial = new Testimonial(testimonial); 
    console.log(newTestimonial);
    try {
        await newTestimonial.save();
        res.status(201).json(newTestimonial);
    } catch(error) {
        res.status(409).json({message: error.message})
    }
};
export const updateTestimonial = async (req, res) => {
    const updatedTestimonial = req.body;
    const query = {id: updatedTestimonial.id};
    Testimonial.findOneAndUpdate(query, updatedTestimonial, 
        function(err, doc) {
            if(err) return res.status(500).json({message: err})
            return res.status(200).json({message: "Successfully updated"})
        }
    )
};
export const deleteTestimonial = async (req, res) => {
    const testimonial = req.body;
    const query = {id: testimonial.id};
    Testimonial.updateOne(query,

        {
            $set: {
                "active": 0
            }
        },
        function(err, doc) {
            if(err) return res.status(500).json({message: err});
            return res.status(200).json({message: "Succesfully deleted"})

        }
    )
} 