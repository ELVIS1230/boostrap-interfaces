import { useState } from "react";
import { ImagenesGatos } from "./ImagesGatos";

export function Paginador (){
    console.log(ImagenesGatos)

    const imagesPerPage = 5;
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastImage = currentPage * imagesPerPage;
  const indexOfFirstImage = indexOfLastImage - imagesPerPage;
  const currentImages = ImagenesGatos.slice(indexOfFirstImage, indexOfLastImage);

  const totalPages = Math.ceil(ImagenesGatos.length / imagesPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };


    return(
        <div className="container mt-5">
      <div className="row">
        {currentImages.map((image, index) => (
          <div key={index} className="col-md-3 mb-4">
            <img
              src={`/img/${image}.jpg`}
              alt={`Image ${index + 1}`}
              className="img-fluid fixed-size-image"
            />
          </div>
        ))}
      </div>
      <nav className="row">
        <ul className="pagination col-md-6 mx-auto text-center">
          {Array.from({ length: totalPages }, (_, index) => index + 1).map((page) => (
            <li key={page} className={`page-item ${page === currentPage ? 'active' : ''}`}>
              <button
                className="page-link"

                onClick={() => handlePageChange(page)}
              >
                {page}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </div>

        )
    }
    // <div>
    //       {ImagenesGatos.map((imagen, index)=> (
    //             <div key={index} >
    //                 <img src= {`/img/${imagen}.jpg`} alt="" />
    //             </div>
    //       ))}  
    // </div> 