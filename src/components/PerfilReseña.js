
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../GlobalStates";


export const PerfilReseña = () => {

  const [authState] = useContext(AuthContext);
  const [reviewData, setReviewData] = useState([]);
  const { id } = authState;

  console.log(id)

  const viewReview = async (id) => {
    const urlServerGET = "http://localhost:8080";
    const endpointGET = `/review/${id}`

    
      const response = await axios.get(urlServerGET + endpointGET, {
        params: { id },
      });

    if (response && response.data) {
      console.log(response);
      setReviewData(response.data);
      
    } else {
      alert("No se pudo obtener las reseñas del veterinario.");
    }
  };
 

  useEffect(() => {
    viewReview(id);
    console.log(reviewData);
  }, [])
  

  return (

    <div className="tab-pane" id="messages">
    <div className="alert alert-info alert-dismissible" role="alert">
   <button type="button" className="close" data-dismiss="alert">×</button>
    <div className="alert-icon">
     <i className="icon-info"></i>
    </div>
    <div className="alert-message">
      <span><strong>Info!</strong> ¡Mira que opina la gente de ti!</span>
    </div>
  </div>
    <table className="table table-hover table-striped">
    <tbody>
  {reviewData.map((review) => (
    <tr key={review.id}>
      <td>
        <span className="float-right font-weight-bold">{review.date}</span> {review.content}
      </td>
    </tr>
  ))}
</tbody>
    </table>
</div>
  )
}
