import React from "react";
import {
  AboutSection,
  ArticlesSection,
  ContactSection,
  InterestsSection,
  Page,
  ProjectsSection,
  Seo,
} from "gatsby-theme-portfolio-minimal";
import Countdown from "../components/Countdown";
import { HeroSection } from "../components/Hero";

export default function IndexPage() {
  return (
    <>
      <Seo title="Invitación al XV años de Abby" description="Viernes 28 de Julio, confirma asistencia al whatsapp +52.81.2063.5361" />
      <Page useSplashScreenAnimation>
        <HeroSection sectionId="hero" />
        <Countdown date="July 28, 2023 18:00:00 GMT-60:00" />
        <ArticlesSection sectionId="noticias" heading="Ultimas Noticias" sources={['medium']} />
        <AboutSection sectionId="invitacion" heading="Invitación" />
        <InterestsSection sectionId="detalles" heading="Detalles" />
        <ProjectsSection sectionId="lugar" heading="Lugar" />
        <ContactSection sectionId="contacto" heading="Confirma Asistencia" />
      </Page>
    </>
  );
}
