import React from 'react';




import Hero from '../components/Hero';





export default class contactPage extends React.Component {
    constructor(props) {
      super(props);
      this.submitForm = this.submitForm.bind(this);
      this.state = {
        status: ""
      };
    }
  
    render() {
      const { status } = this.state;
      return (
        <div className="contactPage container-fluid">
           <Hero title={this.props.title}/>
                <div className='d-flex justify-content-center'>
                    
                        <form className='form  col-sm-12 col-md-8'
                            onSubmit={this.submitForm}
                        action="https://formspree.io/f/mgepbovj"
                        method="POST"
                        >
                        <div className='form-group'>
                            <label htmlFor='full-name'>Name</label>
                            <input className='form-control' id='full-name' name='name' type='text' value={this.state.name} onChange={this.handleChange}/>
                        </div>
                        <div className='form-group'>
                            <label htmlFor='email'>Email</label>
                            <input  className='form-control' id='email' name='email' type='email' value={this.state.email} onChange={this.handleChange}/>
                        </div>
                        <div className='form-group'>
                            <label>Message:</label>
                            <textarea className='form-control' rows='3' type="text" name="message" />
                        </div>
                        <div className='form-group'>
                            {status === "SUCCESS" ? <p>Thanks!</p> : <button className='button'>Submit</button>}
                            {status === "ERROR" && <p>There was an error.</p>}
                        </div>
                </form>
                </div>
                <div className="socials justify-content-center offset-2 col-8">

                   

                    <a href="https://www.linkedin.com/in/tristan-laroche/" target="_blank">My Linkedin</a><br></br>

                    <a href="https://github.com/taroche" target="_blank">My Github</a>
                </div>
            </div>

      );
    }
  
    submitForm(ev) {
      ev.preventDefault();
      const form = ev.target;
      const data = new FormData(form);
      const xhr = new XMLHttpRequest();
      xhr.open(form.method, form.action);
      xhr.setRequestHeader("Accept", "application/json");
      xhr.onreadystatechange = () => {
        if (xhr.readyState !== XMLHttpRequest.DONE) return;
        if (xhr.status === 200) {
          form.reset();
          this.setState({ status: "SUCCESS" });
        } else {
          this.setState({ status: "ERROR" });
        }
      };
      xhr.send(data);
    }
}

// export default contactPage;