import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import './css/roadmap.css';

interface FAQItem {
  question: string;
  answer: string;
}

const faqItems: FAQItem[] = [
  {
    question: "How flexible are Carspace's membership plans?",
    answer: "Our membership plans are designed with flexibility in mind. We offer monthly, quarterly, and annual options with the ability to upgrade or modify your plan as your needs change. All plans include 24/7 access, dedicated parking spaces, and our premium amenities. Members can also pause their membership for up to 3 months per year."
  },
  {
    question: "What kind of events and networking opportunities does Carspace provide?",
    answer: "We host regular events including car shows, tech talks, industry meetups, and networking sessions. Our monthly 'Cars & Coffee' gatherings are particularly popular. We also organize exclusive member-only events, workshops with industry experts, and annual conventions that bring together car enthusiasts from across the region."
  },
  {
    question: "Can I tour the Carspace before committing to a membership?",
    answer: "Absolutely! We encourage potential members to schedule a guided tour of our facilities. During the tour, you'll see our parking areas, maintenance facilities, meeting spaces, and learn about all the amenities we offer. Tours are available seven days a week and can be booked through our website or by calling us."
  },
  {
    question: "Is Carspace suitable for remote teams and distributed workforces?",
    answer: "Yes, Carspace is ideal for remote and distributed teams. We offer digital access cards, remote booking systems, and 24/7 security monitoring. Our spaces are equipped with high-speed internet, video conferencing facilities, and flexible meeting areas that can accommodate both in-person and virtual team members."
  },
];

const Roadmap = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="roadmap-section">
      <div className="roadmap-container">
        <div className="roadmap-header">
          <h2>Your Roadmap to<br />Carspace Clarity</h2>
          <p className="subtitle">
            Frequently asked questions ordered by popularity.
            Remember that if the visitor has not committed to the call
            to action, they may still have questions (doubts) that can
            be answered.
          </p>
        </div>

        <div className="faq-container">
          {faqItems.map((item, index) => (
            <div 
              key={index} 
              className={`faq-item ${openIndex === index ? 'open' : ''}`}
            >
              <button 
                className="faq-question"
                onClick={() => toggleQuestion(index)}
              >
                <span>{item.question}</span>
                <ChevronDown className="icon" />
              </button>
              <div className="faq-answer">
                <div className="answer-content">
                  {item.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Roadmap;