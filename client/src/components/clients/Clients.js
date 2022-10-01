import logo1 from '../../assets/images/client_logo_01.png';
import logo2 from '../../assets/images/client_logo_02.png';
import logo3 from '../../assets/images/client_logo_03.png';
import logo4 from '../../assets/images/client_logo_04.png';

const Clients = () => {
    return (
        <section class="client-logo-area">
<div class="container">
<div class="row">
<div class="col-md-3 col-6">
<div class="single-client mt-30 text-center">
<img src={logo1} alt="Logo" />
</div> 
</div>
<div class="col-md-3 col-6">
<div class="single-client mt-30 text-center">
<img src={logo2} alt="Logo" />
</div> 
</div>
<div class="col-md-3 col-6">
<div class="single-client mt-30 text-center">
<img src={logo3} alt="Logo" />
</div> 
</div>
<div class="col-md-3 col-6">
<div class="single-client mt-30 text-center">
<img src={logo4} alt="Logo" />
</div> 
 </div>
</div> 
</div> 
</section>
    )
};
export default Clients;