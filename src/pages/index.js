import React from "react";
import {
  AboutSection,
  InterestsSection,
  Page,
  ProjectsSection,
  Seo,
} from "gatsby-theme-portfolio-minimal";
import Countdown from "../components/Countdown";
import { HeroSection } from "../components/Hero";
import { AsistenciaSection } from "../components/Asistencia";
import { ArticlesSection } from "../components/Articles";

export default function IndexPage() {
  return (
    <>
      <Seo title="Invitación al XV años de Abby"/>
      <Page useSplashScreenAnimation>
        <HeroSection sectionId="hero" />
        <Countdown date="July 28, 2023 18:00:00 GMT-06:00" />
        <ArticlesSection sectionId="noticias" heading="Ultimas Noticias" sources={['medium']} />
        <AboutSection sectionId="invitacion" heading="Invitación" />
        <InterestsSection sectionId="detalles" heading="Detalles" />
        <ProjectsSection sectionId="lugar" heading="Lugar" />
        <AsistenciaSection sectionId="confirmarAsistencia" heading="Confirma Asistencia" />
      </Page>
    </>
  );
}
