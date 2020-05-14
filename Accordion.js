import React, { Component } from "react";
import "./Accordion.css";

export default class Accordion extends Component {
  static defaultProps = {
    sections: [
      {
        title: 'Section 1',
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      },
      {
        title: 'Section 2',
        content: 'Cupiditate tenetur aliquam necessitatibus id distinctio quas nihil ipsam nisi modi!',
      },
      {
        title: 'Section 3',
        content: 'Animi amet cumque sint cupiditate officia ab voluptatibus libero optio et?',
      },
      {
        title: 'Section 4',
        content: 'testing section',
      },
      {
        title: 'Section 5',
        content: 'another testing section!!!',
      },
      {
        title: 'Section 6',
        content: 'ok last testing section',
      },
    ],
  };

  state = {
    activeSectionIndex: null,
  };

  handleActive = (sectionIndex) => {
    this.setState({ activeSectionIndex: sectionIndex });
  };

  renderItem(section, idx, activeSectionIndex) {
    return (
      <li className="Accordion__item" key={idx}>
        <button type="button" onClick={() => this.handleActive(idx)}>
          {section.title}
        </button>
        {activeSectionIndex === idx && <p>{section.content}</p>}
      </li>
    );
  }

  render() {
    const { activeSectionIndex } = this.state;
    const { sections } = this.props;
    return (
      <ul className="Accordion">
        {sections.map((section, idx) =>
          this.renderItem(section, idx, activeSectionIndex)
        )}
      </ul>
    );
  }
}
