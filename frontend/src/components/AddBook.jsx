import React from 'react'

const AddBook = () => {
    const [title, setTitle] = useState("");
    const [description , setDescription] = useState("");
    const [author, setAuthor] = useState("");
    const [price, setPrice] = useState("");
    const [category, setCategory] = useState("");
    const [errors, setErrors] = useState("");
    const [formErrors, setFormErrors] = useState({});
    const navigate = useNavigate();

    // function isValidEmail(email) {
    //   return /\S+@\S+\.\S+/.test(email);
    // }

  const saveBook = async (e) => {  
    e.preventDefault();
    setFormErrors(validate());
    const book = {
        title,
        description,
        author,
        price,
        category,
    };

    if (
      book.title.length <= 0 ||
      book.description.length <= 0 ||
      book.author.length <= 0 ||
      book.price.length <= 0 ||
      book.category.length <= 0
    ) {
      setErrors(true);
      return;
    }

   

    axios
      .post("http://localhost:3000/book", book)
      .then((response) => {
        swal({
          title: "Book Added Successfully!",
          icon: "success",
          confirmButtonText: "OK",
          confirmButtonColor: "#12af39",
          className: "store-swal-button",
        }).then(() => {
          navigate("/");
        });
      });
  };

  //form validation

  const validate = () => {
    const errors = {};
    
    if (!title) {
      errors.title = "Title is required!";
    }
    if (!description) {
      errors.name = "Description is required!";
    }
    if (!author) {
      errors.author = "Author is required!";
    }
    if (!price) {
      errors.price = "Price is required!";
    }
    if (!category) {
      errors.category = "phone is required!";
    }

    
    return errors;
  };
  return (
    <div className="store-add-product py-4 d-flex align-items-center flex-column justify-content-center">
    <div className=" store-form-outer-layer">
      <h2 className="display-6"> Add Book to System </h2>
      <small id="emailHelp" className="form-text text-muted">
        Enter the details of the new Book
      </small>

      <div className="store-add-product-form-inner  py-4">
      <form>
      <div class="form-group">
  <label for="inputAddress">Title</label>
  <input type="text" class="form-control" id="inputAddress" placeholder="Title"
  value={title}
  onChange={(e) => {
    setTitle(e.target.value);
  }}/>
   <p class="text-danger">{formErrors.title}</p>
</div>
<div class="form-row">
  <div class="form-group col-md-6">
    <label for="inputPassword4">Author</label>
    <input type="text" class="form-control" id="inputPassword4" placeholder="Author"
     value={author}
     onChange={(e) => {
       setAuthor(e.target.value);
     }}/>
     <p class="text-danger">{formErrors.author}</p>
  </div>
</div>
<div class="form-row">
  <div class="form-group col-md-6">
    <label for="inputPassword4"><Price></Price></label>
    <input type="number" class="form-control" id="inputPassword4" placeholder="Price"
     value={price}
     onChange={(e) => {
       setPrice(e.target.value);
     }}/>
     <p class="text-danger">{formErrors.price}</p>
  </div>
</div>
<div class="form-row">
  <div class="form-group col-md-6">
  <label for="inputState">Category</label>
    <select id="inputState" class="form-control" value={category} onChange={e=>setCategory(e.target.value)}>
      <option selected>Category</option>
      <option>Adventure</option>
      <option>Classics</option>
      <option>Crime</option>
      <option>Fantacy</option>
    </select>
    <p class="text-danger">{formErrors.category}</p>
  </div>
</div>
<div class="form-group">
  <label for="exampleFormControlTextarea1">Description</label>
  <input class="form-control" id="exampleFormControlTextarea1" style={{height:"80px"}} value={description}
    onChange={(e) => {
      setDescription(e.target.value);
    }}/>
    <p class="text-danger">{formErrors.description}</p>
</div>
<div class="form-group">
  
</div>
<div style={{float:"right"}}>
<Link to="/" type="submit" class="btn btn-danger">Cancel</Link>
<button type="submit" class="btn btn-primary" style={{marginLeft:"20px"}} onClick={saveBook}>Add People</button>

</div>
</form>
      </div>
    </div>
  </div>
  )
}

export default AddBook