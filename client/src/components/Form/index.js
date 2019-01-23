import React from "react";

// This file exports the Input and FormBtn components

function Form() {
  return (
    <div className="col-md-12">
    <div className="card mt-4">
    <div className="card-header">
              <h3>
                 <strong>Book Search</strong>
              </h3>
            </div>
     <form type="text" placeholder="Large text">
     <div class="form-group"><label for="Query"></label><input class="form-control" id="Title" placeholder="ex: Harry Potter" type="text"/>
     </div>
     <button type="submit" class="btn btn-lg btn-danger float-right">Search</button>
</form>
    </div>
    </div>
  );
}

export default Form;

