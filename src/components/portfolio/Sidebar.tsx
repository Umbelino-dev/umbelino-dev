import { useEffect, useState } from "react";
import { Github, Instagram, Linkedin, Menu, MessageCircle, X } from "lucide-react";
import { navItems } from "@/data/portfolio";
import { cn } from "@/lib/utils";

export function Sidebar() {
  const [active, setActive] = useState("inicio");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const sections = navItems
      .map((item) => document.getElementById(item.id))
      .filter((el): el is HTMLElement => Boolean(el));

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-35% 0px -55% 0px", threshold: [0.08, 0.25, 0.5] },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const whatsappHref = "https://wa.me/5548991000913?text=Ol%C3%A1%20Iury!%20Vi%20seu%20portf%C3%B3lio%20e%20gostaria%20de%20conversar.";

  return (
    <>
      <button type="button" aria-label={open ? "Fechar menu" : "Abrir menu"} aria-expanded={open} onClick={() => setOpen((value) => !value)} className="mobile-menu">
        {open ? <X size={20} /> : <Menu size={20} />}
      </button>
      {open && <button className="mobile-overlay" aria-label="Fechar menu" onClick={() => setOpen(false)} />}

      <aside className={cn("sidebar", open && "sidebar-open")}>
        <div>
          <div className="profile-block">
            <div className="profile-photo-wrap">
              <img src="/iury-profile.jpg" alt="Iury Umbelino" className="profile-photo" />
              <span className="profile-live" aria-hidden="true" />
            </div>
            <div>
              <p className="profile-name">Iury Umbelino</p>
              <p className="profile-role">Desenvolvedor em formação</p>
            </div>
          </div>

          <div className="study-line">
            <span />
            <span>ADS + Ciência da Computação</span>
          </div>

          <nav aria-label="Navegação principal" className="sidebar-nav">
            <span className="sidebar-nav-label">Navegação</span>
            {navItems.map((item, index) => {
              const isActive = active === item.id;
              return (
                <a key={item.id} href={`#${item.id}`} onClick={() => setOpen(false)} aria-current={isActive ? "location" : undefined} className={cn("sidebar-link", isActive && "sidebar-link-active")}>
                  <span className="nav-number">0{index + 1}</span>
                  <span>{item.label}</span>
                </a>
              );
            })}
          </nav>
        </div>

        <div className="sidebar-bottom">
          <a className="sidebar-whatsapp" href={whatsappHref} target="_blank" rel="noreferrer">
            <span><MessageCircle size={15} /> Principal contato</span>
            <strong>Falar no WhatsApp ↗</strong>
          </a>
          <div className="sidebar-socials">
            <a href="https://github.com/Umbelino-dev/" target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={16} /></a>
            <a href="https://www.linkedin.com/in/iuryumbelino/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={16} /></a>
            <a href="https://www.instagram.com/umbelino.zs/" target="_blank" rel="noreferrer" aria-label="Instagram"><Instagram size={16} /></a>
          </div>
          <p className="sidebar-copyright">© {new Date().getFullYear()} Iury Umbelino</p>
        </div>
      </aside>
    </>
  );
}
