import React, { useState } from "react";
import Navbar from "../../Components/Others/Navbar";
import Footer from "../../Components/Others/Footer";

const Gallery = () => {
  const images = [
    {
      src: "DSC_0042.jpg",
    },
    {
      src: "faji (1).jpg",
    },
    {
      src: "faji (2).jpg",
    },
    {
      src: "faji (3).jpg",
    },
    {
      src: "faji (4).jpg",
    },
    {
      src: "faji (5).jpg",
    },
    {
      src: "faji (6).jpg",
    },
    {
      src: "faji (7).jpg",
    },
    {
      src: "faji (8).jpg",
    },
    {
      src: "faji (9).jpg",
    },
    {
      src: "faji (10).jpg",
    },
    {
      src: "faji (11).jpg",
    },
    {
      src: "faji (12).jpg",
    },
    {
      src: "faji (13).jpg",
    },
    {
      src: "faji (14).jpg",
    },
    {
      src: "faji (15).jpg",
    },
    {
      src: "faji (16).jpg",
    },
    {
      src: "faji (17).jpg",
    },
    {
      src: "faji (18).jpg",
    },
    {
      src: "faji (19).jpg",
    },
    {
      src: "faji (20).jpg",
    },
    {
      src: "faji (21).jpg",
    },
    {
      src: "faji (22).jpg",
    },
    {
      src: "faji (23).jpg",
    },
    {
      src: "faji (24).jpg",
    },
    {
      src: "faji (25).jpg",
    },
    {
      src: "faji (26).jpg",
    },
    {
      src: "faji (27).jpg",
    },
    {
      src: "faji (28).jpg",
    },
    {
      src: "faji (29).jpg",
    },
    {
      src: "faji (30).jpg",
    },
    {
      src: "faji (31).jpg",
    },
    {
      src: "faji (32).jpg",
    },
    {
      src: "faji (33).jpg",
    },
    {
      src: "faji (34).jpg",
    },
    {
      src: "faji (35).jpg",
    },
    {
      src: "faji (36).jpg",
    },
    {
      src: "faji (37).jpg",
    },
    {
      src: "faji (38).jpg",
    },
    {
      src: "faji (39).jpg",
    },
    {
      src: "faji (40).jpg",
    },
    {
      src: "faji (41).jpg",
    },
    {
      src: "faji (42).jpg",
    },
    {
      src: "faji (43).jpg",
    },
    {
      src: "faji (44).jpg",
    },
    {
      src: "faji (45).jpg",
    },
    {
      src: "faji (46).jpg",
    },
    {
      src: "faji (47).jpg",
    },
    {
      src: "faji (48).jpg",
    },
    {
      src: "faji (49).jpg",
    },
    {
      src: "faji (50).jpg",
    },
    {
      src: "faji (51).jpg",
    },
    {
      src: "faji (52).jpg",
    },
    {
      src: "faji (53).jpg",
    },
    {
      src: "faji (54).jpg",
    },
    {
      src: "faji (55).jpg",
    },
    {
      src: "faji (56).jpg",
    },
    {
      src: "faji (57).jpg",
    },
    {
      src: "faji (58).jpg",
    },
    {
      src: "faji (59).jpg",
    },
    {
      src: "faji (60).jpg",
    },
    {
      src: "faji (61).jpg",
    },
    {
      src: "faji (62).jpg",
    },
    {
      src: "faji (63).jpg",
    },
    {
      src: "faji (64).jpg",
    },
    {
      src: "faji (65).jpg",
    },
    {
      src: "faji (66).jpg",
    },
    {
      src: "faji (67).jpg",
    },
    {
      src: "faji (68).jpg",
    },
    {
      src: "faji (69).jpg",
    },
    {
      src: "faji (70).jpg",
    },
    {
      src: "faji (71).jpg",
    },
    {
      src: "faji (72).jpg",
    },
    {
      src: "faji (73).jpg",
    },
    {
      src: "faji (74).jpg",
    },
    {
      src: "faji (75).jpg",
    },
    {
      src: "faji (76).jpg",
    },
    {
      src: "faji (77).jpg",
    },
    {
      src: "faji (78).jpg",
    },
    {
      src: "faji (79).jpg",
    },
    {
      src: "faji (80).jpg",
    },
    {
      src: "faji (81).jpg",
    },
    {
      src: "faji (82).jpg",
    },
  ];

  const [expandedImage, setExpandedImage] = useState(null);

  const handleClick = (index) => {
    if (expandedImage) {
      setExpandedImage("");
    } else {
      setExpandedImage(index);
    }
  };

  return (
    <div>
      <div>
        <Navbar galleryBg={true} />
      </div>

      <div className="image-grid">
        {images.map((image, index) => (
          <div
            key={index}
            className={`image-grid-item ${
              expandedImage === index ? "expanded" : ""
            }`}
            onClick={() => handleClick(index)}
          >
            <img src={image.src} alt="{alt}" />
          </div>
        ))}
      </div>
      <div>
        <Footer galleryBg={true} />
      </div>
    </div>
  );
};

export default Gallery;
