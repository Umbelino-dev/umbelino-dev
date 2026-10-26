import { contact, sectionNumber } from "@/data/portfolio";
import { ArrowUpRight, Github, Instagram, Linkedin, Mail, MessageCircle } from "lucide-react";

export function ContactSection() {
  return (
    <section id="contato" className="contact-section" aria-labelledby="contato-title">
      <div className="contact-inner">
        <div className="section-meta contact-meta">
          <span>{sectionNumber("contato")}</span>
          <p>Contato</p>
          <i />
        </div>
        <div className="contact-grid">
          <div>
            <p className="contact-kicker">Principal canal de contato</p>
            <h2 id="contato-title">
              Tem uma ideia?
              <br />
              <em>Me chama.</em>
            </h2>
            <p className="contact-text">
              WhatsApp é a forma mais rápida de falar comigo. Se quiser conversar sobre um projeto,
              oportunidade ou tecnologia, pode me chamar por lá.
            </p>
            <a
              className="whatsapp-cta"
              href={contact.whatsappHref}
              target="_blank"
              rel="noreferrer"
            >
              <MessageCircle size={21} />
              <span>
                <small>WhatsApp</small>
                <strong>{contact.whatsappLabel}</strong>
              </span>
              <ArrowUpRight size={20} />
            </a>
          </div>
          <div className="contact-side">
            <a href={`mailto:${contact.email}`} className="contact-email">
              <Mail size={17} />
              <span>{contact.email}</span>
              <ArrowUpRight size={15} />
            </a>
            <div className="contact-socials">
              <a href={contact.github} target="_blank" rel="noreferrer">
                <Github size={17} /> GitHub
              </a>
              <a href={contact.linkedin} target="_blank" rel="noreferrer">
                <Linkedin size={17} /> LinkedIn
              </a>
              <a href={contact.instagram} target="_blank" rel="noreferrer">
                <Instagram size={17} /> Instagram
              </a>
            </div>
          </div>
        </div>
        <div className="contact-footer">
          <span>Iury Umbelino</span>
          <span>Suporte de TI e desenvolvimento · 2026</span>
          <a href="#inicio">Voltar ao topo ↑</a>
        </div>
      </div>
    </section>
  );
}
