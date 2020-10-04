import React from "react";
import detectBrowserLanguage from 'detect-browser-language'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import Paper from '@material-ui/core/Paper';
import StarIcon from '@material-ui/icons/Star';
import WorkIcon from '@material-ui/icons/Work';
import SchoolIcon from '@material-ui/icons/School';
import 'react-vertical-timeline-component/style.min.css';


export default function Dashboard() {
  return (
    <div>
      
      {detectBrowserLanguage().toLowerCase() === "pt-br" &&
        <Paper elevation={3} style={{padding: '15px'}}>
          Seja muito bem vindx ao <strong>startuphacks.me </strong>
          <br />
          Nós reunimos todas as plataformas, ferramentas e serviços mais utilizados pelos startupeiros no mundo inteiro.
          <br />
          Este roadmap é o primeiro hack que você encontrará aqui.
          <br />
          Siga o fluxo de criação de uma startup* e escolha os melhores utilitários para te ajudar em cada uma das etapas.
          
        </Paper>
      }

      {detectBrowserLanguage().toLowerCase() !== "pt-br" &&
        <Paper elevation={3} style={{padding: '15px'}}>
          Welcome to <strong>startuphacks.me</strong>
          <br />
          We bring together all the platforms, tools, and services most used by startupers worldwide.
          <br />
          This roadmap is the first hack you will find here.
          <br />
          Follow the startup creation flow * and choose the best utilities to help you in each step.
        </Paper>
      }
      
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentArrowStyle={{ borderRight: '7px solid  #8B1A1A' }}
          iconStyle={{ background: '#59C9A5', color: '#fff' }}
          icon={<WorkIcon />}
        >

        <a href="/section/education" style={{color: 'inherit'}}>
        {detectBrowserLanguage().toLowerCase() === "pt-br" &&
          <div>
            <h3 className="vertical-timeline-element-title">Conhecimento</h3>
            <p>
              É através de conhecimento que se ganha o jogo. Aprenda desde novas técnicas de venda até finanças ;)
            </p>
          </div>
        }

        {detectBrowserLanguage().toLowerCase() !== "pt-br" &&
          <div>
            <h3 className="vertical-timeline-element-title">Educate Yourself</h3>
            <p>
            Knowledge is the key to win this game. Learn from sales to finance ;)
            </p>
          </div>
        }
        </a>

        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          iconStyle={{ background: '#8B1A1A', color: '#fff' }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">Art Director</h3>
          <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>
          <p>
            Creative Direction, User Experience, Visual Design, SEO, Online Marketing
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          iconStyle={{ background: '#8B1A1A', color: '#fff' }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">Web Designer</h3>
          <h4 className="vertical-timeline-element-subtitle">Los Angeles, CA</h4>
          <p>
            User Experience, Visual Design
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
         iconStyle={{ background: '#8B1A1A', color: '#fff' }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">Web Designer</h3>
          <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>
          <p>
            User Experience, Visual Design
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">Content Marketing for Web, Mobile and Social Media</h3>
          <h4 className="vertical-timeline-element-subtitle">Online Course</h4>
          <p>
            Strategy, Social Media
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">Agile Development Scrum Master</h3>
          <h4 className="vertical-timeline-element-subtitle">Certification</h4>
          <p>
            Creative Direction, User Experience, Visual Design
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">Bachelor of Science in Interactive Digital Media Visual Imaging</h3>
          <h4 className="vertical-timeline-element-subtitle">Bachelor Degree</h4>
          <p>
            Creative Direction, Visual Design
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
          icon={<StarIcon />}
        />
      </VerticalTimeline>
     
    {detectBrowserLanguage().toLowerCase() === "pt-br" &&
      <Paper elevation={3} style={{padding: '15px'}}>
      *Este roadmap baseia-se em um fluxo genérico de criação de uma startup, para fins de organização. As etapas podem variar de acordo com cada objetivo.
      </Paper>
    }

    {detectBrowserLanguage().toLowerCase() !== "pt-br" &&
      <Paper elevation={3} style={{padding: '15px'}}>
      *This roadmap was built upon a generic startup flow for organizational purposes and may vary for each case.
      </Paper>
    }
    </div>
  );
}
