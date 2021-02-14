import React, { useState, useEffect } from "react";
// import Backend from "../Backend";
import Banner from "../components/Banner";
import PureModal from "react-pure-modal";
import "react-pure-modal/dist/react-pure-modal.min.css";
import "./pages.css";

function Kijk() {
  const [modal, setModal] = useState(false);

  const [movie, setMovie] = useState();
  // useEffect(() => {
  //   async function fetchData() {
  //     const response = await Backend.fetchMovies();
  //     setMovie(response.data);
  //   }
  //   fetchData();
  // }, []);

  return (
    <div className="kijk">
      <Banner movie={movie} />
      <button className="button" onClick={() => setModal(true)}>
        Open simple modal
      </button>
      <h1>Kijk opnieuw</h1>

      <PureModal
        header="Your header"
        footer={
          <div>
            <button>Cancel</button>
            <button>Save</button>
          </div>
        }
        isOpen={modal}
        closeButton="close"
        closeButtonPosition="header"
        scrollable={false}
        onClose={() => {
          setModal(false);
          return true;
        }}
      >
        <p style={{color: "red"}} >
          
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
          nisi nulla nam, saepe libero odio veniam voluptatum, deleniti amet
          ducimus necessitatibus facilis vero ut reiciendis in, iure assumenda
          explicabo perspiciatis. Lorem, ipsum dolor sit amet consectetur
          adipisicing elit. Harum nulla ipsum culpa eaque sequi earum quis ab
          cum? Dolore, ratione quae? Error sed amet quis molestiae repudiandae
          provident iusto. Lorem ipsum dolor sit, amet consectetur adipisicing
          elit. Asperiores in excepturi laboriosam perferendis nam. Explicabo
          cupiditate perspiciatis tempora numquam neque, quos ullam omnis est a
          natus repellendus sint, nobis et? Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Dolorum a, quia ea nisi distinctio ex.
          Quaerat minus, reprehenderit voluptas consequatur repudiandae,
          facilis, totam accusamus necessitatibus voluptates doloremque vero
          maiores quos. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Maiores inventore sapiente quisquam tenetur cumque laudantium sequi
          ipsum laboriosam nostrum. Quasi sequi rem quod ratione dignissimos
          dicta amet optio molestias nobis. Lorem, ipsum dolor sit amet
          consectetur adipisicing elit. Quos nemo eligendi temporibus quia,
          mollitia itaque inventore ipsam, quisquam excepturi, quaerat modi in
          consectetur dolorum vitae natus atque? Dolore, id qui? Your
          contentghghghghghghghghghghghghghghgh Lorem ipsum dolor, sit amet
          consectetur adipisicing elit. Facilis, aliquid. Dolores eius commodi
          molestiae cumque voluptates tenetur, repudiandae perspiciatis
          similique, quisquam suscipit recusandae id consectetur aliquid!
          Consectetur deleniti ut sint. Lorem ipsum dolor sit, amet consectetur
          adipisicing elit. Velit delectus nemo deleniti ducimus nam inventore
          quisquam numquam ea atque nulla dicta incidunt quidem tempora
          dignissimos eos corrupti ratione, omnis commodi.
        </p>
      </PureModal>
    </div>
  );
}

export default Kijk;
