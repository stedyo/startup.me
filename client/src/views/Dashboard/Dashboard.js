import React from "react";
import detectBrowserLanguage from 'detect-browser-language'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import Paper from '@material-ui/core/Paper';
import StarIcon from '@material-ui/icons/Star';
import FaceIcon from '@material-ui/icons/Face';
import BubbleChart from "@material-ui/icons/BubbleChart";
import HelpIcon from '@material-ui/icons/ThumbUpAlt';
import LibraryBooks from "@material-ui/icons/LibraryBooks";
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import BuildIcon from '@material-ui/icons/Build';
import DirectionsRunIcon from '@material-ui/icons/DirectionsRun';
import AppsIcon from '@material-ui/icons/Apps';
import 'react-vertical-timeline-component/style.min.css';


export default function Dashboard() {
  return (
    <div>
      
      {detectBrowserLanguage().toLowerCase() === "pt-br" &&
        <Paper elevation={3} style={{padding: '15px', width: '95%', margin: '0 auto'}}>
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
      
      {/* KNOWLEDGE */}
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentArrowStyle={{ borderRight: '7px solid  #59C9A5' }}
          iconStyle={{ background: '#59C9A5', color: '#fff' }}
          icon={<LibraryBooks />}
        >

        <a href="/section/education" style={{color: 'inherit'}}>
        {detectBrowserLanguage().toLowerCase() === "pt-br" &&
          <div>
            <h3 className="vertical-timeline-element-title">Conhecimento</h3>
            <p>
              É através de conhecimento que se ganha o jogo. Aprenda desde novas técnicas de venda até finanças.
            </p>
          </div>
        }

        {detectBrowserLanguage().toLowerCase() !== "pt-br" &&
          <div>
            <h3 className="vertical-timeline-element-title">Educate Yourself</h3>
            <p>
            Knowledge is the key to win this game. Learn from sales to finance.
            </p>
          </div>
        }
        </a>
       </VerticalTimelineElement>

        {/* PARTNERSHIP */}
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentArrowStyle={{ borderRight: '7px solid  #F71735' }}
          iconStyle={{ background: '#F71735', color: '#fff' }}
          icon={<PeopleAltIcon />}
        >
        <a href="/section/partnership" style={{color: 'inherit'}}>
        {detectBrowserLanguage().toLowerCase() === "pt-br" &&
          <div>
            <h3 className="vertical-timeline-element-title">Encontre Parceiros</h3>
            <p>
              Startups com co-fundadores e mentores são mais propensos ao sucesso. Encontre plataformas de conexão nesta seção.
            </p>
          </div>
        }

        {detectBrowserLanguage().toLowerCase() !== "pt-br" &&
          <div>
            <h3 className="vertical-timeline-element-title">Co-founders and Mentors</h3>
            <p>
            Startups with co-founders and mentors are more likely to succeed. Find connection platforms in this section.
            </p>
          </div>
        }
        </a>

        </VerticalTimelineElement>

        {/* BUILD A MVP */}
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentArrowStyle={{ borderRight: '7px solid  #26547C' }}
          iconStyle={{ background: '#26547C', color: '#fff' }}
          icon={<BuildIcon />}
        >

        <a href="/section/buildmvp" style={{color: 'inherit'}}>
        {detectBrowserLanguage().toLowerCase() === "pt-br" &&
          <div>
            <h3 className="vertical-timeline-element-title">Prototipe</h3>
            <p>
              Comece a construir protótipos do seu produto ou serviço e evolua para um MVP completo. 
              Avalie a tração do seu usuário final.
            </p>
          </div>
        }

        {detectBrowserLanguage().toLowerCase() !== "pt-br" &&
          <div>
            <h3 className="vertical-timeline-element-title">Build the MVP</h3>
            <p>
              Start building prototypes of your product or service and evolve to a complete MVP. Evaluate the end-users traction.
            </p>
          </div>
        }
        </a>
         
        </VerticalTimelineElement>


        {/* PRODUCTIVITY / MANAGEMENT */}
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentArrowStyle={{ borderRight: '7px solid  #FFD23F' }}
          iconStyle={{ background: '#FFD23F', color: '#fff' }}
          icon={<AppsIcon />}
        >
          
        <a href="/section/management" style={{color: 'inherit'}}>
        {detectBrowserLanguage().toLowerCase() === "pt-br" &&
          <div>
            <h3 className="vertical-timeline-element-title">Produtividade</h3>
            <p>
             Coordene processos e pessoas através das plataformas mais utilizadas no mercado.
            </p>
          </div>
        }

        {detectBrowserLanguage().toLowerCase() !== "pt-br" &&
          <div>
            <h3 className="vertical-timeline-element-title">Management Tools</h3>
            <p>
              Coordinate your startup processes and people through the most used platforms on the market.
            </p>
          </div>
        }
        </a>

        </VerticalTimelineElement>

        {/* HELPFUL SERVICES */}
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          contentArrowStyle={{ borderRight: '7px solid  #9D79BC' }}
          iconStyle={{ background: '#9D79BC', color: '#fff' }}
          icon={<HelpIcon />}
        >
         
         <a href="/section/services" style={{color: 'inherit'}}>
        {detectBrowserLanguage().toLowerCase() === "pt-br" &&
          <div>
            <h3 className="vertical-timeline-element-title">Serviços</h3>
            <p>
             Precisa de um desenvolvedor de sistemas freelance? 
             De uma empresa para fazer contabilidade da sua startup? 
            </p>
          </div>
        }

        {detectBrowserLanguage().toLowerCase() !== "pt-br" &&
          <div>
            <h3 className="vertical-timeline-element-title">Helpful Services</h3>
            <p>
            Do you need a freelance developer?  A company to manage the accounting processes? 
            </p>
          </div>
        }
        </a>
        </VerticalTimelineElement>


        {/* MARKETING */}
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          contentArrowStyle={{ borderRight: '7px solid  #C2F970' }}
          iconStyle={{ background: '#C2F970', color: '#fff' }}
          icon={<BubbleChart />}
        >

        <a href="/section/marketing" style={{color: 'inherit'}}>
        {detectBrowserLanguage().toLowerCase() === "pt-br" &&
          <div>
            <h3 className="vertical-timeline-element-title">Marketing</h3>
            <p>
            Estabeleça a marca, alcance o público alvo, fidelize os usuários, cresça seu tráfego, gerencie redes sociais.
            </p>
          </div>
        }

        {detectBrowserLanguage().toLowerCase() !== "pt-br" &&
          <div>
            <h3 className="vertical-timeline-element-title">Marketing</h3>
            <p>
            Establish the brand, reach the target audience, retain users, grow your traffic, manage social networks.
            </p>
          </div>
        }
        </a>
          
        </VerticalTimelineElement>

        {/* MANAGE CLIENTS */}
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          contentArrowStyle={{ borderRight: '7px solid  #119DA4' }}
          iconStyle={{ background: '#119DA4', color: '#fff' }}
          icon={<FaceIcon />}
        >
        <a href="/section/clients" style={{color: 'inherit'}}>
        {detectBrowserLanguage().toLowerCase() === "pt-br" &&
          <div>
            <h3 className="vertical-timeline-element-title">Gerencie Clientes</h3>
            <p>
            Gerencie túnel de conversão de vendas e os processos de experiência do cliente.
            </p>
          </div>
        }

        {detectBrowserLanguage().toLowerCase() !== "pt-br" &&
          <div>
            <h3 className="vertical-timeline-element-title">Manage Clients</h3>
            <p>
            Manage sales conversion funnel and customer experience processes.
            </p>
          </div>
        }
        </a>
        </VerticalTimelineElement>


        {/* ACCELERATION PROGRAMS */}
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          contentArrowStyle={{ borderRight: '7px solid  #EF476F' }}
          iconStyle={{ background: '#EF476F', color: '#fff' }}
          icon={<DirectionsRunIcon />}
        >
        <a href="/section/acceleration" style={{color: 'inherit'}}>
        {detectBrowserLanguage().toLowerCase() === "pt-br" &&
          <div>
            <h3 className="vertical-timeline-element-title">Aceleração</h3>
            <p>
            Programas de aceleração ajudam a alavancar seu propósito e te colocam frente-a-frente com investidores.
            </p>
          </div>
        }

        {detectBrowserLanguage().toLowerCase() !== "pt-br" &&
          <div>
            <h3 className="vertical-timeline-element-title">Acceleration Programs</h3>
            <p>
            Acceleration programs leverage your purpose and put you face-to-face with investors.
            </p>
          </div>
        }
        </a>
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
