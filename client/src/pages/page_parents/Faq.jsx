import { Accordion, AccordionItem } from "@nextui-org/react";

import "../styles_parents/faq.css";

function Faq() {
  return (
    <section>
      <Accordion variant="splitted">
        <AccordionItem
          className="texts titles-faq"
          key="1"
          aria-label="Accordion 1"
          title="Qui édite le site Babyplace ?"
        >
          <p className="texts">
            Babyplace est édité par la société <strong>DaveWarehouse</strong>,
            agence web basée à <strong>Nantes</strong>. L'intégralité du contenu
            présent sur le site, ainsi que la promotion du site, est effectuée
            par <strong>DaveWarehouse</strong>. Pour plus de détails, consultez
            la page de mentions légales.
          </p>
        </AccordionItem>
        <AccordionItem
          className="texts"
          key="2"
          aria-label="Accordion 2"
          title="Quel est le but de Babyplace ?"
        >
          <p className="texts">
            Babyplace a pour objectif d'être{" "}
            <strong>le premier portail français</strong> autour de{" "}
            <strong>la garde des jeunes enfants</strong>. Le site propose de
            nombreux services, aux particuliers comme aux professionnels, liés à
            l'accueil de la petite enfance en France.
          </p>
        </AccordionItem>
        <AccordionItem
          className="texts"
          key="3"
          aria-label="Accordion 3"
          title="Je suis tombé sur une page d'erreur 404, que faire ?"
        >
          <p className="texts">
            Nous vous invitons à nous signaler le problème via le formulaire de
            contact, en nous indiquant l'adresse de la page d'erreur, située en
            haut de votre navigateur et qui commence par «babyplace.fr».
            Veuillez aussi nous indiquer la page où se trouvait le lien qui vous
            a mené à la page d'erreur. Ces signalements nous permettront
            d'améliorer Babyplace.
          </p>
        </AccordionItem>
        <AccordionItem
          className="texts"
          key="4"
          aria-label="Accordion 4"
          title="Comment poser des questions à l'équipe de Babyplace ?"
        >
          <p className="texts">
            Le formulaire de contact vous permet de contacter notre équipe en
            quelques clics, mais vous pouvez aussi poser vos questions via
            Twitter, en indiquant notre compte (@babyplace) dans votre message.
          </p>
        </AccordionItem>
        <AccordionItem
          className="texts"
          key="5"
          aria-label="Accordion 5"
          title="Babyplace est-il déclaré à la CNIL ?"
        >
          <p className="texts">
            Le site est déclaré à la CNIL (Commission nationale de
            l'informatique et des libertés) sous le numéro{" "}
            <strong>1561979</strong>.
          </p>
        </AccordionItem>
        <AccordionItem
          className="texts"
          key="6"
          aria-label="Accordion 6"
          title="Est-il possible de mettre en place des partenariats ?"
        >
          <p className="texts">
            Nous sommes ouverts à de nombreuses formes de partenariats, à
            condition que l'internaute soit respecté. Le formulaire de contact
            vous permet de nous décrire le partenariat que vous recherchez.
          </p>
        </AccordionItem>
        <AccordionItem
          className="texts"
          key="7"
          aria-label="Accordion 7"
          title="Est-il possible de diffuser ses publicités sur Babyplace ?"
        >
          <p className="texts">
            Nous avons prévu plusieurs espaces permettant de diffuser ses
            publicités sur les pages de notre site, pour connaitre les formats
            possibles et les tarifs, utilisez le formulaire de contact.
          </p>
        </AccordionItem>
      </Accordion>
    </section>
  );
}

export default Faq;
