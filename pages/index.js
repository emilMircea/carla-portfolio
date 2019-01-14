import React, { Component } from "react";
import PageLayout from "./PageLayout";
import Sidebar from "../components/sidebar/Sidebar";
import Content from "../components/Content";
import ParagComponent from "../components/about/ParagComponent";
import TranslationLink from "../components/TranslationLink";
import PageTitle from "../components/PageTitle";
import { translation } from "../data/translation";
import CarlaName from '../static/Carla.svg';
import "./index.css";

class IndexPage extends Component {
  state = { lang: true };

  changeLang = () => {
    this.setState({ lang: !this.state.lang });
  };

  render() {
    const { lang } = this.state;
    return <PageLayout>
        <div className="sidebar-wrapper">
          <Sidebar path={this.props.url.pathname} />
        </div>
        <Content>
          <TranslationLink lang={lang} changeLang={this.changeLang} />
          <PageTitle imagePath={CarlaName} />
          {lang ? <ParagComponent translation={translation} /> : <ParagComponent translation={translation} lang="en" />}
        </Content>
      </PageLayout>;
  }
}

export default IndexPage;
