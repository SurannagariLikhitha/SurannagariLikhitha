import React from 'react';
import { Component } from 'react';
class Register extends React.Component {
    render(){
        return(
            <div>
                <div class="row">
                    <label class="col-sm-2 col-form-label" >Firstname</label>
                    <div class="col">
                        <div class="col-sm-10">
                            <input type="text" class="form-control" placeholder="First name" aria-label="First name" />
                        </div>
                    </div>
                    <label>Lastname</label>
                    <div class="row">
                        <input type="text" class="form-control" placeholder="Last name" aria-label="Last name" />
                        </div>
                        </div>
                <div class="mb-3 row">
                    <label for="staticEmail" class="col-sm-2 col-form-label">Email</label>
                    <div class="col-sm-10">
                        <input type="text" readonly class="form-control-plaintext" id="staticEmail" value="email@example.com" />
                        </div>
                        </div>
                <div class="mb-3 row">
                    <label for="inputPassword" class="col-sm-2 col-form-label">Password</label>
                    <div class="col-sm-10">
                        <input type="password" class="form-control" id="inputPassword" />
                        </div>
                        </div>
            </div>
        );
    }
}
export default Register;