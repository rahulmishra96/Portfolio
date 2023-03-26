import React from "react";

const Testimonal = () => {
  return (
    <div id="testimonial">
      <h2>Testimonial</h2>
      <section>
        <TestimonalCard
          name={"Rahul"}
          feedback={"Your Teaching skills are so good"}
        />

        <TestimonalCard
          name={"Manish"}
          feedback={"Your Technical Skills are Amazing"}
        />

        <TestimonalCard
          name={"Aman"}
          feedback={"Amazing portfolio, Great work"}
        />
      </section>
    </div>
  );
};

const TestimonalCard = ({ name, feedback }) => (
  <article>
    <img
      src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
      alt="User"
    />
    <h4>{name}</h4>
    <p>{feedback}</p>
  </article>
);

export default Testimonal;
