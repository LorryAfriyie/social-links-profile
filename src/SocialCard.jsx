import { Button } from "./components/button";
import image from "/avatar-jessica.jpeg";

export const SocialCard = () => {
  const buttonTitles = [
    "Github",
    "Frontend Mentor",
    "LinkedIn",
    "Twitter",
    "Instagram",
  ];

  const personDetails = [
    {
      name: "Jessica",
      surname: "Randall",
      city: "London",
      country: "United Kingdom",
      bio: "Front-end developer and avid reader.",
      img: image,
    },
  ];

  return (
    <div className="social-card">
      <div className="card">
        <img src={personDetails[0].img} alt={personDetails[0].img} />
        <h2>{personDetails[0].name + " " + personDetails[0].surname}</h2>
        <p className="location">
          {personDetails[0].city}, {personDetails[0].country}
        </p>
        <p className="bio">
          <q>{personDetails[0].bio}</q>
        </p>
        <div className="btn-group">
          {buttonTitles.map((x, index) => {
            return (
              <div key={index}>
                <Button name={x} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
