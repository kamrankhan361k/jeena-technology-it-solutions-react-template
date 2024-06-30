import { Fragment, useCallback, useState } from "react";
import { Accordion } from "react-bootstrap";

const defaultAccordionData = [
  {
    id: 1,
    title: "Build A Group Chat App With Vanilla JS, Twilio And Node.js",
  },
  {
    id: 2,
    title:
      "Measuring The Performance Of Typefaces For Users Part Ukraine, A Charity Conference On The Future Of Tech ?",
    largeDescription: true,
  },
  {
    id: 3,
    title:
      "How To Apply UX Principles To Embedded Systems: Learnings From The Field ?",
  },
  {
    id: 4,
    title:
      "Smashing Podcast Episode 47 With Sara Soueidan: Why Does Accessibility Matter?",
  },
  {
    id: 5,
    title:
      "How To Apply UX Principles To Embedded Systems: Learnings From The Field ?",
  },
  {
    id: 6,
    title: "Rethinking Server-Timing As A Critical Monitoring Tool ?",
  },
  {
    id: 7,
    title:
      "How To Use Google CrUX To Analyze And Compare The Performance Of JS Frameworks ?",
  },
  {
    id: 8,
    title:
      "Smashing Podcast Episode 47 With Sara Soueidan: Why Does Accessibility Matter?",
  },
];

const JeenaAccordion = ({ defaultActive, accordions, accordionsData }) => {
  const [active, setActive] = useState(defaultActive ? defaultActive : 2);
  const [data, setData] = useState(
    accordionsData ? accordionsData : defaultAccordionData
  );
  const toggleAccordion = useCallback(
    (value) => {
      setActive(value === active ? null : value);
    },
    [active]
  );

  return (
    <Accordion defaultActiveKey={active}>
      {data.map(
        (accordion) =>
          accordions.includes(accordion.id) && (
            <div className="accordion-item">
              <h5 className="accordion-header">
                <Accordion.Toggle
                  as="button"
                  className={`accordion-button ${
                    accordion.id === active ? "" : "collapsed"
                  }`}
                  eventKey={accordion.id}
                  onClick={() => toggleAccordion(accordion.id)}
                >
                  {accordion.title}
                </Accordion.Toggle>
              </h5>
              <Accordion.Collapse
                eventKey={accordion.id}
                data-bs-parent="#faq-accordion"
              >
                <div className="accordion-body">
                  {accordion.largeDescription ? (
                    <Fragment>
                      <hr />
                      <div className="row">
                        <div className="col-lg-6">
                          <p>
                            On the other hand, we denounce with righteous
                            indignation and dislike men who are so beguiled and
                            demoralized by the charms of pleasure of the moment
                            blinded by desire, that they cannot foresee the pain
                            and trouble bound
                          </p>
                          <ul className="list-style-one my-15">
                            <li>Comprehensive UI/UX Assessment</li>
                            <li>Deep Contextual Research and 360° Planning</li>
                            <li>Wireframing &amp; Prototyping</li>
                          </ul>
                        </div>
                        <div className="col-lg-6 my-15 text-lg-end">
                          <img
                            src="assets/images/about/inner-faq.jpg"
                            alt="Faqs"
                          />
                        </div>
                      </div>
                    </Fragment>
                  ) : (
                    <p>
                      Sorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Numquam incidunt debitis magnam sit dicta asperiores
                      quidem cum, blanditiis harum non nulla, esse sapiente
                      doloremque, dolores natus! Harum consectetur saepe iure
                      obcaecati illo, maiores minima in dolorem, deleniti unde
                      aut similique fugit earum. Numquam ut ex ipsum molestiae,
                      consequatur obcaecati? Velit.
                    </p>
                  )}
                </div>
              </Accordion.Collapse>
            </div>
          )
      )}
    </Accordion>
  );
};
export default JeenaAccordion;

const JeenaAccordion2 = ({ accordionsData }) => {
  const [active, setActive] = useState(1);
  const toggleAccordion = useCallback(
    (value) => {
      setActive(value === active ? null : value);
    },
    [active]
  );

  return (
    <Accordion defaultActiveKey={active}>
      {accordionsData.map((accordion) => (
        <div className="accordion-item">
          <h5 className="accordion-header">
            <Accordion.Toggle
              as="button"
              className={`accordion-button ${
                accordion.id === active ? "" : "collapsed"
              }`}
              eventKey={accordion.id}
              onClick={() => toggleAccordion(accordion.id)}
            >
              {accordion.title}
            </Accordion.Toggle>
          </h5>
          <Accordion.Collapse
            eventKey={accordion.id}
            data-bs-parent="#faq-accordion"
          >
            <div className="accordion-body">
              <p>
                Sed ut perspiciatis unde omniste natus voluptatem accusantium
                doloremque laudantium totam rem aperiam quae abillo inventore
                veritatis quasi architecto beatae vitae dicta sunt explicabo.
              </p>
            </div>
          </Accordion.Collapse>
        </div>
      ))}
    </Accordion>
  );
};
export { JeenaAccordion2 };
