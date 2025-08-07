import Notes from './Notes'
const Home = () => {
  return (
    <>
    <div className='container'>
      <h1>
        Add a note
      </h1>
    <form className="row g-3">
  <div className="col-md-12">
    <label htmlFor="inputEmail4" className="form-label">Email</label>
    <input type="email" className="form-control" id="inputEmail4"/>
  </div>
  <div className="col-md-12">
    <label htmlFor="inputPassword4" className="form-label">Password</label>
    <input type="password" className="form-control" id="inputPassword4" />
  </div>
  <div className="col-12">
    <div className="form-check">
      <input className="form-check-input" type="checkbox" id="gridCheck"/>
      <label className="form-check-label" htmlFor="gridCheck">
        Check me out
      </label>
    </div>
  </div>
  <div className="col-12">
    <button type="submit" className="btn btn-primary">Sign in</button>
  </div>
</form>
<div>
  <Notes/>
</div>
</div>
</>
  )
}

export default Home
