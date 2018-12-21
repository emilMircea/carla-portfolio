import React, { Component } from 'react'
import { CSSTransition } from 'react-transition-group';
import Header from "../components/Head";
import Sidebar from "../components/sidebar/Sidebar";
import Content from "../components/Content";
import "./index.css";

const Layout = (props) => (
  <div className="grid-container">
    {props.children}
  </div>
)

const Fade = ({children, ...props}) => {
  return (
    <CSSTransition {...props} timeout={1000} className="fade">
      {children}
    </CSSTransition>
  )
}



class Title extends Component {
  static defaultProps = { initialShow: false }
  state = { show: this.props.initialShow }
  toggle = () => {
    this.setState(({ show }) => ({ show: !show }))
  }
  render() {
    
    return <div>
        <button onClick={this.toggle}>Toggle</button>
        <Fade in={this.state.show}>
          <h1>{this.props.title}</h1>
        </Fade>
      </div>;
  }
}


const Index = (props) => {
  return <div className="grid-container">
      <div className="sidebar-wrapper">
        <Sidebar path={props.url.pathname} />
      </div>
      <div className="Content">
        <Content>
          {/* <h1>About me</h1> */}
          <Title title='about me' />
          <p>
            I am medical/scientific advisor with experience both in and
            outside academia. Some of my achievements on my current work
            include performing key changes in the products I am responsible
            of, improving their interpretation and the acceptation of the
            clients. I have represented the company national and
            internationally, both in trainings to the sales reps and
            participating in congresses. Thanks to my previous experience in
            the research field, I have been involved in research projects of
            the company, including the phases of design, analysis and
            interpretation of results. I am familiarized with management
            activities and I am capable of working on several related and
            unrelated tasks contemporaneously. I also created my own company,
            with the aim to perform genetic analyses on different diseases for
            research investigators and to perform trainings on the genetic
            field.
          </p>
          <p>
            Thanks to my previous experience in the research field, I have
            been involved in research projects of the company, including the
            phases of design, analysis and interpretation of results. I am
            familiarized with management activities and I am capable of
            working on several related and unrelated tasks contemporaneously.
            I also created my own company, with the aim to perform genetic
            analyses on different diseases for research investigators and to
            perform trainings on the genetic field.
          </p>
        </Content>
      </div>
    </div>;
};

export default Index;
