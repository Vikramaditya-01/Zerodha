import React, { useState } from "react";

function Team() {
  // State to track which bio is open
  const [openBio, setOpenBio] = useState(null);

  const toggleBio = (name) => {
    setOpenBio(openBio === name ? null : name);
  };

  const teamMembers = [
    {
      name: "Nikhil Kamath",
      role: "Co-founder & CFO",
      img: "https://zerodha.com/static/images/Nikhil.jpg",
      bio: "Nikhil is an astute and experienced investor, and he heads financial planning at Zerodha...",
    },
    {
      name: "Dr. Kailash Nadh",
      role: "CTO",
      img: "https://zerodha.com/static/images/Kailash.jpg",
      bio: "Kailash has a PhD in Artificial Intelligence & Computational Linguistics...",
    },
    {
      name: "Venu Madhav",
      role: "COO",
      img: "https://zerodha.com/static/images/Venu.jpg",
      bio: "Venu is the backbone of Zerodha, taking care of operations and ensuring that we are compliant...",
    },
    {
      name: "Hanan Delvi",
      role: "CCO",
      img: "https://zerodha.com/static/images/Hanan.jpg",
      bio: "We take pride in the way we support our clients, and Hanan is responsible for this...",
    },
    {
      name: "Seema Patil",
      role: "Director",
      img: "https://zerodha.com/static/images/Seema.jpg",
      bio: "Seema has been a key part of the Zerodha journey, leading various operational initiatives...",
    },
    {
      name: "Karthik Rangappa",
      role: "Chief of Education",
      img: "https://zerodha.com/static/images/karthik.jpg",
      bio: "Karthik is responsible for Varsity, the largest capital market education platform...",
    },
    {
      name: "Austin Prakesh",
      role: "Director Strategy",
      img: "https://zerodha.com/static/images/Austin.jpg",
      bio: "Austin drives strategy at Zerodha and focuses on long-term growth and planning...",
    },
  ];

  return (
    <div className="container">
      <div className="row mb-5">
        <h1 className="fs-3 text-center">People</h1>
      </div>
      <div
        className="row p-5 text-muted fs-6"
        style={{ lineHeight: "2.5", fontSize: "1.2rem" }}
      >
        <div className="col-5 p-5 mr-5 text-center">
          <img
            src="Media/images/nithinKamath.jpg"
            alt="Nitin Kamat"
            style={{ borderRadius: "50%", width: "275px", height: "275px" }}
          />
          <h2 className="fs-3 mt-2">Nithin Kamath</h2>
          <p className="text-muted">Founder & CEO</p>
        </div>
        <div className="col-7 p-5">
          <p>
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the
            hurdles he faced during his decade long stint as a trader. Today,
            Zerodha has changed the landscape of the Indian broking industry.
            <br />
            He is a member of the SEBI Secondary Market Advisory Committee
            (SMAC) and the Market Data Advisory Committee (MDAC).
            <br />
            Playing basketball is his zen.
            <br />
            Connect on <a href="https://nithinkamath.me/">Homepage</a> /{" "}
            <a href="https://tradingqna.com/u/nithin/summary">TradingQnA</a> /{" "}
            <a href="https://x.com/Nithin0dha">Twitter</a>
          </p>
        </div>
      </div>

      <div className="container mt-5">
        <div className="row text-center justify-content-center">
          {teamMembers.map((member) => (
            <div key={member.name} className="col-md-4 col-sm-6 mb-5">
              <div className="d-flex flex-column align-items-center">
                <div
                  className="rounded-circle overflow-hidden"
                  style={{
                    width: "150px",
                    height: "150px",
                    backgroundColor: "#ddd",
                  }}
                >
                  <img
                    src={member.img}
                    alt={member.name}
                    className="img-fluid"
                  />
                </div>
                <h5 className="mt-3">{member.name}</h5>
                <p className="text-muted">{member.role}</p>
                <p
                  className="text-primary"
                  style={{ cursor: "pointer" }}
                  onClick={() => toggleBio(member.name)}
                >
                  Bio {openBio === member.name ? "⌃" : "⌄"}
                </p>
                {openBio === member.name && (
                  <p
                    className="text-muted text-center"
                    style={{ maxWidth: "300px" }}
                  >
                    {member.bio}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Team;
