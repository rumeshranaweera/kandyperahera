import SectionTitle from "../sectionTitle";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./accordion";

const content = [
  {
    trigger: "What is the Asela Perahera?",
    content:
      "The Asela Perahera is a famous cultural festival held annually in Sri Lanka to celebrate the arrival of the southwest monsoon and to pay homage to Lord Kataragama, a Hindu deity widely venerated in the country. It is a grand procession featuring traditional dancers, drummers, fire performers, and decorated elephants.",
  },
  {
    trigger: "When does the Asela Perahera take place?",
    content:
      "The Asela Perahera usually takes place in the month of July, during the full moon period, which is considered auspicious in the Buddhist calendar. However, it's essential to check the specific dates each year, as they may vary.",
  },
  {
    trigger: "When does the Asela Perahera take place?",
    content:
      "The Asela Perahera usually takes place in the month of July, during the full moon period, which is considered auspicious in the Buddhist calendar. However, it's essential to check the specific dates each year, as they may vary.",
  },
  {
    trigger: "Where does the Asela Perahera occur?",
    content:
      "The Asela Perahera is held in the town of Kataragama, located in the southeastern part of Sri Lanka. Kataragama is a significant religious and pilgrimage site, attracting both Buddhists and Hindus from across the country.",
  },
  {
    trigger: "How long does the Asela Perahera last?",
    content:
      'The duration of the Asela Perahera is typically around two weeks, with various events and processions taking place during this period. The grand finale, known as the "Maha Perahera," is the most elaborate and spectacular part of the festival.',
  },
  {
    trigger: "What happens during the Asela Perahera?",
    content:
      "During the Asela Perahera, devotees and spectators gather to witness the procession of beautifully adorned elephants, traditional dancers, drummers, and fire performers. The parade moves through the streets of Kataragama, accompanied by religious rituals, chanting, and offerings.",
  },
  {
    trigger: "Can tourists participate in the Asela Perahera?",
    content:
      "Yes, tourists are welcome to witness and experience the Asela Perahera. However, it's important to respect the cultural and religious significance of the festival. It is advisable to dress modestly and behave respectfully during the event.",
  },
  {
    trigger:
      "Are there any special customs or practices associated with the Asela Perahera?",
    content:
      "The Asela Perahera holds deep cultural and religious significance for the locals. Many devotees fast and engage in various acts of penance during the festival. It is also common for people to make vows or offer prayers to Lord Kataragama during this time. Additionally, the festival provides an opportunity for traditional artisans and craftsmen to showcase their skills through various cultural exhibitions.",
  },
];

const AccordionSection = () => {
  return (
    <div>
      <SectionTitle title="FAQs" />
      <Accordion type="single" collapsible>
        {content.map((faq, i) => (
          <AccordionItem key={i} value={`item-${i}`}>
            <AccordionTrigger className="font-sans text-lg tracking-wide text-slate-100">
              {faq.trigger}
            </AccordionTrigger>
            <AccordionContent>{faq.content}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default AccordionSection;
