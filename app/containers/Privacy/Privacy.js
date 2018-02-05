import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { withRouter, Link } from 'react-router-dom';

require('./privacy.scss');

const propTypes = {
	location: PropTypes.object.isRequired,
};

class Privacy extends Component {
	render() {
		return (
			<div className={'privacy-wrapper'}>
				<Helmet>
					<title>Privacy</title>
				</Helmet>

				<div className={'container narrow'}>
					<div className={'row'}>
						<div className={'col-12'}>
							<h1>Privacy Policy</h1>

							<p><i>Frankenbook</i> is a project of the Center for Science and the Imagination at Arizona State University (“ASU”) and the Media Lab and The MIT Press at the Massachusetts Institute of Technology (“MIT”). </p>
							<p><i>Frankenbook</i> is committed to respecting the privacy of users who access the <i>Frankenbook</i> website (the “Site,” which includes all pages within the frankenbook.org host directory and subdomains, and all associated services. </p>
							<h2>Web Server Logs</h2>
							<p>When you visit the Site, our web server may record the following information in its server log:</p>
							<ul>
								<li>your IP Address,</li>
								<li>the URLs you have requested to access,</li>
								<li>the dates and methods of requests,</li>
								<li>the status code of your requests,</li>
								<li>URLs of pages that referred you to the Site,</li>
								<li>the number of bytes transferred, and</li>
								<li>your web browser and operating system platform.</li>	
							</ul>
							<p>We use server log information to help diagnose problems with our server and to administer our website by identifying which parts or features of our site are most heavily used. We also use this information to tailor site content to user needs and to generate aggregate statistical reports. Web server logs are retained on a temporary basis, during which time their contents are accessible to Site administrators, and then deleted completely from our systems. Unless required by legal process, we do not link IP addresses to any personally identifiable information. This means that user sessions will be tracked by IP address, but a user’s identity will remain anonymous.</p>
							<p>In addition, we ordinarily do not disclose to third parties site usage by individual IP addresses, but we may do so in very limited circumstances when complying with law or legal process, working with consultants assisting us with fixing or improving the Site, or monitoring and improving the security of our network.</p>
							
							<h2>User Registration and User Generated Content</h2>
							<p>To obtain user registration, you must submit your email address to the Site, and a password that you create for user authentication purposes. We also ask you to provide a first and last name. You may use a pseudonym if you wish.</p>
							<p>The Site allows registered users to post content, images, multimedia presentations, and other scholarly works, as well as reviews, comments and other user-generated content in certain areas. The content you post will be available for all registered users to view and will identify you as the poster by the user name you have selected. If you do not wish to be identified as the source of content you post to the Site, you should select a pseudonymous user name.</p>
							<p><i>Frankenbook</i> creates a profile page for each registered user. The profile pages are public-facing. By default, the profile page includes your user name and information about your contributions to <i>Frankenbook</i> and other activities on the Site. You may (but do not need to) augment your profile page with additional information, including a picture.</p>
							<p>We will not disclose your email address anywhere on the Site (see below, “Email”) unless requested by you.</p>
							<p>From time to time we may solicit feedback from you about your use of the Site and its features (your “Feedback”). You are not required to provide Feedback. We solicit Feedback for internal purposes only, so that we can evaluate the Site and its features, and we will not publish or otherwise disclose your Feedback without first obtaining your consent to do so.</p>
							
							<h2>Programming Analytics</h2>
							<p>In order to refine the resources on offer through the Site and to optimize <i>Frankenbook</i>’s programming, <i>Frankenbook</i> may elect to conduct internal analytics of content submitted by users. Any such internal analytics will be conducted on an anonymized set of user-generated content.</p>
							
							<h2>Google Analytics and Mixpanel</h2>
							<p>We use Google Analytics and Mixpanel software to perform Site usage analytics. Google Analytics collects anonymous information from users to help us track Site usage and referrals from other websites. These data are used primarily to optimize the website experience for our visitors, but we may use the data as well to assist us in our marketing of the Site.</p>
							<p>Information collected and processed by Google Analytics and Mixpanel include the user’s IP address, network location, and geographic location. Google Analytics and Mixpanel acquires all its information directly from the user, by installing a cookie (see below) on JavaScript-enabled computers. The Site does not share any information it collects with Google or Mixpanel, and neither Google nor Mixpanel collect any personal identifying information such as names, contact information, social security numbers or financial information.</p>
							
							<h2>Cookies</h2>
							<p>Cookies are unique bits of computer data that many major websites will transfer to your computer the first time that you visit. Cookies are stored on your hard drive and may be later accessed by the website to track prior usage. As noted above, Google Analytics and Mixpanel will install a cookie on the hard drives of Site visitors.</p>
							
							<h2>Email</h2>
							<p>We will only record your email address if you send us a message or submit it to us as part of the user registration process. We will only use your email address for the purpose for which you have provided it — i.e., to respond to a message from you or to communicate with you regarding your user account or your contributions to <i>Frankenbook</i>.</p>
							<p>When you submit your email address to the Site during registration, we will ask you whether you want to receive periodic announcements from the Site by email. Accepting emailed announcements is entirely optional and not a condition of registration, and you may change your email settings at any time to subscribe or unsubscribe to these mailings.</p>
							<p>In the event we contract with a third-party service to assist with email delivery of newsletters and other mailings containing information about the Site, that service will be prohibited from using or sharing Site user information for any purpose other than facilitating communications on behalf of the Site.</p>
							
							<h2>Disclosure to Third Parties</h2>
							<p>We will not sell, lend, or disclose to third parties any personally identifiable information collected from users, except as described in this Policy or in the event we are required by law to do so. We may disclose information to ASU and MIT’s employees, fellows, students, consultants and agents who have a legitimate need to know the information for the purpose of fixing or improving the Site and monitoring and improving the security of our network. We may also disclose this information when special circumstances call for it, such as when disclosure is required by law or court order or when disclosure is, in our sole discretion, necessary to protect our legal rights, including intellectual property rights.</p>
							
							<h2>Other Websites</h2>
							<p>This Site may contain links to other web resources, including websites of organizations other than Arizona State University and the Massachusetts Institute of Technology. The websites to which the Site links may also install cookies on your computer, log your access to their web pages, or collect user-identifying information directly from you, once you proceed to browse those sites. We are not responsible for the privacy policies of other sites to which the Site provides links. Please visit the relevant sites to review their privacy policies.</p>
							
							<h2>Data Security</h2>
							<p>We have in place physical, electronic and managerial procedures to protect the information we collect online. However, as effective as these measures are, no security system is impenetrable. We cannot completely guarantee the security of our database, nor can we guarantee that the information you supply will not be intercepted while being transmitted to us over the Internet.</p>
							
							<h2>Notification of Changes in the Privacy Policy</h2>
							<p>We will review our security measures and Privacy Policy on a periodic basis, and we may modify our policies as appropriate. We may also change or update our Privacy Policy if we add new services or features. If any changes are made, we will make appropriate amendments to this policy and post them at the Site. By accessing the Site after modifications to this Privacy Policy have been posted, you agree to be bound by the modified terms. We encourage you to review our Privacy Policy on a regular basis.</p>
							<p>If you have any questions about this Privacy Policy, the practices of this Site, or your dealings with this Site, you can contact Pubpub@media.mit.edu.</p>
							
							<h2>Effective Date</h2>
							<p>This Privacy Policy is in effect as of as of January 1, 2018. </p>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

Privacy.propTypes = propTypes;
export default withRouter(Privacy);
