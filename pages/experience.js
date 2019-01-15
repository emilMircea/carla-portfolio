import React, { Component } from "react";
import PageLayout from "./PageLayout";
import Sidebar from "../components/sidebar/Sidebar";
import Content from "../components/Content";
import ExperienceParag from "../components/experience/ExperienceParag";
import PageTitle from "../components/PageTitle";
import { translation } from "../data/translation";
import "./index.css";
import "animate.css/animate.min.css";

class Experience extends Component {
  state = { es: true };
  changeLang = () => {
    this.setState({ es: !this.state.es });
  };
  render() {
    const { es } = this.state;
    return (
      <PageLayout>
        <div className="sidebar-wrapper">
          <Sidebar path={this.props.url.pathname} bg="experience" />
        </div>
        <Content>
          <a className="translation-link" onClick={this.changeLang}>
            {es ? "Read in English" : "Lee en Espanol"}
          </a>
          {es ? (
            <PageTitle imagePath="../static/letter_e.svg" title="Experiencia" />
          ) : (
            <PageTitle imagePath="../static/letter_e.svg" title="Experience" />
          )}
          <ul>
            <ExperienceParag
              date="06/2017 - Present"
              companyName="Shionogi"
              companyUrl="https://www.shionogi.com/"
              position="MSL"
            >
              {es
                ? translation.es.experience.shionogi
                : translation.en.experience.shionogi}
            </ExperienceParag>
            <ExperienceParag
              date="2015-2017"
              companyName="Ferrer InCode SL"
              position="Scientific Product Specialist"
            >
              {es
                ? translation.es.experience.ferrer
                : translation.en.experience.ferrer}
            </ExperienceParag>
            <ExperienceParag
              date="2013-2016"
              companyName="Clear Genetics SL"
              position="Cofounder & formation director"
            >
              {es
                ? translation.es.experience.clearGenetics
                : translation.en.experience.clearGenetics}
            </ExperienceParag>
            <ExperienceParag
              date="2012-2014"
              companyName="Fundació IMIM"
              companyUrl="https://www.imim.es/"
              position="Post-doctoral researcher"
            >
              {es
                ? translation.es.experience.imimPostdoc
                : translation.en.experience.imimPostdoc}
            </ExperienceParag>
            <ExperienceParag
              date="2012-2014"
              companyName="Acellera Labs SL"
              companyUrl="https://www.acellera.com/"
              position="Operations manager"
            >
              {es
                ? translation.es.experience.acellera
                : translation.en.experience.acellera}
            </ExperienceParag>
            <ExperienceParag
              date="2008-2012"
              companyName="Fundació IMIM"
              companyUrl="https://www.imim.es/"
              position="Pre-doctoral researcher"
            >
              {es
                ? translation.es.experience.imimPredoc
                : translation.en.experience.imimPredoc}
            </ExperienceParag>
            <ExperienceParag date="2006-2012" position="Private teacher">
              I have been giving private sciences lessons, specially maths,
              physics and chemistry to students from 16 years old to university.
            </ExperienceParag>
            <ExperienceParag
              date="2000-2002, 2005-2006"
              position="Traineeships"
            >
              Traineeships at{" "}
              <a href="https://wwws.echevarne.com/">
                Laboratorio de análisis clínicos Dr. Echevarne
              </a>
              ,{" "}
              <a href="http://www.insvallhebron.cat/">
                Institut Universitari Vall d’Hebron
              </a>{" "}
              and <a href="https://www.imim.es/">Fundació IMIM</a>
            </ExperienceParag>
          </ul>
        </Content>
      </PageLayout>
    );
  }
}

export default Experience;
