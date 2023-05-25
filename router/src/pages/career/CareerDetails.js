import { useLoaderData } from "react-router-dom";

export default function CareerDetails() {
  const career = useLoaderData();

  return (
    <div className="career-details">
      <h2>Career details for: {career.title}</h2>
      <p>Starting salary: {career.salary}</p>
      <p>Location: {career.location}</p>
      <div className="details">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
          mollitia facilis cupiditate magnam eos soluta! Molestiae quidem nihil,
          ex aliquid eius, placeat rem laborum commodi quis sequi, tempore
          officia quas.
        </p>
      </div>
    </div>
  );
}

export const careerDetailsLoader = async ({ params }) => {
  const { id } = params;
  const res = await fetch(`http://localhost:4000/careers/${id}`);

  if (!res.ok) {
    throw Error("Coud not find the career!");
  }

  return res.json();
};

