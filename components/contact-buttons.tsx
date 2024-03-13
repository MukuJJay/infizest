import { AnimatedTooltip } from "./ui/animated-tooltip";
import whatsapp from "@/public/whatsapp.svg";
import email from "@/public/email.svg";

const people = [
  {
    id: 1,
    name: "Email",
    designation: "Email Us",
    image: email,
    link: "mailto:infizestpublishings.official@gmail.com?subject=Email Subject&body=Prepopulated message",
  },
  {
    id: 2,
    name: "Whatsapp",
    designation: "Whatsapp us",
    image: whatsapp,
    link: "https://wa.me/9123684835",
  },
  //   {
  //     id: 3,
  //     name: "Address",
  //     designation: "Find Address",
  //     image: whatsapp,
  //   },
];

export function ContactButtons() {
  return (
    <div className="flex flex-col items-center justify-center fixed right-5 bottom-10">
      <AnimatedTooltip items={people} />
    </div>
  );
}
