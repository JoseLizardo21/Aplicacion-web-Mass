import React, {Component} from 'react'
import MASS_LOGO from '../public/imgs/icons-logos/MASS_LOGO.png'
import '../public/styles/navStyles.css'
import { helpFetch } from '../helpers/helpFetch';

class Nav extends Component {
  constructor(props){
    super(props);
    this.API = helpFetch;
    this.state = {Home: true, envGmail: false};
  }
  async componentDidMount(){
    const res = await this.API.get('api')
    this.setState({Home: res.response});
  }
  submitRegis = async(e)=>{
    e.preventDefault();
    const {username, email, password} = e.target;
    const newUser = {
      username: username.value,
      email: email.value,
      password: password.value
    }
    const res = await this.API.post('signUp', {
      mode: 'cors',
      credentials: 'include',
      body: newUser
    })
    this.props.modifyCardCode(res.success);
  }
  render(){
    return (
      <nav className="navbar navbar-expand-lg bg-light">
          <div className="container-fluid">
              <a className='navbar-brand' href='#'>
                  <img src={MASS_LOGO} id='iconMass'/>
              </a>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                  <div className='dropdown'>
                    <button type="button" className="border-0 bg-light dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false" data-bs-auto-close="outside">
                      INICIO
                    </button>
                    <form 
                    className='dropdown-menu dropdown-menu-end p-4' 
                    style={{width: '350px'}}
                    action=''
                    >
                      <div className="mb-3">
                        <label htmlFor="exampleDropdownFormEmail" className="form-label">Email</label>
                        <input type="email" className="form-control" id="exampleDropdownFormEmail" placeholder="email@example.com"/>
                      </div>
                      <div className="mb-3">
                        <label htmlFor="exampleDropdownFormPassword" className="form-label">Password</label>
                        <input type="password" className="form-control" id="exampleDropdownFormPassword" placeholder="Password"/>
                      </div>
                      <button className='btn btn-success w-100'>INICIO</button>
                    </form>
                  </div>

                  <div className='dropdown'>
                    <button type="button" className="border-0 bg-light dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false" data-bs-auto-close="outside">
                      REGISTRATE
                    </button>
                    <form className='dropdown-menu dropdown-menu-end p-4' style={{width: '350px'}} onSubmit={this.submitRegis}>
                      <div className='mb-3'>
                        <label htmlFor='username' className='form-label'>Username</label>
                        <input type='text' name='username' className='form-control' id='usernameRegis' placeholder='Username'/>
                      </div>
                      <div className="mb-3">
                        <label htmlFor="exampleDropdownFormEmail2" className="form-label">Email</label>
                        <input type="email" name='email' className="form-control" id="exampleDropdownFormEmail2" placeholder="email@example.com"/>
                      </div>
                      <div className="mb-3">
                        <label htmlFor="exampleDropdownFormPassword2" className="form-label">Password</label>
                        <input type="password" className="form-control" name='password' id="exampleDropdownFormPassword2" placeholder="Password"/>
                      </div>
                      <button className='btn btn-primary w-100' type='submit'>REGISTRARSE</button>
                    </form>
                  </div>

                  <div className="navbar-nav">
                    <div className='nav-link active' aria-current="page">CENTRO DE AYUDA</div>
                  </div>
              </div>
          </div>
      </nav>
    )
  }
}

export default Nav
