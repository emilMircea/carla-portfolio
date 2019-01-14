import React from "react";
import PageLayout from "./PageLayout";
import Sidebar from "../components/sidebar/Sidebar";
import Content from "../components/Content";
import EdParag from "../components/education/EdParag";
import PageTitle from "../components/PageTitle";
import letterE from '../static/letter_e.svg'
import "./index.css";
import "animate.css/animate.min.css";

const Education = props => {
  return (
    <PageLayout>
      <Sidebar path={props.url.pathname} bg="education" />
      <div className="sidebar-wrapper" />
      <Content>
        <PageTitle imagePath={letterE} title="Education" />

        <ul className="animated fadeIn" style={{ lineHeight: "2rem" }}>
          <EdParag>
            September 2008 – June 2012 PhD in Biomedical Research, Pompeu Fabra
            University, Barcelona (Spain).{" "}
            <a href="#nowhere">See the thesis here.</a>
          </EdParag>
          <EdParag>
            September 2007 – August 2008 Master in Biomedical Research, Pompeu
            Fabra University, Barcelona (Spain).
          </EdParag>
          <EdParag>
            September 2005 – August 2007 Bachelor’s Degree in Biochemistry,
            Autonomous University of Barcelona, Barcelona (Spain).
          </EdParag>
          <EdParag>
            September 2002 – August 2006 Bachelor’s Degree in Biology,
            Autonomous University of Barcelona, Barcelona (Spain).
          </EdParag>
          <EdParag>
            September 2000 – July 2002 High School in Biological Sciences,
            Lestonnac, Barcelona (Spain).
          </EdParag>
        </ul>
        <h1>LANGUAGES</h1>
        <ul>
          <EdParag>Catalan - Native speaker</EdParag>
          <EdParag>Spanish - Native speaker</EdParag>
          <EdParag>English - Professional working proficiency</EdParag>
          <EdParag>Italian - Professional working proficiency</EdParag>
        </ul>
      </Content>
    </PageLayout>
  );
};

export default Education;
