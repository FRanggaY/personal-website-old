//LIBRARIES
import MotionHoc from "../motion";
import React, { Fragment, Component } from 'react';


import Separator from '../../../components/common/separator/index';
import Footer from '../../../components/footer/index';


import SkillContainer from '../../skill/index';
import ExperienceContainer from '../../experience/index';

class ResumeComponent extends Component {

  render() {
    return (
      <Fragment>
        <Separator />
        
        <SkillContainer />
        <Separator />
        <ExperienceContainer />
        <Footer />
      </Fragment>
    )
  }
}

const Resume = MotionHoc(ResumeComponent);

export default Resume;