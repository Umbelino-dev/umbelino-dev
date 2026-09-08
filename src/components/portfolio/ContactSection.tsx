import { ArrowUpRight, Github, Instagram, Linkedin, Mail, MessageCircle } from "lucide-react";

const whatsappHref = "https://wa.me/5548991000913?text=Ol%C3%A1%20Iury!%20Vi%20seu%20portf%C3%B3lio%20e%20gostaria%20de%20conversar.";

export function ContactSection() {
  return (
    <section id="contato" className="contact-section" aria-labelledby="contato-title">
      <div className="contact-inner">
        <div className="section-meta contact-meta"><span>05</span><p>Contato</p><i /></div>
        <div className="contact-grid">
          <div>
            <p className="contact-kicker">Principal canal de contato</p>
            <h2 id="contato-title">Tem uma ideia?<br /><em>Me chama.</em></h2>
            <p className="contact-text">WhatsApp é a forma mais rápida de falar comigo. Se quiser conversar sobre um projeto, oportunidade ou tecnologia, pode me chamar por lá.</p>
            <a className="whatsapp-cta" href={whatsappHref} target="_blank" rel="noreferrer">
              <MessageCircle size={21} />
              <span><small>WhatsApp</small><strong>+55 (48) 99100-0913</strong></span>
              <ArrowUpRight size={20} />
            </a>
          </div>
          <div className="contact-side">
            <a href="mailto:iuryumbelino1@gmail.com" className="contact-email"><Mail size={17} /><span>iuryumbelino1@gmail.com</span><ArrowUpRight size={15} /></a>
            <div className="contact-socials">
              <a href="https://github.com/Umbelino-dev/" target="_blank" rel="noreferrer"><Github size={17} /> GitHub</a>
              <a href="https://www.linkedin.com/in/iuryumbelino/" target="_blank" rel="noreferrer"><Linkedin size={17} /> LinkedIn</a>
              <a href="https://www.instagram.com/umbelino.zs/" target="_blank" rel="noreferrer"><Instagram size={17} /> Instagram</a>
            </div>
          </div>
        </div>
        <div className="contact-footer"><span>Iury Umbelino</span><span>Desenvolvedor em formação · 2026</span><a href="#inicio">Voltar ao topo ↑</a></div>
      </div>
    </section>
  );
}
