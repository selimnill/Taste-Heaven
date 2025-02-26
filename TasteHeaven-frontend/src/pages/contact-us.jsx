import { Helmet } from "react-helmet-async";
import ContactForm from "@/components/ContactUs/ContactForm";
import OurLocation from "@/components/ContactUs/OurLocation";
import Heading from "@/components/shared/Heading";
import { Box } from "@mui/material";
import SectionTitles from "@/components/shared/SectionTitles";

const ContactUsPage = () => {
	return (
		<>
			<Helmet>
				<title>Taste Heaven | Contact Us</title>
			</Helmet>

			<Heading
				bgImage='bg-[url("./assets/banners/contact-us.jpg")]'
				title='Contact Us'
			/>

			<Box
				className='space-y-12'
				component='section'
				mx='auto'
				width={{ xs: "80%", lg: "75%" }}>
				<SectionTitles bigTitle='Our Location' smallTitle='Visit us' />
				<OurLocation />
			</Box>

			<Box
				className='space-y-12'
				component='section'
				mx='auto'
				width={{ xs: "80%", md: "75%" }}>
				<SectionTitles
					bigTitle='Contact Form'
					smallTitle='Send us a message'
				/>

				<ContactForm />
			</Box>
		</>
	);
};

export default ContactUsPage;
