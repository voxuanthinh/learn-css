import React, { Component } from 'react';
import Anchor from 'grommet/components/Anchor';
import Header from 'grommet/components/Header';
import Heading from 'grommet/components/Heading';

import Title from 'grommet/components/Title';
import Menu from 'grommet/components/Menu';

import DownIcon from 'grommet/components/icons/base/Down';
import Notification from 'grommet/components/icons/base/Notification';
import Box from 'grommet/components/Box';
import Avatar from 'react-avatar';

export default class HeaderPage extends Component { 
  render() {
    return (<div>
        <Box appCentered={true}>
      <Header direction="row"
        justify="between"
        pad={{ horizontal: 'medium' }}>
        <Box direction="row">
          <Title>Magneto</Title>
          <Menu direction="row">
            <Anchor href="">
              Dashboard
          </Anchor>
            <Anchor href="">
              Job position
          </Anchor>
            <Anchor href="">
              Candidate
          </Anchor>
            <Menu label="Report">
              <Anchor href="#" className="active">
                Report 1
            </Anchor>
              <Anchor href="#">
                Report 2
            </Anchor>
            </Menu>
            <Menu label="Setup">
              <Anchor href="#" className="active">
                Setup 1
            </Anchor>
              <Anchor href="#">
                Setup 2
            </Anchor>
            </Menu>
          </Menu>
        </Box>
        <Box>
          <Menu inline={true} direction="row" justify="end" >
            <Anchor> <p> Số Dư <br /> <strong> 3.500.000 </strong></p> </Anchor>
            <Anchor >
              <Box className="full-height" direction="column" justify="center">
                <Notification size="small" /> 
              </Box>
            </Anchor>
            <Anchor>
              <Box direction="row" align="center">
                <Avatar size={50} round src="https://grommet.github.io/img/carousel-1.png" />
                <p> Ngân Anh<br /> ACB Softw... </p>
                <DownIcon />
              </Box>
            </Anchor>
          </Menu>
        </Box>
      </Header>
    </Box>
    <Box >
      <Header direction="row"
        justify="between"
        pad={{ horizontal: 'medium' }}
        colorIndex="grey-1-a" >
        <Box appCentered={true} pad={{"horizontal" : "none", "vertical": "medium"  }}> 
          <Heading> 
            Job position
          </Heading>
        </Box>
      </Header>
    </Box>
  </div>);
  }
}
