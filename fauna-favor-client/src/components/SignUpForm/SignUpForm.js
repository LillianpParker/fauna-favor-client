import React from 'react';
import "./SignUpForm.css";

function SignUpForm(props) {
    function openForm(evt, formName) {
        // Declare all variables
        let i, tabcontent, tablinks;

        // Get all elements with class="tabcontent" and hide them
        tabcontent = document.getElementsByClassName("tabcontent");
        for (i = 0; i < tabcontent.length; i++) {
            tabcontent[i].style.display = "none";
        }

        // Get all elements with class="tablinks" and remove the class "active"
        tablinks = document.getElementsByClassName("tablinks");
        for (i = 0; i < tablinks.length; i++) {
            tablinks[i].className = tablinks[i].className.replace(" active", "");
        }

        // Show the current tab, and add an "active" class to the button that opened the tab
        document.getElementById(formName).style.display = "block";
        evt.currentTarget.className += " active";
    }
    return (
        <div id="sign">
            <div class="tab">
                <button class="tablinks" onclick="openForm(event,'Sign Up')">Sign Up</button>
                <button class="tablinks" onclick="openForm(event,'Sign In')">Sign In</button>
                <div id="signUp" class="tabcontent">
                    <form action="action_page.php">
                        <div class="container">
                            <h1>Sign Up</h1>
                            <p>Please fill in this form to create an account.</p>
                            <hr />
                            <label for="email"><b>Email</b></label>
                            <input type="text" placeholder="Enter Email" name="email" required />

                            <label for="psw"><b>Password</b></label>
                            <input type="password" placeholder="Enter Password" name="psw" required />

                            <label for="psw-repeat"><b>Repeat Password</b></label>
                            <input type="password" placeholder="Repeat Password" name="psw-repeat" required />

                            <div class="clearfix">
                                <button type="button" class="cancelbtn">Cancel</button>
                                <button type="submit" class="signupbtn">Sign Up</button>
                            </div>
                        </div>
                    </form>
                    <div id="signIn" class="tabcontent">
                        <div id="signIn" class="tabcontent"></div>
                        <form action="action_page.php">
                            <div class="container">
                                <h1>Sign In</h1>
                                <p>Please fill in this form to sign into your account.</p>
                                <hr />
                                <label for="email"><b>Email</b></label>
                                <input type="text" placeholder="Enter Email" name="email" required />

                                <label for="psw"><b>Password</b></label>
                                <input type="password" placeholder="Enter Password" name="psw" required />

                                <div class="clearfix">
                                    <button type="button" class="cancelbtn">Cancel</button>
                                    <button type="submit" class="signinbtn">Sign In</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignUpForm;
