import React from 'react';
import { Link } from 'react-router-dom';


function Copyright() {
    return (
        

<div class="footer-bottom-area style-foure">
	<div class="container">
		<div class="row">
			<div class="col-lg-6 col-md-6">
				<div class="footer-bottom-content">
					<p>IT-Solution © 2024 All Right Reserved</p>
				</div>
			</div>
			<div class="col-lg-6 col-md-6">
				<div class="footer-botton-list">
					<ul>
						<Link to="/PrivacyTerms">Privacy & Terms.</Link>
						<Link to="/Faqs">FAQ</Link>
						<Link to="/Contact">Contact Us</Link>
					</ul>
				</div>
			</div>
		</div>
	</div>
</div>
    );
}

export default Copyright;