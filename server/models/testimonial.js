import mongoose from 'mongoose';

const testimonialSchema = mongoose.Schema({
    id: String,
    photo: Object,
    name: String,
    post: String,
    description: String,
    createdOn: {
        type: Date,
        default: new Date()
    },
    lastUpdatedOn: Date,
    active: Number
    

});

const Testimonial = mongoose.model('Testimonials', testimonialSchema);

export default Testimonial;

