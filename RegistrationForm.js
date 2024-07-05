import React from "react";

const Hello =() => {
    return(
        <div>
            <form>
                <fieldset>
                    <legend>Registration Form</legend>
                    <label>Firstname : </label>
                    <input type="text" id="firstname" placeholder="Firstname" required /><br></br>
                    <label>Lastname : </label>
                    <input type="text" id="lastname" placeholder="Lastname" /><br></br>
                    <label>Mothername : </label>
                    <input type="text" placeholder="mothername" /><br></br>
                    <label>Fathername : </label>
                    <input type="text" placeholder="fathername"/><br></br>
                    <label>Email : </label>
                    <input type="email" id="email" placeholder="email" required/><br></br>
                    <label>Password :</label>
                    <input type="password" id="password" placeholder="enter password" required/><br></br>
                    <label >Gender : </label><br></br>
                    <input type="radio" name="gender" />Male<br></br>
                    <input type="radio" name="gender" />Female<br></br>
                    <label>College : </label>
                    <select>
                    <option>AITS Rajampet</option>
                    <option>KSRM</option>
                    <option>RGM</option>
                    <option>AITS Kadapa</option>
                    <option>AITS Tirupati</option>
                    </select><br></br>
                    <label>Branch : </label>
                    <select>
                        <option>CSE</option>
                        <option>ECE</option>
                        <option>AIDS</option>
                        <option>EEE</option>
                        <option>AIML</option>
                        <option>ME</option>
                        <option>CE</option>
                    </select><br></br>
                    <label>Date of Joining : </label>
                    <input type="date" /><br></br>
                    <label>Year : </label>
                    <input type="year" placeholder="year" /><br></br>
                    <label>End Date : </label>
                    <input type="date" /><br></br>
                    <label>Mobile no. : </label>
                    <input type="text"/><br></br>
                    <label>Address : </label>
                    <textarea rows='4' cols='60' placeholder="enter address"/><br></br>
                    <input type="Submit" name="submit" value="submit"></input>
                    <input type="Reset" name="reset" value="reset"></input>

                </fieldset>
            </form>
        </div>
    );
}

export default Hello;