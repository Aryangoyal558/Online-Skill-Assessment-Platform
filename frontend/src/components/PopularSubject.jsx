import PopularSubjectCard from "./card/PopularSubjectCard";
import "./PopularSubject.css";

function PopularSubject({ image, name, role, description }) {
  return (
       <div className="container">
             <div className="row mb-4 mx-5 my-5">
                  <div className="col-md-4">
                    <button className="btn btn-outline-primary rounded-3">Course List</button>
                  </div>

                  <div className="col-md-4 text-center">
                       <h6 className="text-white">Forging relationships between multi 
                        to national governments and global NGOs begins</h6>
                  </div>
                  <div className="col-md-4 text-end">
                       <button className="btn btn-primary rounded-pill ">Explore Subjects</button>
                  </div>
             </div>
             <div className="row mx-3 my-5">
                  <div className="col-md-4 py-3 px-3">
                     <PopularSubjectCard/>
                  </div>
                  <div className="col-md-4 py-3 px-3">
                     <PopularSubjectCard/>
                  </div>
                  <div className="col-md-4 py-3 px-3">
                     <PopularSubjectCard/>
                  </div>
                  <div className="col-md-4 py-3 px-3">
                     <PopularSubjectCard/>
                  </div>
                  <div className="col-md-4 py-3 px-3">
                     <PopularSubjectCard/>
                  </div>
                  <div className="col-md-4 py-3 px-3">
                     <PopularSubjectCard/>
                  </div>
                   
             </div>
       </div>    
);
}

export default PopularSubject;