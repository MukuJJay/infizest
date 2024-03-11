import Contactform from "@/components/forms/contact-form";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";

const ContactsPage = () => {
  const words =
    "We build beautiful products with the latest technologies and frameworks.We are a team of passionate workers and designers that love to buildamazing products.";

  return (
    <section>
      <TextGenerateEffect
        words={words}
        className="max-w-[800px] mx-auto mt-20"
      />
      <h1 className="text-center my-[85px] text-5xl font-bold">Contact Us</h1>
      <Contactform />
    </section>
  );
};

export default ContactsPage;
