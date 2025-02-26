import React, { useEffect, useRef } from "react";
import "./css/Explore.css";

const carCategories = [
  {
    type: "Sedan",
    image:
      "https://s3-alpha-sig.figma.com/img/ef51/030d/320ee8895a9ac529f790cbd17a27bfcc?Expires=1740960000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=alQ7QYf47uq0~GqkQzDViApW1Ehs2BZKWsOv-uQDZjX5kxt9gzbJyURWKZ14GlQjPGAzTQOvKk8Tv1JGd5JHjQ5lnlBqKk7Mh87KJp6QNfwvHzI-CfTU7uY5k3E2sxwpufq~Sx8bJuq8ebaZ12n14358vZdJ9c2IKCEb4A1RvYkZsPBhzs686L~HH8tHIvNlmiejxAhsVUpobDMi5kakQXcpSbIqSoYHXKduUky3L~ucr109UYe~uuanZRMqeIMBFsi~dtX2KSJ1atK3-NnPi8WjIIayJ8zoAIHPbu6vornrB9ZzQ-EaJxlF6mm-x~3T5s7n5PsosLvCNnYXUqb-yA__",
  },
  {
    type: "Campers",
    image:
      "http://s3-alpha-sig.figma.com/img/5773/e5df/76526f2841b9a97b42bb46a6d16a5d56?Expires=1740960000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=FIK~kBata~v2xiYpfoDLF-NtFa71IgBNjg8rFpmUNrYYNKIbkmaeqb7ni2xDj25Gu7-n1VjaQjgfeHy4802cBcWhdW4diHZ5GRpKFeW5nM3XA5i1hfUcGLP19Q6QcRNcYEveFq2knR1Y-1HGwIohH5~WUyiNkrBM6SR5Q10~F~4aoKma3j92zyTrCidbDoKeqLeOLBFwPsUDE9gabH0utkwHcUZtWZqp3P2gHFb7jRa53pj5fHXDC15irYIi8PsofpVZu1WQQZUQzxson~TI8oRZZ20kGNJy4QaDpSTSMrEKnhuBCmg0KXBMrIOZl~CEdOLNgarM6o48somp0seMAw__",
  },
  {
    type: "Cabriolet",
    image:
      "https://s3-alpha-sig.figma.com/img/5e04/fae0/d22cee5d2e778223eac233270d60a20a?Expires=1740960000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=SUzaAu9QbuSMt-yj04nPkzEe9bQakV3U8yVjwydccjRNvm4~t~qjWh54y-eZiRyk9dDLgoeSPFwk3KoLX7J5eHHqX47s1Z9CZK5LWvlTKdb7sl3u2JMl7OrGhrw~Fy6XhdbFA4MrCRDetEvhtS~5RaAfb4l0YzU~Yqhz3urS5udgzABhwXW46St8P6HcYgc~VylrvNoZvBBPjSuxDhIS0SzYvwP76FcxasXYrHGfUo8-2BJe7awgoB7rcV9~VbJHzlh~ihP8gZJHj5F8Zt-lpDyfl54V7BhI6fTz7-cGbFNlIM6LDodYop6V55K37r67NpObG2GOj8L4klRjgql03Q__",
  },
  {
    type: "Pickup",
    image:
      "https://s3-alpha-sig.figma.com/img/d263/76ee/c21122a0144a4e0388759e80ed2bd5e2?Expires=1740960000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=iKQTX-GIbmJWR8VTGcQsTmpZk4aW3bW9X9hJH9u95Xo9s8b1QJLtUAX1kzEWI3CQ3VJP1~6rhWW-CnXN2-1Vn4CLmc23YWCKknoipZwjpdwBPkV4vNVfsRbAS~NrYbnnzpZ3CM7n8-Q2m~f9MIPsjbsuo49nO384ywiX5FFcEP~HRK9OM2s9HvgT2CslS3y4rt0iaaCoEwc4QxLdUH~XwSLtvcV6sEjJpDynXnFrdCvnGxj~8xVA5Q0Rn7psnz7XRKPCYYvu8uXkw~3iRZhZXmxSjPEiqnSgX4sSrDIxYXnnNuxvdxaCri2LjZ29Idmp3u8v78dNe3kg-OuXO2f9Jw__",
  },
  {
    type: "Supercar",
    image:
      "https://s3-alpha-sig.figma.com/img/67c3/7623/eb3fa51e7d419cd4d507cade821ff224?Expires=1740960000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=PoPfZ9n9Qg1wsIvUN5Dq-Lb1lz~drQGUPpD4OwqL~oJjkIPC4UsWkuyMOcXvZr4UMAuULq7HuX8VjQPmLQJNrg90TDZLvZ3fbJlsqo2cSoNMpzR1zfHq1Jl680HA8xtgTPxNssXPBGR3amXzRRm6sHz0bFfH6nEq1dYN7lpOQm4FUlgMXxBtrVtyw6yEzWcwQGCe7M9irP6H3hC8mK5w6zspL37Cmy3wgais28uibj4h~gOQmEaBprtKztjNuwj1Ev4OPs7DLQQJWjAgZv722mnfpBfFOSuQq3qa4A9hEiY7Ia6ZbdunsTNPTk~K6gOWD4lR3W82L7M0JCANRyjXmQ__",
  },
  {
    type: "Minivans",
    image:
      "https://californiarac.com/wp-content/uploads/2020/05/White-Chrystler_-7-1.jpg",
  },
];

const Explore = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer) return;

    const handleScroll = () => {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainer;

      if (scrollLeft+clientWidth>=scrollWidth - 10) {
        scrollContainer.scrollLeft = 0;
      }
      if (scrollLeft <= 0) {
        scrollContainer.scrollLeft=scrollWidth-clientWidth;
      }
    };

    scrollContainer.addEventListener("scroll", handleScroll);
    return () => scrollContainer.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="explore-section">
      <div className="explore-header">
        <div>
          <div className="red-accent"></div>
          <h2>Explore Our Cars</h2>
        </div>
        <button className="view-more-button">View more</button>
      </div>

      <div className="scroll-container" ref={scrollContainerRef}>
        <div className="car-categories">
          {carCategories.map((car, index) => (
            <div key={`original-${index}`} className="category-card">
              <div className="category-image">
                <img src={car.image} alt={car.type} />
              </div>
              <h3>{car.type}</h3>
            </div>
          ))}

          {carCategories.map((car, index) => (
            <div key={`duplicate-${index}`} className="category-card">
              <div className="category-image">
                <img src={car.image} alt={car.type} />
              </div>
              <h3>{car.type}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Explore;
