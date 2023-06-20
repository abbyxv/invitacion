import React from "react";
import {
  AboutSection,
  ArticlesSection,
  ContactSection,
  HeroSection,
  InterestsSection,
  Page,
  ProjectsSection,
  Seo,
} from "gatsby-theme-portfolio-minimal";

export default function IndexPage() {
  return (
    <>
      <Seo title="Invitación XV años de Abby" />
      <Page useSplashScreenAnimation>
        <HeroSection sectionId="hero" />
        <ArticlesSection sectionId="noticias" heading="Ultimas Noticias" sources={['Medium']} />
        <AboutSection sectionId="invitacion" heading="Invitacion" />
        <InterestsSection sectionId="detalles" heading="Detalles" />
        <ProjectsSection sectionId="lugar" heading="Lugar" />
        <ContactSection sectionId="contacto" heading="Confirma Asistencia" />
      </Page>
    </>
  );
}
