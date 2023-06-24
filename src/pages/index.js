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
import Countdown from "../components/Countdown";

export default function IndexPage() {
  return (
    <>
      <Seo title="Invitación XV años de Abby" />
      <Page useSplashScreenAnimation>
        <HeroSection sectionId="hero" />
        <Countdown date="July 29, 2023 18:00:00 GMT-60:00" />
        <ArticlesSection sectionId="noticias" heading="Ultimas Noticias" sources={['Medium']} />
        <AboutSection sectionId="invitacion" heading="Invitación" />
        <InterestsSection sectionId="detalles" heading="Detalles" />
        <ProjectsSection sectionId="lugar" heading="Lugar" />
        <ContactSection sectionId="contacto" heading="Confirma Asistencia" />
      </Page>
    </>
  );
}
