import { useState } from "react";

interface AccordionItem {
  title: string;
  content: string;
}

interface AccordionProps {
  items: AccordionItem[];
  theme?: string;
}

const Accordion: React.FC<AccordionProps> = ({ items, theme }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const onTitleClick = (index: number) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div>
      {items.map((item, index) => {
        const isActive = index === activeIndex && `${theme}-Accordion-isActive`;
        const isNotActive =
          index !== activeIndex && `${theme}-Accordion-isActive`;
        const arrowDirection =
          index === activeIndex && `${theme}-Accordion-arrowDirection`;

        return (
          <div key={index}>
            <div
              className={`${theme}-Accordion-titleContainer  ${isNotActive} `}
              onClick={() => onTitleClick(index)}
            >
              <span className={`${theme}-Accordion-title`}>{item.title}</span>
              <div
                className={`${theme}-Accordion-downVector   ${arrowDirection}`}
              />
            </div>
            <div className={`${isActive}`}>
              {isActive && (
                <p className={`${theme}-Accordion-content`}>{item.content}</p>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Accordion;
Accordion.defaultProps = {
  theme: "Acord",
};
