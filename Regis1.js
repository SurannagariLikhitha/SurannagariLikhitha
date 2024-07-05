import { render } from '@testing-library/react';
import React from 'react';
import { Component } from 'react';

const Form = () =>{
    render() {
        return(
            <div>
        <div>
            <h1 >Registration Form</h1>
            <form>
                <fieldset>
                    <legend >Registration Form</legend>
                    <label> Firstname:</label>
                    <input type="text" id="firstname" placeholder="Firstname" />
                    <label> Lastname:</label>
                    <input type="text" id="lastname" placeholder="Lastname" />
                    <label> Fathername:</label>
                    <input type="text" id="fathername"placeholder="Fathername" />
                    <label> Mothername:</label>
                    <input type="text" name="mothername" placeholder="Mothername"/>
                    <label> Email:</label>
                    <input type="email"  id="email" placeholder="Email" />
                    <label> Password</label>
                    <input type="password" id="password" placeholder="Password" />
                    <label>Gender:</label>
                    <input type="radio" name="gender" />Male
                    <input type="radio" name="gender" />Female
                    <label>College:</label>
                    <select>
                        <option>AITS-Rajampet</option>
                        <option>AITS-Kadapa</option>
                        <option>AITS-Tirupati</option>
                        <option>AITS-Hyderabad</option>
                        <option>RGM</option>
                    </select>
                    <label>Branch:</label>
                    <select>
                         <option>CSE</option>
                         <option>ECE</option>
                         <option>EEE</option>
                         <option>CIVIL</option>
                         <option>MECH</option>
                    </select>
                     <label>Date of joining:</label>
                     <input type="date" />
                     <label>Year:</label>
                     <input type="year" />
                     <label>End date:</label>
                     <input type="date"/>
                     <label>Mobile no:</label>
                     <input type="text" />
                     <label>Address field:</label><br>
                     <textarea rows="5" cols="20" placeholder="Address"></textarea>
                     <input type="Submit" name="submit" value="submit">
                     <input type="Reset" name="reset" value="reset">
                </fieldset>
            </form>
        </div>
        </div>
        );
    }
   
    }

export default Register;
       