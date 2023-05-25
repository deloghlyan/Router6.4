import { useState } from "react";
import { Navigate } from "react-router-dom";

export default function About() {
  const [user, setUser] = useState('Jack');

  if(!user) {
    return <Navigate to="/" replace={true} />
  }
  return (
    <div className="about">
      <h2>About Us</h2>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae quos
        aperiam iure necessitatibus quia, omnis quod praesentium, doloremque,
        iste ullam fugiat. Error atque fugit, quod voluptas veritatis facere
        facilis. Possimus, aperiam culpa! Maiores doloribus similique
        perferendis consequatur voluptates cumque ipsam!
      </p>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae quos
        aperiam iure necessitatibus quia, omnis quod praesentium, doloremque,
        iste ullam fugiat. Error atque fugit, quod voluptas veritatis facere
        facilis. Possimus, aperiam culpa! Maiores doloribus similique
        perferendis consequatur voluptates cumque ipsam!
      </p>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae quos
        aperiam iure necessitatibus quia, omnis quod praesentium, doloremque,
        iste ullam fugiat. Error atque fugit, quod voluptas veritatis facere
        facilis. Possimus, aperiam culpa! Maiores doloribus similique
        perferendis consequatur voluptates cumque ipsam!
      </p>

      <button onClick={() => setUser(null)}>Logout</button>
    </div>
  );
}
