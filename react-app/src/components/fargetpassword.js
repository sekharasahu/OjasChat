import React from "react";

class Update extends React.Component {
    constructor() {
        super()
        this.state = {
          
            email: "",
           password:"",
            arr: [], 
        }
    }
    handlepassword= (e)=>{
        this.setState({ password: e.target.value })
    }
    
    handleemail = (e) => {
        this.setState({ email: e.target.value })
    }
    handlesubmit = (e) => {
        e.preventDefault();
        let data = {
            email: this.state.email,
            password:this.state.password
        }
        this.state.arr.push(data)
        let data1 = this.state.arr
        console.log(this.state.arr)
        this.setState({ arr: data1 })
    }
  

   

    render() {
        return (
            <div className="container">
                <form onSubmit={this.handlesubmit}>

                    <div>
                        <label>email</label>
                        <input type="text" value={this.state.email} onChange={this.handleemail} />
                    </div>

                    <div>
                        <label>password</label>
                        <input type="text" value={this.state.password} onChange={this.handlepassword} />
                    </div>
                    <button type="submit">Submit</button>
                </form>

            </div>
        )
    }
}
export default Update